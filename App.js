import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './src/components/Ball';
import Controls from './src/components/Controls';
import Welcome from './src/components/Welcome';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      BallPosition: 200
    }
    this.handleScreenTapped = this.handleScreenTapped.bind(this);
    setInterval(() => (
      this.setState(previousState => (
        {BallPosition: (this.state.BallPosition - 5) }
      ))
    ), 10);
  }


  handleScreenTapped(){
    console.log(this.state.BallPosition);
    this.setState({BallPosition: (this.state.BallPosition + 100)})
  }

  render() {
    return (
      <View style={styles.container}>
        <Welcome />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:'100%',
    color: 'white',
  },
});
