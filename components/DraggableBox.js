import React, {Component} from 'react';
import {View, Dimensions, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {event, Value, cond, eq, add, set} = Animated;
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class DraggableBox extends React.Component {
  constructor(props) {
    super(props);
    this.dragX = new Value(0);
    this.dragY = new Value(0);
    this.offsetX = new Value(width / 2);
    this.offsetY = new Value(height / 2);
    this.gestureState = new Value(-1);
    this.onGestureEvent = event([
      {
        nativeEvent: {
          translationX: this.dragX,
          translationY: this.dragY,
          state: this.gestureState,
        },
      },
    ]);
    const addY = add(this.offsetY, this.dragY);
    const addX = add(this.offsetX, this.dragX);
    this.transX = cond(
      eq(this.gestureState, State.ACTIVE),
      addX,
      set(this.offsetX, addX),
    );
    this.transY = cond(
      eq(this.gestureState, State.ACTIVE),
      addY,
      set(this.offsetY, addY),
    );
  }

  render() {
    return (
      <PanGestureHandler
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onGestureEvent}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {
                  translateX: this.transX,
                  translateY: this.transY,
                },
              ],
            },
          ]}
        />
      </PanGestureHandler>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});
