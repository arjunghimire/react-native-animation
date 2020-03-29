const randomX1 = this.mode.interpolate({
  inputRange: [0, 1],
  // outputRange: [20, -310],
  outputRange: [-160, 70],
});

const randomY1 = this.mode.interpolate({
  inputRange: [0, 1],
  outputRange: [160, 0],
  // outputRange: [200, 400],
});

<Animated.View
  style={{
    position: 'absolute',
    left: randomX1,
    top: randomY1,
    transform: [{rotate: '-35deg'}],
  }}>
  <View style={styles.secondaryButton}>
    <View
      style={{
        height: 120,
        width: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'red',
      }}></View>
    <View
      style={{
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: 'red',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOffset: {height: 20},
        shadowOpacity: 0.9,
      }}></View>
  </View>
</Animated.View>;
