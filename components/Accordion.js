import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import Animated, {Value, Easing, interpolate} from 'react-native-reanimated';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class Accordion extends Component {
  state = {
    isexpanded: false,
  };
  _height = new Value(0);
  animation = value =>
    Animated.timing(this._height, {
      toValue: value,
      duration: 200,
      easing: Easing.linear,
    }).start();

  handlePress = () => {
    this.setState({isexpanded: !this.state.isexpanded});
    if (this.state.isexpanded) {
      this.animation(1);
    } else {
      this.animation(0);
    }
  };
  render() {
    return (
      <View
        style={{
          position: 'relative',
        }}>
        <Button onPress={this.handlePress} title="Click Me"></Button>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {
                  scaleY: this._height,
                },
              ],
            },
          ]}
        />
        <Animated.View style={[styles.bigBox]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: width,
    height: 200,
    top: height - 280,
    backgroundColor: 'red',
  },
  bigBox: {
    position: 'absolute',
    width: width,
    height: 100,
    top: height - 180,
    backgroundColor: 'green',
  },
});
