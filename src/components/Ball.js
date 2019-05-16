import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class Ball extends React.Component {
  render(props) {
    return (
      <Animated.View style={[styles.ball, {bottom: this.props.BallPosition}]}>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 50,
    height: 50,
    backgroundColor: 'gold',
    position:'absolute',
    borderRadius: 100,
    left: 50,
    zIndex: 100
  },
});
