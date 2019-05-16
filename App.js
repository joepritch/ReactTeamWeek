import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewHighScoreForm from './src/components/NewHighScoreForm';
import HighScoreList from './src/components/HighScoreList';

import Game from './src/components/Game';
import Welcome from './src/components/Welcome';
import Menu from './src/components/Menu';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import Game from './Game';
import FlappyProvider from './contexts/FlappyProvider';






class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterHighScoreList: [
        {name: 'john'}
      ]
    }
    this.handleAddingNewHighScoreToList = this.handleAddingNewHighScoreToList.bind(this);
  }

  handleAddingNewHighScoreToList(newHighScore) {
    let newHighScoreList = this.state.masterHighScoreList.slice();
    newHighScoreList.push(newHighScore);
    this.setState({masterHighScoreList: newHighScoreList});
  }


  render() {
    return (
      // <View style={styles.container}>
      //   <Ball BallPosition={this.state.BallPosition}/>
      //   <Controls onScreenTapped={this.handleScreenTapped}/>
      // </View>
      <View style={styles.container}>

        <Welcome/>
        <NewHighScoreForm onNewHighScoreCreation={this.handleAddingNewHighScoreToList}/>
        <HighScoreList highScoreList = {this.state.masterHighScoreList}/>

        
        <FlappyProvider>
          <Game />
        </FlappyProvider>

      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    height:'100%',
    width: '100%',
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
    initialRouteName: 'Welcome',
});

export default createAppContainer(AppNavigator);
