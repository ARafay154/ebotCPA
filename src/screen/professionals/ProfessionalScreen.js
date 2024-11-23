import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppHeader, BackBtn, Label, Scrollable } from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide';

const ProfessionalScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader 
            leftComp={<BackBtn />}  
            title={"Professionals"}
            style={{marginBottom:hp(2)}}
            />

            <Scrollable containerStyle={{flexGrow:1,paddingHorizontal:wp(2)}} >

           
            
            <LinearGradient
                colors={['#19305c', '#19305c', '#19305c','#19305c']} // Dark blue with a hint of green at the end
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >
                <Label style={styles.heading}>#1 All-in-One Booking Platform</Label>
                <Label style={styles.subheading}>for Tax Professionals and Accountants</Label>
                <Label style={styles.description}>
                    We’re your partner in business growth. We provide everything your business requires to flourish and expand. Try our All-in-One booking platform for Tax Professionals and Accountants, offering comprehensive tools to efficiently manage client meetings and appointments, ensuring you never miss an important engagement again. Our Marketplace search app automates your marketing, allowing you to reach new clients and get more appointments. Here is what we have got on board.
                </Label>
            </LinearGradient>

            <LinearGradient
                colors={['#19305c', '#19305c', '#19305c','#19305c']} // Dark blue with a hint of green at the end
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >

            <Label style={styles.heading2}>Unlock the Power of the ebotCPA</Label>
            <Label style={styles.subheading2}>Business Growth Engine</Label>
            <Label  style={styles.subHeadingText2}>Save time and money with all of your essential business tools set into a single powerful online dashboard.</Label>

            </LinearGradient>

            <LinearGradient
                colors={['#19305c', '#19305c', '#19305c','#19305c']} // Dark blue with a hint of green at the end
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >

            <Label style={styles.heading2}>Appointment Management</Label>
            <Label style={styles.subheading2}>Never Miss an Appointment Again:</Label>
            <Label style={styles.subHeadingText2}>Experience the power of our Intelligent Appointment Calendar, seamlessly integrated into our customer booking platform. Whether you’re a single user or part of a multi-office team, our system allows for direct booking. You can even set up multi-user access for your staff. Empower your team with a seamless, efficient booking system that keeps everyone organized and on track. Enhance collaboration and client satisfaction with our comprehensive tools, which combine features worth over $400 if purchased separately. Here is what we have got for Professionals.</Label>
            </LinearGradient>

            <LinearGradient
                colors={['#19305c', '#19305c', '#19305c','#19305c']} // Dark blue with a hint of green at the end
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >

            <Label style={styles.heading2}>Instant Messages</Label>
            <Label style={styles.subheading2}>Enhanced Client Communication: Secure Messaging</Label>
            <Label style={styles.subHeadingText2}>Stay connected with your clients and provide exceptional service before, during, and after appointments with ebotCPA APP's integrated messaging system.</Label>
            </LinearGradient>

            <LinearGradient
                colors={['#19305c', '#19305c', '#19305c','#19305c']} // Dark blue with a hint of green at the end
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradientContainer}
            >

            <Label style={styles.heading2}>We’re your partner in business growth.</Label>
           
            <Label style={styles.subHeadingText2}>We provide everything your business requires to flourish and expand. From a top-notch Marketplace to efficient Appointment Management and cutting-edge Tax Software, ebotCPA App makes it effortless for you to elevate your business to new heights!</Label>
            </LinearGradient>


            </Scrollable>
        </View>
    );
};

export default ProfessionalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '2%',
    },
    gradientContainer: {
        padding: 16,
        borderRadius: hp(2),
        marginBottom:hp(2)
    },
    heading: {
       ...TEXT_STYLE.bigTextBold,
       color:"#1f7d5b"
    },
    subheading: {
       ...TEXT_STYLE.bigTextBold,
       color:COLOR.white 
    },
    heading2: {
        ...TEXT_STYLE.bigTextBold,
       textAlign:"center",
       marginTop:hp(2),
       color:COLOR.white
     },
     subheading2: {
        ...TEXT_STYLE.bigTextBold,
        color:"#1f7d5b",
        textAlign:"center",        
     },
    description: {
       color:COLOR.white,
       textAlign:'justify',
       marginVertical:hp(1),
    },
    subHeadingText2:{
        textAlign:'justify',
        color:COLOR.white
    }
});