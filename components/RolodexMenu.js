import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {RotationGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');

class RolodexMenu extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
            transform: [
              {
                translateX: 10,
                translateY: 30,
                rotate: '45deg',
              },
            ],
          }}
        />
      </View>
    );
  }
}

export default RolodexMenu;
