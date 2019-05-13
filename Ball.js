import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ball extends React.Component {
  render(props) {
    return (
      <View style={[styles.container, {bottom: this.props.BallPosition}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    position:'absolute',
    borderRadius: 100
  },
});
