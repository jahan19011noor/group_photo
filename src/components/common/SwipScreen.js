import React, {useState} from 'react';
import {SafeAreaView, View, Text, StatusBar, Button,Icon} from 'react-native';
import arrowRight from '../../assets/swipe_icon.png';
import SwipeButton from 'rn-swipe-button';

const SwipScreen = ({ onPress, children }) =>{


    return (
    //     <SwipeButton
    //     thumbIconBackgroundColor="#FFFFFF"
    //     thumbIconComponent={arrowRight}
    //     title="Slide to unlock"
    //     railStyles={{
    //       backgroundColor: '#44000088',
    //       borderColor: '#880000FF',
    //     }}
    //     onSwipeSuccess={onPress}
    //   />

    <SwipeButton
            thumbIconBackgroundColor="transparent"
            thumbIconImageSource={arrowRight}
            railBackgroundColor="rgba(255, 255, 255, 0.2)"
            railBorderColor="transparent"
            titleColor="#ffffff"
            thumbIconBorderColor="transparent"
            title= {children}
            height={50}
            width={350}
            railStyles={{
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'transparent',
            }}
            onSwipeStart={() => console.log('Swipe started!')}
            onSwipeFail={() => console.log('Incomplete swipe!')}

            onSwipeSuccess={onPress}
        />

    );
};


export { SwipScreen};