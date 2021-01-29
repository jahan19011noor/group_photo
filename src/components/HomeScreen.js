import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    ScrollView, 
    ImageBackground, Button,
    Image, 
    LayoutAnimation } from 'react-native';
import arrowRight from '../assets/swipe_icon.png';
import SwipeButton from 'rn-swipe-button';
import { Card, CardSection } from './common'

const HomeScreen = ({navigation}) => {

    const [appName, setName] = useState('Group Photo');

    const onPress = () => {
        setName('Group Photo Swipe Success')
        navigation.navigate('GroupPhoto')
    }

    useEffect(() => {
        LayoutAnimation.spring()
    })

    return(
        <ImageBackground 
                source={ require('../assets/SplashSecreen.png')} 
                style={styles.backgroundImageStyle}>
                <ScrollView>
                    <Card>
                        <CardSection>
                            <View style={{ height: 100 }}></View>
                        </CardSection>

                        <CardSection>
                            <Image source={require('../assets/camera.png')} />
                        </CardSection>
                        <CardSection>
                            <Text style={styles.headingStyle}>
                                {appName}
                            </Text>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.descriptionStyle}>
                                One app to capture and keep your photos organized
                            </Text>
                        </CardSection>
                        <CardSection>
                            <SwipeButton
                                thumbIconBackgroundColor="transparent"
                                thumbIconImageSource={arrowRight}
                                shouldResetAfterSuccess='true'
                                railBackgroundColor="rgba(255, 255, 255, 0.2)"
                                railBorderColor="transparent"
                                titleColor="#ffffff"
                                thumbIconBorderColor="transparent"
                                height={50}
                                width={350}
                                railStyles={{
                                    backgroundColor: 'rgba(255, 255, 255, 0)',
                                    borderColor: 'transparent',
                                }}
                                onSwipeSuccess={onPress}
                            />
                        </CardSection>
                    </Card>
                </ScrollView>
        </ImageBackground>
    )
}

const styles = {
    backgroundImageStyle:{
        width: '100%', 
        height: '100%'
    },
    headingStyle:{
        fontSize: 40,
        color: '#ffffff',
        fontWeight: '500',
        marginBottom: 10
    },
    descriptionStyle:{
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '500',
        textAlign: 'center'
    }
}

export default HomeScreen