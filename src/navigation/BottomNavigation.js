import { View, StyleSheet, NativeModules } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TABS } from '../enums/AppEnums';
import { COLOR, commonStyles, hp, TEXT_STYLE } from '../enums/StyleGuide';
import { isIOS } from '../utils/MyUtils';
import * as ui from '../screen';
import { BOTTOM_TAB } from '../assets/data/DummyData';
import { CustomIcon, Label } from '../components';
import { useSelector } from 'react-redux';



const renderIcon = (routeName) => ({ focused }) => {

    const bottomIcons = BOTTOM_TAB;
    const item = bottomIcons[routeName];
    const activeColor = focused ? COLOR.white : COLOR.grey;
    const iconName = item?.iconName;
    const family = item?.family;

    return (
        <View style={styles.tabContainer}>
            <CustomIcon name={iconName} family={family} color={activeColor} size={hp(3.5)} />
            {/* <Label color={activeColor} style={styles.text}>
                {item?.title}
            </Label> */}
        </View>
    );
};



const { StatusBarManager } = NativeModules;

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();


 
    return (
        <SafeAreaProvider>
            <View style={styles.root}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            height: isIOS ? hp(10) : hp(8),
                            backgroundColor: COLOR.darkBlue,
                            alignItems:'center',
                            justifyContent:'space-evenly',
                            paddingTop: hp(1.5),
                            paddingBottom: hp(1.5),
                        },
                        tabBarIcon: renderIcon(route.name),
                    })}
                >
                    <Tab.Screen name={TABS.HOME} component={ui.HomeScreen} />
                    <Tab.Screen name={TABS.SEARCH} component={ui.SearchScreen} />
                    <Tab.Screen name={TABS.APPOINTMENTS} component={ui.AppointmentsScreen} />
                    <Tab.Screen name={TABS.MORE} component={ui.MoreScreen} />
                </Tab.Navigator>
            </View>
        </SafeAreaProvider>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLOR.lightGrey,
    },
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        ...TEXT_STYLE.smallText,
        marginTop: hp(0.3),
        fontSize: 8,
    },
});