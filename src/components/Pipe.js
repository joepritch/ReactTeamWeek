import React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class Pipe extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      pipePosition: new Animated.Value(400),
      bottomValue: '15%',
    }
    this.pipeItUp = this.pipeItUp.bind(this)
    this.update = this.update.bind(this)
  }
  
  pipeItUp() {
    let newVal = Math.floor(Math.random()*46 + 10);
    let newValToString = newVal.toString() + '%'
    this.setState({bottomValue: newValToString});
    Animated.timing(
      this.state.pipePosition,
      {
        toValue: -75,
        duration: 1750
      }).start();
    setTimeout(this.update, 1750)
  }
  update(){
    this.setState({pipePosition: new Animated.Value(400)})
  }
  
  componentDidMount() {
    setInterval(this.pipeItUp, 2000)
  }
  
  render(props) {
    return (
      <Animated.View style={[styles.container, {left: this.state.pipePosition}]}>
        <View style={styles.pipe}>
          <View style={[styles.block, {bottom: this.state.bottomValue}]}/>
        </View>
      </Animated.View>
    );
  }
}

//random margin between 50 and 400

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
