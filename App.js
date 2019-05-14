import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './src/components/Ball';
import Controls from './src/components/Controls';
import Welcome from './src/components/Welcome';
import Menu from './src/components/Menu';
import { createStackNavigator, createAppContainer } from "react-navigation";



class App extends React.Component {

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
        <Menu />
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

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  Menu: {
    screen: Menu,
  },
}, {
    initialRouteName: 'Welcome',
});


export default createAppContainer(AppNavigator);
