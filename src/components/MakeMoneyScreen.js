import React from 'react'
import { 
    View, 
    Text, 
    ScrollView, 
    Image, ImageBackground,
    TouchableOpacity, Button } from 'react-native';
import { NextButton, Card, CardSection,BackButton, CardImage } from './common';

const MakeMoneyScreen = ({navigation}) => {

    return(
        <ImageBackground
        source={require('../assets/money_screen.png')}
        style={styles.backgroundImageStyle}>
        <ScrollView>
          <Card>
            <CardSection>
              <View style={styles.headerStyle}>
                <View style={{ flex: 1 }} >
                  <BackButton onPress={() => navigation.navigate('PublishPhoto')}>
                    <Image source={require('../assets/back_arrow.png')} />
                  </BackButton>
                </View>
              </View>
            </CardSection>
            <CardSection>
              <CardImage>
                <Image source={require('../assets/make_money.png')}></Image>
                <Image style={styles.iconStyle} source={require('../assets/make_money_icon.png')} />
              </CardImage>
            </CardSection>

            <CardSection>
              <View style={styles.pageInnationContainerStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('GroupPhoto')}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('BrowsePhoto')}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PublishPhoto')}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
                <View style={[styles.bullet, styles.activeBullet]}></View>
              </View>
            </CardSection>
            <CardSection>
              <View>
                <Text style={styles.headingStyle}>Make Money</Text>
              </View>
              <View>
                <Text style={styles.descriptionStyle}> Make money by having a subscriber to only access page </Text>
              </View>
            </CardSection>
            <CardSection>
                <NextButton onPress={()=>navigation.navigate("Home")}>
                  Next
                </NextButton>
            </CardSection>
        </Card>
        </ScrollView>
        </ImageBackground>
    )
}

const styles = {
    iconStyle: {
      position: 'absolute', 
      right: 25,
      bottom: 25
  },
  
    headingStyle: {
      fontSize: 40,
      color: '#414472',
      fontWeight: '500',
      marginBottom: 10
    },
    descriptionStyle: {
      fontSize: 20,
      color: '#414472',
      fontWeight: '500',
      textAlign: 'center'
    },
    
    backgroundImageStyle:{
      height:'100%',
      width:'100%'
    },
    headerStyle: {
      height: 100,
      flex: 1, 
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    },
    bullet: {
      width: 10,
      height: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 50,
      backgroundColor: '#414472',
      opacity:0.5
    },
    activeBullet: {
        width: 30,
        height: 10,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 50,
        backgroundColor: '#414472',
        opacity: 1
    },
    pageInnationContainerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        flex: 1
    },
  
    
  }

export default MakeMoneyScreen