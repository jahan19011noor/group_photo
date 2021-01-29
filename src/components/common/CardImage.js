/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

const CardImage = (props) => {
  return(
    <View style={styles.imageBg}>
      {props.children}
    </View>
  );
};

const styles = {
    
    imageBg:{
        width:250,
        height: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderTopLeftRadius: 150,
        borderTopRightRadius: 150,
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
};

export { CardImage };
