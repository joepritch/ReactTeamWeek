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
    width: 150,
    height: 150,
    backgroundColor: 'red',
    position:'absolute',
    borderRadius: 100
  },
});
