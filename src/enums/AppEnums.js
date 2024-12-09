export const KEYBOARD_TYPE = {
    DEFAULT: 'default',
    DECIMAL_PAD: 'decimal-pad',
    NUMERIC: 'numeric',
    EMAIL: 'email-address',
    PHONE_PAD: 'phone-pad',
    URL: 'url',
  }


  export const SCREENS = {
    SPLASH:"SplashScreen",
    ONBOARD_1:"OnboardingScreen1",
    ONBOARD_2:"OnBoardingScreen2",
    ONBOARD_3:"OnBoardingScreen3",
    LOGIN:"LoginScreen",
    SIGNUP:"SignUpScreen",
    FORGOT:"ForgotScreen",
    FINANCIAL_HOME:"FinancialHome",
    FINANCIAL_ACCOUNTING:"AccountingScreen",
    FINANCIAL_BOOKKEEPING:"BookkeepingScreen",
    FINANCIAL_CFO:"FractionalCfoScreen",
    TAX_HOME:"TaxHome",
    TAX_PLANNING:"TaxPlanning",
    TAX_RESOLUTION:"TaxResolution",
    TAX_COMPLIANCE:"TaxComliance",
    S4_HOME:"S4FinanceHome",
    S4_IMPLEMENTS:"Implementations",
    S4_CENTRAL:"CentralFinance",
    S4_SUPPORT_TRAINING:"SupportandTraining",
    GENERAL_SERVICE:"GeneralServiceHome",
    FINANCE_PRICING:"PricingScreen",
    TAX_PRICING:"TaxPricingScreen",
    S4_PRICING:"S4PricingScreen",
    GENERAL_PRICING:"GeneralPricing",
    FAQS:"FAQsScreen",
    ABOUTUS:"AboutUsScreen",
    PRIVACY:"PrivacyPolicyScreen",
    TERMS_SERVICE:"TermsOfServiceScreen",
    CONTACTUS:"ContactUsScreen",
    FOR_PROFESSIONAL:"ProfessionalScreen",
    FOR_AFFILIATE:"AffiliateScreen",
    ACCOUNT_TYPE:"AccountTypeScreen",
    NEW_APPOINTMENT:"NewAppointment",
    VIEW_PDF:"ViewPdfScreen",
    EDIT_PROFILE:"EditProfileScreen",
    START_CASE_FILING:"StartCaseFillingScreen",
    CASEFILLING_CONFIRM:"ConfirmationScreen",
    PAYMENT:"PaymentScreen",
    DOCUMENTS_UPLOAD:"DocumentsUploadScreen",
    CALENDER:"CalenderScreen"

    
  }
export const TABS = {
    HOME: "HomeScreen",
    SEARCH: "SearchScreen",
    APPOINTMENTS: "AppointmentsScreen",
    MORE: "MoreScreen",
    TAB: "BottomNavigation"
};


export const FIREBASE_COLLECTIONS = {
  USERS:"users",
  APPOINTMENTS:"appointments",
  TRANSACTIONS_HISTORY:"transaction_history"
}


export const FIREBASE_STORAGE = {
  DOCUMENTS:"documents"
}

export const STATUS = {
  PENDING:"pending",
}



export const CASE_TYPE={
  INDIVIDUAL:"individual",
  BUSINESS:"business"
}


export const STRIPE_PUBLISHKEY="pk_test_51QIa6CI8FUx9qxcaXssQ9CrbYdy3Pbn9TqFr53yCW62yJnfi6mfPUcXpnpUAzeLmNj3SkGML2iQjYIfrNplsw7Pn00PnziuHi5"



export const PAYMENT_UTILS = {
  NEW_CUSTOMER:"/create-customer",
  NEW_CARD:"/add-newCard",
  GET_CARDS:"/paymentMethods_get",
  CREATE_CHARGE:"/create-charges"
}