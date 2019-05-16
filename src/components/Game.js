import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';
import Ball from './Ball';
import Controls from './Controls';
import Pipe from './Pipe';
import Score from './Score';

export default class Game extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      BallPosition: new Animated.Value(this.floor),
      PipePosition: new Animated.Value(this.width),
      bottomValue: '15%',
      Score: 0
    }
  this.handleScreenTapped = this.handleScreenTapped.bind(this);
  this.pipeItUp = this.pipeItUp.bind(this)
  this.update = this.update.bind(this)
  this.log = this.log.bind(this)
  }

  floor = (Dimensions.get('window').height)-50;

  width = Dimensions.get('window').width;

  componentDidMount() {
    console.log(this.floor, this.width);
    this.pipeItUp();
    setInterval(this.update, 1750)
    setInterval(this.log, 500)
  }

  log(){
    console.log(this.state);
  }

  update(){
    let newVal = Math.floor(Math.random()*46 + 10);
    let newValToString = newVal.toString() + '%'
    this.setState({bottomValue: newValToString});
    this.setState({Score: this.state.Score+1});
  }

  pipeItUp() {
    console.log('pipe');
    Animated.loop(
      Animated.timing(
        this.state.PipePosition,
        {
          toValue: -100,
          duration: 1750,
          useNativeDriver: true
        })
    ).start();
  }

  handleScreenTapped(){
    var newHeight = this.state.BallPosition._value -500;
    Animated.sequence([
      Animated.timing(
        this.state.BallPosition,
        {
          toValue: newHeight,
          duration: 100,
          useNativeDriver: true,
        }),
      Animated.timing(
        this.state.BallPosition,
        {
          toValue: this.floor,
          duration: 500,
          useNativeDriver: true
        })
    ]).start();
  }



  render(){
    return(
      <View style={styles.container}>
        <Score Score={this.state.Score}/>
        <Ball BallPosition={this.state.BallPosition}/>
        <Controls onScreenTapped={this.handleScreenTapped}/>
        <Pipe pipeItUp={this.pipeItUp} PipePosition={this.state.PipePosition} bottomValue={this.state.bottomValue} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
