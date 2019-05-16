import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';

export default class Pipe extends React.Component {

  render(props) {
    return (
      <Animated.View style={[styles.container, {transform: [{translateX: this.props.PipePosition}]}]}>
        <View style={styles.pipe}>
          <View style={[styles.block, {bottom: this.props.bottomValue}]}/>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 75,
    position:'absolute',
  },
  pipe: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
  },
  block: {
    position:'absolute',
    height: '35%',
    width: '100%',
    backgroundColor: 'white',
  },
});
