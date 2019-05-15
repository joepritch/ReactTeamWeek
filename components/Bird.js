import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { vmin } from './../services/viewport';

export default class Bird extends Component {
  state = {
    margin: 0,
  };

  startAnimation = () => {
    if (!this.animating) {
      this.intervalId = setInterval(() => {
        this.setState({
          margin: (this.state.margin + 10) % 30,
        });
      }, 100);
      this.animating = true;
    }
  }

  stopAnimation = () => {
    if (this.animating) {
      clearInterval(this.intervalId);
      this.animating = false;
    }
  }

  componentDidMount() {
    if (this.props.animate) { this.startAnimation(); }
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (this.props.animate !== nextProps.animate) {
      return nextProps.animate
        ? this.startAnimation()
        : this.stopAnimation();
    }
  }

  render() {
    const { rotation, x, y } = this.props;
    const { margin } = this.state;
    const width = 10 * vmin;
    const height = 10 * vmin;
    return (
      <View style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        transform: [{ rotate: `${rotation}deg` }],
      }}
      >
        <View style={{ marginTop: -(margin) * vmin }}>
          <Image
            source={require('./../images/bird1.png')}
            style={{ width: 10 * vmin, height: 10 * vmin }}
          />
          <Image
            source={require('./../images/bird2.png')}
            style={{ width: 10 * vmin, height: 10 * vmin }}
          />
          <Image
            source={require('./../images/bird3.png')}
            style={{ width: 10 * vmin, height: 10 * vmin }}
          />
        </View>
      </View>
    );
  }
}
