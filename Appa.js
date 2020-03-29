import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Flask from './Flask';

const {height} = Dimensions.get('screen');

export default class AddButton extends React.Component {
  mode = new Animated.Value(0);
  buttonSize = new Animated.Value(1);

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 200,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        duration: 500,
      }),
    ]).start();
  };

  render() {
    const thermometerX = this.mode.interpolate({
      inputRange: [0, 1],
      // outputRange: [20, -310],
      outputRange: [-300, 20],
    });

    const thermometerY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 200],
      // outputRange: [200, 400],
    });

    // const timeX = this.mode.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-24, -24],
    // });

    // const timeY = this.mode.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-50, -150],
    // });

    // const pulseX = this.mode.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-24, 100],
    // });

    // const pulseY = this.mode.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [-50, -100],
    // });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const sizeStyle = {
      transform: [{scale: this.buttonSize}],
    };

    return (
      <View
        style={{
          backgroundColor: '#000',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}>
          <View style={{position: 'absolute', alignItems: 'center'}}>
            <Animated.View
              style={{
                position: 'absolute',
                left: thermometerX,
                top: thermometerY,
                transform: [{rotate: '-90deg'}],
              }}>
              <View style={styles.secondaryButton}>
                <View
                  style={{
                    height: 200,
                    width: 50,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: '#000',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}>
                  <Icon
                    style={{
                      transform: [{rotate: '90deg'}],
                    }}
                    name="search"
                    size={24}
                    color="#515a6d"
                  />
                  <TextInput
                    style={{
                      height: 100,
                      width: 40,
                      // borderColor: '#dadada',
                      // borderWidth: 1,
                      backgroundColor: '#fff',
                    }}
                  />
                </View>
                <View
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 80,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                  }}></View>
              </View>
            </Animated.View>
            {/* <Animated.View
            style={{position: 'absolute', left: timeX, top: timeY}}>
            <View style={styles.secondaryButton}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: 'red',
                }}></View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 30,
                  backgroundColor: 'red',
                  alignSelf: 'center',
                }}></View>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              left: pulseX,
              top: pulseY,
              transform: [{rotate: '60deg'}],
            }}>
            <View style={styles.secondaryButton}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  backgroundColor: 'red',
                }}></View>
              <View
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                  backgroundColor: 'red',
                  alignSelf: 'center',
                }}></View>
            </View>
          </Animated.View> */}
            <Animated.View style={[styles.button, sizeStyle]}>
              <TouchableHighlight
                onPress={this.handlePress}
                underlayColor="#7F58FF">
                <Animated.View style={{transform: [{rotate: rotation}]}}>
                  <Icon name="menu" size={24} color="#FFF" />
                </Animated.View>
              </TouchableHighlight>
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 82,
    height: 62,
    marginRight: -10,
    // borderRadius: 36,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#7F58FF',
    position: 'absolute',
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    right: 0,
    borderColor: '#FFFFFF',
    top: height / 2,
  },
  secondaryButton: {
    position: 'relative',
    // flexDirection: 'column',
    // width: 40,
    // height: 90,
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#000',
  },
});
