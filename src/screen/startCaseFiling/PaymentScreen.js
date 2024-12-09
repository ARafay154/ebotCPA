import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AppHeader, BackBtn, Button, CustomIcon, Label, Pressable } from '../../components'
import { COLOR, hp, TEXT_STYLE } from '../../enums/StyleGuide'
import { useDispatch, useSelector } from 'react-redux'
import { paymentApis } from '../../apis/PaymentApi'
import { FIREBASE_COLLECTIONS, PAYMENT_UTILS, SCREENS } from '../../enums/AppEnums'
import { showFlash } from '../../utils/MyUtils'
import { addDocument, getDocumentData, saveData } from '../../services/FirebaseMethods'
import { CardField, useStripe } from '@stripe/stripe-react-native'
import { setRegistration, setUser } from '../../redux/action/Action'

const PaymentScreen = ({navigation}) => {
  const registration = useSelector(({ appReducer }) => appReducer.registration);
  const user = useSelector(({ appReducer }) => appReducer.user);
  const [fetchLoading, setFetchLoading] = useState(false)
  const [allCards, setAllCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [cardDetails, setCardDetails] = useState({})
  const [userCreationLoading, setUserCreationLoading] = useState(true)
  const stripe = useStripe()
  const [showField, setShowField] = useState(false)
  const [selectedCard, setSelectedCard] = useState([])
  const [paymentLoading, setPaymentLoading] = useState(false)
  const dispatch = useDispatch()

  const fetchPaymentMethods = async (user) => {
    try {
      setFetchLoading(true);
      const apiData = { customer: user?.stripeId };
      let pmIds = await paymentApis(PAYMENT_UTILS.GET_CARDS, apiData);

      if (pmIds && pmIds.data) {
        setAllCards(pmIds.data.data);
      } else {
        setAllCards([]);
        setFetchLoading(false)
      }
    } catch (error) {
      console.log("Error fetching payment methods:", error);
      setAllCards([]);
    } finally {
      setFetchLoading(false);
    }
  };

  const createUser = async () => {
    try {
      const apiData = {
        email: user?.email,
        name: user?.name
      }
      const stripeCustomer = await paymentApis(PAYMENT_UTILS.NEW_CUSTOMER, apiData)
      if (!stripeCustomer || !stripeCustomer.data.id) {
        showFlash("Something went wrong!. Try again later")
        return;
      }

      const userData = {
        stripeId: stripeCustomer?.data?.id
      }

      await saveData(FIREBASE_COLLECTIONS.USERS, user?.uid, userData)
      const data = await getDocumentData(FIREBASE_COLLECTIONS.USERS, user?.uid)
      dispatch(setUser(data));
    } catch (error) {
      console.log("error while create user payment account", error)
    }
  }

  useEffect(() => {
    if (user?.stripeId) {
      fetchPaymentMethods(user);
    }
  }, []);

  useEffect(() => {
    if (!user?.stripeId) {
      createUser();
    }
  }, []);

  const handleCardAdd = async () => {

    if (!cardDetails.complete) {
      showFlash("Incomplete card details.");
      return;
    }

    try {
      setLoading(true)
      const { token, error } = await stripe.createToken({
        type: 'Card',
        ...cardDetails,
      });

      if (error) {
        console.log('Error creating token:', error);
        showFlash("Error while adding card");
        return;
      }

      const apiData = {
        customer_id: user?.stripeId,
        token: token.id,
      };

      const response = await paymentApis(PAYMENT_UTILS.NEW_CARD, apiData);
      if (response) {
        // Fetch the updated list of payment methods
        setShowField(false)
        await fetchPaymentMethods(user);
        showFlash("Card added Successfully");
      } else {
        showFlash("Error while adding card");
      }
    } catch (error) {
      console.log('Error adding new card:', error);
      showFlash("Error while adding card");
      setLoading(false)
    } finally {
      setLoading(false)

    }
  };

  const handlePayment = async () => {

    if (!selectedCard || !selectedCard.id) {
      showFlash('Please select a payment method.');
      return;
    }

    Alert.alert(
      'Confirm Payment',
      'Are you sure you want to proceed with the payment?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: async () => {
            try {
              setPaymentLoading(true);

              const amount = Number(registration?.service?.price);

              const apiData = {
                customer_id: user?.stripeId,
                card_id: selectedCard?.id,
                amount: amount,
              };

              const response = await paymentApis(PAYMENT_UTILS.CREATE_CHARGE, apiData);

              if (response.data.status !== 'succeeded') {
                let errorMessage = 'Payment failed. Please try again.';
                if (response.error) {
                  errorMessage = response.error.message || errorMessage;
                } else if (response.outcome && response.outcome.seller_message) {
                  errorMessage = response.outcome.seller_message;
                }
                showFlash(errorMessage);
                setPaymentLoading(false);
                return;
              } else {
                const transationData = {
                  transacionId: response?.data?.id,
                  transationDate: new Date(),
                  amount: amount,
                  currency: 'USD',
                  card_id: selectedCard?.id,
                  caseId: registration?.caseId,
                  customerId: registration?.customerId
                }
                await addDocument(FIREBASE_COLLECTIONS.TRANSACTIONS_HISTORY, transationData)
                showFlash('Payment confirmed.');
                setPaymentLoading(false);
                const updateState = {
                  ...registration,
                  transacionId: response?.data?.id,
                  paid: true
                }
                dispatch(setRegistration(updateState));
                navigation.navigate(SCREENS.CALENDER)
              }
            } catch (error) {
              console.log('Error processing payment:', error);
              Alert.alert('Error processing payment');
              setPaymentLoading(false);
            } finally {
              setPaymentLoading(false);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader
        leftComp={<BackBtn />}
        title={"Payment"}
        style={{ marginBottom: hp(2) }}
      />

      <Pressable style={styles.addPaymentMethodPress} onPress={() => setShowField(prev => !prev)}>
        <Label style={styles.addPaymentMethod}> {showField ? "close" : "Add Payment method"}</Label>
      </Pressable>

      {
        showField ?
          <View style={styles.cardContainer}>
            <CardField
              postalCodeEnabled={false}
              placeholder={{
                number: '1234 1234 1234 1234',
              }}
              cardStyle={{
                backgroundColor: COLOR.white,
                textColor: COLOR.purple,
                borderRadius: hp(1),
                borderWidth: 1,
                borderColor: COLOR.purple,
                placeholderColor: COLOR.purple,
              }}
              style={styles.cardField}
              onCardChange={(cardDetails) => {
                setCardDetails(cardDetails);
              }}


            />
            <Pressable style={styles.addCardPressable} onPress={handleCardAdd}>
              {
                loading ?
                  <ActivityIndicator size='small' color={COLOR.white} />
                  :
                  <Label style={styles.addCardTxt}>Add</Label>
              }
            </Pressable>
          </View>
          : null
      }
      <Label style={styles.saveCards}>Save Cards</Label>
      {
        fetchLoading ? (
          <ActivityIndicator size='small' color={COLOR.darkBlue} style={{ alignSelf: 'center', marginTop: hp(2) }} />
        ) : allCards.length === 0 ? (
          <Label style={styles.noCardText}>No cards saved</Label>
        ) : (
          allCards.map((item, index) => (
            <Pressable key={index} style={styles.cardView} onPress={() => setSelectedCard(item)}>
              <View>
                <Label style={styles.cardText}>xxxx xxxx xxxx {item?.card?.last4}</Label>
                <Label style={styles.cardText}>Exp: {item?.card?.exp_month}/{item?.card?.exp_year}</Label>
              </View>
              {
                selectedCard?.card?.last4 && item.card.last4 === selectedCard.card.last4
                  ?
                  <CustomIcon family='Ionicons' name={"radio-button-on"} size={hp(2.5)} />
                  :
                  <CustomIcon family='Ionicons' name={"radio-button-off"} size={hp(2.5)} />
              }
            </Pressable>
          ))
        )
      }

      <Button
        style={{ marginTop: hp(4) }}
        text={"Confirm"}
        onPress={() => handlePayment()}
        isLoading={paymentLoading}
        disabled={paymentLoading}
      />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: COLOR.white,
  },
  addPaymentMethod: {
    ...TEXT_STYLE.textBold,
    color: COLOR.white
  },
  addPaymentMethodPress: {
    marginTop: hp(2),
    backgroundColor: COLOR.darkBlue,
    alignSelf: 'center',
    paddingVertical: "1%",
    paddingHorizontal: "2%",
    borderRadius: hp(0.75)
  },
  cardContainer: {
    padding: hp(2),
    backgroundColor: COLOR.lightGrey,
    borderRadius: hp(1),
    marginVertical: hp(2),
  },
  cardField: {
    height: hp(7), // Adjust height for better visibility
    marginVertical: hp(1),
  },
  addCardPressable: {
    backgroundColor: COLOR.darkBlue,
    paddingVertical: hp(1.5),
    borderRadius: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  addCardTxt: {
    color: COLOR.white,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  saveCards: {
    ...TEXT_STYLE.textBold,
    textDecorationLine: 'underline',
    marginTop: hp(1)
  },
  noCardText: {
    ...TEXT_STYLE.textSemiBold,
    textAlign: 'center',
    marginTop: hp(2),
  },
  cardText: {
    ...TEXT_STYLE.textSemiBold,
    color: COLOR.darkBlue
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.white,
    padding: hp(2),
    borderRadius: hp(1),
    marginVertical: hp(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
})