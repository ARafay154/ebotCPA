import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  FIREBASE_COLLECTIONS, SCREENS, TABS } from '../enums/AppEnums';
import * as ui from '../screen';
import BottomNavigation from './BottomNavigation';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth'
import { getDocumentData } from '../services/FirebaseMethods';
import { setUser } from '../redux/action/Action';

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
    const user = useSelector(({ appReducer }) => appReducer.user);
    const dispatch = useDispatch()


    const getActiveUser = async () => {
        const userActive = auth().currentUser;
        if (userActive?.uid) {
            const data = await getDocumentData(FIREBASE_COLLECTIONS.USERS, userActive?.uid)
            if (data) {
                dispatch(setUser(data)); // Update Redux store with user data
            } else {
                dispatch(setUser(null));
            }
        }
    }

    useEffect(() => {
        getActiveUser()
    }, [])


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    !user ? (
                        // Agar user null hai (not logged in)
                        <>
                            <Stack.Screen name={SCREENS.SPLASH} component={ui.SplashScreen} />
                            <Stack.Screen name={SCREENS.ONBOARD_1} component={ui.OnboardingScreen1} />
                            <Stack.Screen name={SCREENS.LOGIN} component={ui.LoginScreen} />
                            <Stack.Screen name={SCREENS.SIGNUP} component={ui.SignUpScreen} />
                            <Stack.Screen name={SCREENS.FORGOT} component={ui.ForgotPasswordScreen} />
                        </>
                    ) : (
                        // Agar profileComplete true hai
                        <>
                            <Stack.Screen name={TABS.TAB} component={BottomNavigation} />
                            <Stack.Screen name={SCREENS.FINANCIAL_HOME} component={ui.FinancialHome} />
                            <Stack.Screen name={SCREENS.FINANCIAL_BOOKKEEPING} component={ui.BookkeepingScreen} />
                            <Stack.Screen name={SCREENS.FINANCIAL_CFO} component={ui.FractionalCfoScreen} />
                            <Stack.Screen name={SCREENS.FINANCIAL_ACCOUNTING} component={ui.AccountingScreen} />
                            <Stack.Screen name={SCREENS.TAX_HOME} component={ui.TaxHome} />
                            <Stack.Screen name={SCREENS.TAX_COMPLIANCE} component={ui.TaxCompliance} />
                            <Stack.Screen name={SCREENS.TAX_PLANNING} component={ui.TaxPlanning} />
                            <Stack.Screen name={SCREENS.TAX_RESOLUTION} component={ui.TaxResolution} />
                            <Stack.Screen name={SCREENS.S4_HOME} component={ui.S4FinanceHome} />
                            <Stack.Screen name={SCREENS.S4_CENTRAL} component={ui.CentralFinance} />
                            <Stack.Screen name={SCREENS.S4_IMPLEMENTS} component={ui.Implementations} />
                            <Stack.Screen name={SCREENS.S4_SUPPORT_TRAINING} component={ui.SupportandTraining} />
                            <Stack.Screen name={SCREENS.GENERAL_SERVICE} component={ui.GeneralServiceHome} />
                            <Stack.Screen name={SCREENS.FINANCE_PRICING} component={ui.PricingScreen} />
                            <Stack.Screen name={SCREENS.TAX_PRICING} component={ui.TaxPricingScreen} />
                            <Stack.Screen name={SCREENS.S4_PRICING} component={ui.S4PricingScreen} />
                            <Stack.Screen name={SCREENS.GENERAL_PRICING} component={ui.GeneralPricing} />
                            <Stack.Screen name={SCREENS.FAQS} component={ui.FAQsScreen} />
                            <Stack.Screen name={SCREENS.ABOUTUS} component={ui.AboutUsScreen} />
                            <Stack.Screen name={SCREENS.CONTACTUS} component={ui.ContactUsScreen} />
                            <Stack.Screen name={SCREENS.TERMS_SERVICE} component={ui.TermsOfServiceScreen} />
                            <Stack.Screen name={SCREENS.PRIVACY} component={ui.PrivacyPolicyScreen} />
                            <Stack.Screen name={SCREENS.FOR_PROFESSIONAL} component={ui.ProfessionalScreen} />
                            <Stack.Screen name={SCREENS.FOR_AFFILIATE} component={ui.AffiliateScreen} />
                            <Stack.Screen name={SCREENS.ACCOUNT_TYPE} component={ui.AccountTypeScreen} />
                            <Stack.Screen name={SCREENS.NEW_APPOINTMENT} component={ui.NewAppointment} />
                            <Stack.Screen name={SCREENS.VIEW_PDF} component={ui.ViewPdfScreen} />
                            <Stack.Screen name={SCREENS.EDIT_PROFILE} component={ui.EditProfileScreen} />
                            <Stack.Screen name={SCREENS.START_CASE_FILING} component={ui.StartCaseFillingScreen} />
                            <Stack.Screen name={SCREENS.CASEFILLING_CONFIRM} component={ui.ConfirmationScreen} />
                            <Stack.Screen name={SCREENS.PAYMENT} component={ui.PaymentScreen} />
                            <Stack.Screen name={SCREENS.DOCUMENTS_UPLOAD} component={ui.DocumentsUploadScreen} />
                            <Stack.Screen name={SCREENS.CALENDER} component={ui.CalenderScreen} />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation

const styles = StyleSheet.create({})