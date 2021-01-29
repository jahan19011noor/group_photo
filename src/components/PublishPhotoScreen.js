import React from 'react'
import { 
    View, 
    Text, 
    ScrollView, 
    Image, ImageBackground,
    TouchableOpacity, Button } from 'react-native';
import { NextButton, Card, CardSection,BackButton, CardImage } from './common';

const PublishPhotoScreen = ({navigation}) => {

    return(
        <ImageBackground
        source={require('../assets/publish_screen.png')}
        style={styles.backgroundImageStyle}>
        <ScrollView>
          <Card>
            <CardSection>
              <View style={styles.headerStyle}>
                <View style={{ flex: 1 }} >
                  <BackButton onPress={() => navigation.navigate('BrowsePhoto')}>
                    <Image source={require('../assets/back_arrow.png')} />
                  </BackButton>
                </View>
              </View>
            </CardSection>
            <CardSection>
              <CardImage>
                <Image source={require('../assets/publish_photo.png')}></Image>
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
                <View style={[styles.bullet, styles.activeBullet]}></View>
                <TouchableOpacity onPress={() => navigation.navigate('MakeMoney')}>
                  <View style={styles.bullet}></View>
                </TouchableOpacity>
              </View>
            </CardSection>
            <CardSection>
                <View>
                    <Text style={styles.headingStyle}>Publish Photo</Text>
                </View>
                <View>
                    <Text style={styles.descriptionStyle}> Publish your best photos for everyone to browse </Text>
                </View>
            </CardSection>
            <CardSection>
                <NextButton onPress={()=>navigation.navigate("MakeMoney")}>
                  Next
                </NextButton>
            </CardSection>
        </Card>
        </ScrollView>
        </ImageBackground>
    )
}

const styles = {

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

export default PublishPhotoScreen