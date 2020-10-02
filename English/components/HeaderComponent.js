import React from 'react';
import { Image, Text, View } from 'react-native';

const Header = (props) => {
    const { headerStyle, bgHeader } = styles;
  
    return (
      <View style = {bgHeader}>
        <Text style = { headerStyle }><Image style={styles.imageButtonStyle} source={require('./menu.png')}></Image>              {props.headerText}</Text>
      </View>
    );
  };

const styles = {
    bgHeader: {
      backgroundColor: '#0288D1',
      
    },
    headerStyle: {
      fontSize: 25,
      
      margin: 10,
      color: '#fff',
    },
    imageStyle:{
      width: 30, height: 30
    }
  };

//export component để dùng ở 1 nơi khác
module.exports = Header;
