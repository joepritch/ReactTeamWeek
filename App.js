import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './src/components/Ball';
import Controls from './src/components/Controls';

import NewHighScoreForm from './src/components/NewHighScoreForm';
import HighScoreList from './src/components/HighScoreList';


import Welcome from './src/components/Welcome';
import Menu from './src/components/Menu';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';





class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      BallPosition: 200,
      masterHighScoreList: []
    }

    this.handleAddingNewHighScoreToList = this.handleAddingNewHighScoreToList.bind(this);

    this.handleScreenTapped = this.handleScreenTapped.bind(this);

    setInterval(() => (
      this.setState(previousState => (
        {BallPosition: (this.state.BallPosition - 5) }
      ))
    ), 10);
  }

  handleAddingNewHighScoreToList(newHighScore) {
    let newHighScoreList = this.state.masterHighScoreList.slice();
    newHighScoreList.push(newHighScore);
    this.setState({masterHighScoreList: newHighScoreList});
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
        <Ball BallPosition={this.state.BallPosition}/>
        <Controls onScreenTapped={this.handleScreenTapped}/>
        // need to add Routes
        <NewHighScoreForm onNewHighScoreCreation={this.handleAddingNewHighScoreToList}/>

        <HighScoreList screenProps={{highScoreList: this.state.masterHighScoreList}} />
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
  HighScore: {
    screen: HighScoreList,
  }
}, {
    initialRouteName: 'HighScore',
});


export default createAppContainer(AppNavigator);
