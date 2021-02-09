import React, { useState } from 'react'
import { 
  View, 
  Text, 
  ScrollView, 
  Image, ImageBackground,
  TouchableOpacity } from 'react-native';
import images from "./images"
import { NextButton, Card, CardSection,BackButton, CardImage } from './common'

const GroupPhotoScreen = ({navigation}) => {
  const [screen, setScreen] = useState("group_photo")

  const [backGroundImage, setBackGroundImage] = useState(images.group_back)

  const [frontImage, setFrontImage] = useState(images.group_front)

  const [title, setTitle] = useState('Group Photo')
  const [description, setDes] = useState('Take photos and initialy shake them with a small group')

  setBrowseImages = () => {
    setTitle("Browse Photo")
    setDes('Let your friends browse your photos and videos')
    setBackGroundImage(images.browse_back)
    setFrontImage(images.browse_front)
    setScreen('browse_photo')
  }

  setGroupImages = () => {
    setTitle('Group Photo')
    setDes('Take photos and initialy shake them with a small group')
    setBackGroundImage(images.group_back)
    setFrontImage(images.group_front)
    setScreen('group_photo')
  }

  setPublishImages = () => {
    setTitle('Publish Photo')
    setDes('Publish your best photos for everyone to browse')
    setBackGroundImage(images.publish_back)
    setFrontImage(images.publish_front)
    setScreen('publish_photo')
  }

  setMakeMoneyImages = () => {
    setTitle('Make Money')
    setDes('Make money by having a subscriber to only access page')
    setBackGroundImage(images.money_back)
    setFrontImage(images.money_front)
    setScreen('makeMoney_photo')
  }

  // test() {
  //   switch (screen) {
  //     case "group_photo":
  //       return (
  //         <NextButton
  //           onPress={()=>setBrowseImages()}>
  //           Next
  //         </NextButton>);
  //       break;
  //     case 'browse_photo':
  //       return (
  //         <NextButton
  //           onPress={()=>setPublishImages()}>
  //           Next
  //         </NextButton>);
  //       break;
  //     case 'publish_photo':
  //       return (
  //         <NextButton
  //           onPress={()=>setMakeMoneyImages()}>
  //           Next
  //         </NextButton>);
  //       break;
  //     default:
  //       return null;
  //   }
  // }


    return(
      <ImageBackground
      source={backGroundImage}
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
                  <Image source={frontImage} />
                  {screen=='makeMoney_photo'
                  ? <Image style={styles.iconStyle} source={images.money_icon} /> 
                  : <Text></Text>
                  }
                </CardImage>
              </CardSection>

              <CardSection>
                <View style={styles.pageInnationContainerStyle}>
                  {screen=='group_photo'
                  ? <View style={[styles.bullet, styles.activeBullet]}></View>
                  : <TouchableOpacity onPress={()=>setGroupImages()}>
                      <View style={styles.bullet}></View>
                    </TouchableOpacity>}
                  {screen=='browse_photo'
                  ? <View style={[styles.bullet, styles.activeBullet]}></View>
                  : <TouchableOpacity onPress={()=>setBrowseImages()}>
                      <View style={styles.bullet}></View>
                    </TouchableOpacity>}
                  {/* <View style={[styles.bullet, styles.activeBullet]}></View> */}
                  {/* <TouchableOpacity onPress={() => navigation.navigate('BrowsePhoto')}> */}
                  {/* <TouchableOpacity onPress={()=>setImages()}>
                    <View style={styles.bullet}></View>
                  </TouchableOpacity> */}
                  {screen=='publish_photo'
                  ? <View style={[styles.bullet, styles.activeBullet]}></View>
                  : <TouchableOpacity onPress={()=>setPublishImages()}>
                      <View style={styles.bullet}></View>
                    </TouchableOpacity>}
                  {/* <TouchableOpacity onPress={() => navigation.navigate('PublishPhoto')}>
                    <View style={styles.bullet}></View>
                  </TouchableOpacity> */}
                  {screen=='makeMoney_photo'
                  ? <View style={[styles.bullet, styles.activeBullet]}></View>
                  : <TouchableOpacity onPress={()=>setMakeMoneyImages()}>
                      <View style={styles.bullet}></View>
                    </TouchableOpacity>}
                  {/* <TouchableOpacity onPress={() => navigation.navigate('MakeMoney')}>
                    <View style={styles.bullet}></View>
                  </TouchableOpacity> */}
                </View>
              </CardSection>
              <CardSection>
                <View>
                  <Text style={styles.headingStyle}>{title}</Text>
                </View>
                <View>
                  <Text style={styles.descriptionStyle}>{description}</Text>
                </View>
              </CardSection>

              <CardSection>
              {(function() {
                switch (screen) {
                  case "group_photo":
                    return (
                      <NextButton
                        onPress={()=>setBrowseImages()}>
                        Next
                      </NextButton>);
                    break;
                  case 'browse_photo':
                    return (
                      <NextButton
                        onPress={()=>setPublishImages()}>
                        Next
                      </NextButton>);
                    break;
                  case 'publish_photo':
                    return (
                      <NextButton
                        onPress={()=>setMakeMoneyImages()}>
                        Next
                      </NextButton>);
                    break;
                  default:
                    return null;
                }
              })()}
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