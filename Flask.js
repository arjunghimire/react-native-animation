import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Flask = ({bgColor, rotate}) => (
  <TouchableOpacity
    style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      // backgroundColor: '#000',
      height: 150,
      width: 40,
      marginHorizontal: 20,
      transform: [{rotate: rotate}],
    }}>
    <View
      style={{
        backgroundColor: bgColor,
        height: 100,
        width: 20,
        marginBottom: -2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}></View>
    <View
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        padding: 22,
        width: 40,
      }}></View>
  </TouchableOpacity>
);

export default Flask;
