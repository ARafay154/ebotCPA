import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AppHeader, BackBtn, CustomIcon, Label, Pressable, Scrollable } from '../../components'
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { SUPPORTED_TRAINING_PRICING,CENTRAL_FINANCE_PRICING,FINANCE_IMPLEMENT_PRICING } from '../../assets/data/DummyData'
import * as Animatable from 'react-native-animatable';

const AnimatableView = Animatable.createAnimatableComponent(View);


const S4PricingScreen = (props) => {
    const { title } = props?.route?.params;

    // State to track the opened section for each category
    const [openedSections, setOpenedSections] = useState({
        planning: null,
        compliance: null,
        resolution: null,
    });

    // Handle press for different sections
    const handlePress = (section, index) => {
        setOpenedSections(prev => ({
            planning: section === 'planning' ? (prev.planning === index ? null : index) : null,
            compliance: section === 'compliance' ? (prev.compliance === index ? null : index) : null,
            resolution: section === 'resolution' ? (prev.resolution === index ? null : index) : null,
        }));
    };

    return (
        <View style={styles.container}>
            <AppHeader leftComp={<BackBtn />} title={title} />
            <Scrollable containerStyle={styles.scrollView}>
                
                {/* Tax Planning Prices */}
                <Label style={styles.typeHeading}>Implementations Prices</Label>
                {FINANCE_IMPLEMENT_PRICING.map((item, index) => (
                    <AnimatableView animation="pulse" key={index}>
                        <Pressable style={styles.card} onPress={() => handlePress('planning', index)}>
                            <Label style={styles.cardTitle}>{item.title}</Label>
                            <CustomIcon
                                family='MaterialIcons'
                                name={openedSections.planning === index ? "arrow-drop-up" : "arrow-drop-down"}
                                size={hp(5)}
                            />
                        </Pressable>
                        {openedSections.planning === index && (
                            <View style={styles.dropdownContent}>
                                <Label>{item.text}</Label>
                                <Label style={styles.subtitle}>Price:</Label>
                                <Label>{item.price}</Label>
                            </View>
                        )}
                    </AnimatableView>
                ))}

                {/* Tax Compliance Prices */}
                <Label style={styles.typeHeading}>Central Finance(CFIN) Prices</Label>
                {CENTRAL_FINANCE_PRICING.map((item, index) => (
                    <AnimatableView animation="pulse" key={index}>
                        <Pressable style={styles.card} onPress={() => handlePress('compliance', index)}>
                            <Label style={styles.cardTitle}>{item.title}</Label>
                            <CustomIcon
                                family='MaterialIcons'
                                name={openedSections.compliance === index ? "arrow-drop-up" : "arrow-drop-down"}
                                size={hp(5)}
                            />
                        </Pressable>
                        {openedSections.compliance === index && (
                            <View style={styles.dropdownContent}>
                                <Label>{item.text}</Label>
                                <Label style={styles.subtitle}>Price:</Label>
                                <Label>{item.price}</Label>
                            </View>
                        )}
                    </AnimatableView>
                ))}

                {/* Tax Resolution Prices */}
                <Label style={styles.typeHeading}>Support & Training Prices</Label>
                {SUPPORTED_TRAINING_PRICING.map((item, index) => (
                    <AnimatableView animation="pulse" key={index}>
                        <Pressable style={styles.card} onPress={() => handlePress('resolution', index)}>
                            <Label style={styles.cardTitle}>{item.title}</Label>
                            <CustomIcon
                                family='MaterialIcons'
                                name={openedSections.resolution === index ? "arrow-drop-up" : "arrow-drop-down"}
                                size={hp(5)}
                            />
                        </Pressable>
                        {openedSections.resolution === index && (
                            <View style={styles.dropdownContent}>
                                <Label>{item.text}</Label>
                                <Label style={styles.subtitle}>Price:</Label>
                                <Label>{item.price}</Label>
                            </View>
                        )}
                    </AnimatableView>
                ))}
            </Scrollable>
        </View>
    );
};
export default S4PricingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "2%",
        backgroundColor:COLOR.white,
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
        shadowColor: COLOR.darkBlue,               // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow position (iOS)
        shadowOpacity: 0.8,                // Shadow opacity (iOS)
        shadowRadius: 4,                  // Shadow blur radius (iOS)
        elevation: 3,
    },
    dropdownContent: {
        paddingHorizontal: wp(4),
        paddingVertical: 10,
        backgroundColor: COLOR.white,
        borderRadius: hp(1)
    },
    subtitle: {
        ...TEXT_STYLE.textBold,
        marginVertical: hp(0.5),
    },
    cardTitle: {
        ...TEXT_STYLE.bigTextSemiBold,
        width: "87%"
    },
    scrollView: {
        flexGrow: 1,
        marginTop: hp(2),
        paddingHorizontal: wp(2),
        paddingBottom: hp(4)
    },
    typeHeading:{
        ...TEXT_STYLE.bigTextBold,
        alignSelf:'center',
        marginVertical:hp(1),
        borderBottomWidth:1
    }
})