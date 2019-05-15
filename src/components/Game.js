import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import Ball from './Ball';
import Controls from './Controls';

export default class Game extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      BallPosition: new Animated.Value(200),
    }
  this.handleScreenTapped = this.handleScreenTapped.bind(this);
  }

  handleScreenTapped(){
    var newHeight = this.state.BallPosition._value +75;
    Animated.sequence([
      Animated.timing(
        this.state.BallPosition,
        {
          toValue: newHeight,
          duration: 100,
        }),
      Animated.timing(
        this.state.BallPosition,
        {
          toValue: 0,
          easing: Easing.linear(),
          duration: newHeight*3,
        })
    ]).start();
  }



  render(){
    return(
      <View>
        <Ball BallPosition={this.state.BallPosition}/>
        <Controls onScreenTapped={this.handleScreenTapped}/>
      </View>
    )
  }
}
