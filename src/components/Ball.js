import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class Ball extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      yPOS: 0
    }
    this.log=this.log.bind(this)
  }

  componentDidMount(){
    setInterval(this._measure, 1)
    // setInterval(this.log, 1)
  }

  log(){
    console.log(this.state);
  }

  _measure = () => {
    this._ball._component.measure((width, height, px, py, fx, fy) => {
      const location = {
        fx: fx,
        fy: fy,
        px: px,
        py: py,
        width: width,
        height: height
      }
      this.setState({yPOS: location.fy})
    })
  }

  render(props) {
    return (
      <Animated.View  ref={(ball) => {this._ball = ball}} style={[styles.ball, {transform:[{translateY: this.props.BallPosition}]}]}>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position:'absolute',
    borderRadius: 100,
    zIndex: 100
  },
});
