import React from 'react'
import { 
  View, 
  Text, 
  ScrollView, 
  Image, ImageBackground,
  TouchableOpacity } from 'react-native';
import { NextButton, Card, CardSection,BackButton, CardImage } from './common'

const GroupPhotoScreen = ({navigation}) => {

    return(
      <ImageBackground
      source={require('../assets/about_screen.png')}
      style={styles.backgroundImageStyle}>
        <ScrollView>
          <Card>
              <CardSection>
                <View style={styles.headerStyle}>
                  <View style={{ flex: 1 }} >
                    <BackButton onPress={() => navigation.navigate('Home')}>
                      <Image source={require('../assets/back_arrow.png')} />
                    </BackButton>
                  </View>
                </View>
              </CardSection>
              <CardSection>
                <CardImage>
                  <Image source={require('../assets/group_photo.png')} />
                </CardImage>
              </CardSection>

              <CardSection>
                <View style={styles.pageInnationContainerStyle}>
                  <View style={[styles.bullet, styles.activeBullet]}></View>
                  <TouchableOpacity onPress={() => navigation.navigate('BrowsePhoto')}>
                    <View style={styles.bullet}></View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('PublishPhoto')}>
                    <View style={styles.bullet}></View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MakeMoney')}>
                    <View style={styles.bullet}></View>
                  </TouchableOpacity>
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={styles.headingStyle}>Group Photo</Text>
                </View>
                <View>
                  <Text style={styles.descriptionStyle}> Take photos and initialy shake them with a small group </Text>
                </View>
              </CardSection>
              <CardSection>
                <NextButton
                  onPress={() => navigation.navigate('BrowsePhoto')}>
                  Next
                </NextButton>
              </CardSection>
          </Card>
        </ScrollView>
      </ImageBackground>
        
    )
}

const styles = {
  backgroundImageStyle: {
    width: '100%',
    height: '100%'
  },
  headerStyle: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
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
  pageInnationContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1
  },
  bullet: {
    // fontSize: 10,
    width: 10,
    height: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: '#414472',
    opacity: 0.5
  },
  activeBullet: {
    // fontSize: 10,
    width: 30,
    height: 10,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: '#414472',
    opacity: 1
  }
}

export default GroupPhotoScreen