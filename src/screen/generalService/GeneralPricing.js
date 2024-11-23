import { StyleSheet, Text, View, Animated, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { AppHeader, BackBtn, CustomIcon, Label, NewAppointment, Pressable, Scrollable } from '../../components';
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';
import { General_PRICES } from '../../assets/data/DummyData';
import * as Animatable from 'react-native-animatable';
import { SCREENS } from '../../enums/AppEnums';

const AnimatableView = Animatable.createAnimatableComponent(View);

const GeneralPricing = (props) => {
  const { title } = props?.route?.params;
  const { navigation } = props

  // State to track the opened section
  const [openedSection, setOpenedSection] = useState(null);
  // State to store the selected service and tier
  const [selectedService, setSelectedService] = useState({
    serviceName: '',
    selectedTier: ''
  });

  const handlePress = (index) => {
    if (openedSection === index) {
      // Close the section if it's already open, reset selectedService
      setOpenedSection(null);
      setSelectedService({ serviceName: '', selectedTier: '' });
    } else {
      // Open a different section and reset selectedService
      setOpenedSection(index);
      setSelectedService({ serviceName: '', selectedTier: '' });
    }
  };

  const handleTierSelect = (tier, tierName, serviceName) => {
    // Update selectedService state with chosen tier, tierName, and service name
    setSelectedService({
      serviceName: serviceName,
      selectedTier: `${tierName}: ${tier}`
    });
  };

  const openModal = () => {
    if (selectedService.serviceName && selectedService.selectedTier) {
      navigation.navigate(SCREENS.NEW_APPOINTMENT, { service: { selectedService } })
    }
  };

  return (
    <View style={styles.container}>

      <AppHeader
        leftComp={<BackBtn />}
        title={title}
      />

      {selectedService.serviceName && selectedService.selectedTier ? (
        <Pressable style={styles.newAppointment} onPress={() => openModal()}>
          <Label style={styles.newAppointText}>New Appointment</Label>
        </Pressable>
      ) : null}

      <Scrollable containerStyle={styles.scrollView}>
        {General_PRICES.map((item, index) => (
          <AnimatableView animation="pulse" key={index}>
            <Pressable style={styles.card} onPress={() => handlePress(index)}>
              <Label style={styles.cardTitle}>{item.serviceName}</Label>
              <CustomIcon
                family="MaterialIcons"
                name={openedSection === index ? 'arrow-drop-up' : 'arrow-drop-down'}
                size={hp(5)}
              />
            </Pressable>

            {/* Dropdown Content: Display when the section is open */}
            {openedSection === index && (
              <View style={styles.dropdownContent}>
                <Label style={styles.subtitle}>Tier 1 (Income &lt; $100K)</Label>
                <Pressable
                  style={styles.optionscardView}
                  onPress={() => handleTierSelect(item['Tier 1 (Income < $100K)'], 'Tier 1 (Income < $100K)', item.serviceName)}
                >
                  <Label>{item['Tier 1 (Income < $100K)']}</Label>
                  <CustomIcon
                    family="Ionicons"
                    name={selectedService.selectedTier === `Tier 1 (Income < $100K): ${item['Tier 1 (Income < $100K)']}` ? 'radio-button-on' : 'radio-button-off'}
                    size={hp(2.5)}
                  />
                </Pressable>

                <Label style={styles.subtitle}>Tier 2 (Income &lt; $250K)</Label>
                <Pressable
                  style={styles.optionscardView}
                  onPress={() => handleTierSelect(item['Tier 2 (Income < $250K)'], 'Tier 2 (Income < $250K)', item.serviceName)}
                >
                  <Label>{item['Tier 2 (Income < $250K)']}</Label>
                  <CustomIcon
                    family="Ionicons"
                    name={selectedService.selectedTier === `Tier 2 (Income < $250K): ${item['Tier 2 (Income < $250K)']}` ? 'radio-button-on' : 'radio-button-off'}
                    size={hp(2.5)}
                  />
                </Pressable>

                <Label style={styles.subtitle}>Tier 3 (Income &lt; $500K)</Label>
                <Pressable
                  style={styles.optionscardView}
                  onPress={() => handleTierSelect(item['Tier 3 (Income < $500K)'], 'Tier 3 (Income < $500K)', item.serviceName)}
                >
                  <Label>{item['Tier 3 (Income < $500K)']}</Label>
                  <CustomIcon
                    family="Ionicons"
                    name={selectedService.selectedTier === `Tier 3 (Income < $500K): ${item['Tier 3 (Income < $500K)']}` ? 'radio-button-on' : 'radio-button-off'}
                    size={hp(2.5)}
                  />
                </Pressable>
              </View>
            )}
          </AnimatableView>
        ))}
      </Scrollable>
    </View>
  );
};

export default GeneralPricing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2%',
    backgroundColor: COLOR.white,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: 10,
    backgroundColor: COLOR.white,
    marginVertical: hp(1.5),
    borderRadius: hp(1),
    shadowColor: COLOR.darkBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownContent: {
    paddingHorizontal: wp(4),
    paddingVertical: 10,
    backgroundColor: COLOR.white,
    borderRadius: hp(1),
  },
  subtitle: {
    ...TEXT_STYLE.textBold,
    marginVertical: hp(1),
  },
  cardTitle: {
    ...TEXT_STYLE.bigTextSemiBold,
    width: '85%',
  },
  scrollView: {
    flexGrow: 1,
    marginTop: hp(2),
    paddingHorizontal: wp(2),
    paddingBottom: hp(4),
  },
  optionscardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2)
  },
  newAppointment: {
    backgroundColor: COLOR.darkBlue,
    alignSelf: 'flex-end',
    paddingVertical: "1%",
    paddingHorizontal: "2%",
    borderRadius: hp(1)
  },
  newAppointText: {
    color: COLOR.white
  }
});