import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';

import CircularSelection from './CircularSelection';

const {Value} = Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});

export default ({channels}) => {
  const index = new Value(0);
  const isActive = new Value(0);
  return (
    <View style={styles.container}>
      <CircularSelection {...{channels, index, isActive}} />
    </View>
  );
};
