import React from 'react';
import { StyleSheet, Text, View, Animated,ImageBackground, Easing, Dimensions } from 'react-native';
import background from '../../assets/background.jpg'
import Ball from './Ball';
import Controls from './Controls';
import Pipe from './Pipe';
import Score from './Score';

export default class Game extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      BallPosition: new Animated.Value(200),
      PipePosition: new Animated.Value(400),
      bottomValue: '15%',
      Score: 0
    }
  this.handleScreenTapped = this.handleScreenTapped.bind(this);
  this.pipeItUp = this.pipeItUp.bind(this)
  this.update = this.update.bind(this)
  }

  componentDidMount() {
    this.update();
    setInterval(this.pipeItUp, 2000)
  }

  update(){
    width = Dimensions.get('window').width;
    this.setState({PipePosition: new Animated.Value(width)});
    this.setState({Score: this.state.Score+1});
    console.log(this.state.Score);
  }

  pipeItUp() {
    let newVal = Math.floor(Math.random()*46 + 10);
    let newValToString = newVal.toString() + '%'
    this.setState({bottomValue: newValToString});
    Animated.timing(
      this.state.PipePosition,
      {
        toValue: -75,
        duration: 1750
      }).start();
    setTimeout(this.update, 1750)
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
      <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
        </ImageBackground>
      < /View>
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
