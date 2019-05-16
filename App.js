import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewHighScoreForm from './src/components/NewHighScoreForm';
import HighScoreList from './src/components/HighScoreList';
import HighScore from './src/components/HighScore';
import Game from './src/components/Game';
import Welcome from './src/components/Welcome';
import Menu from './src/components/Menu';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import FlappyProvider from './contexts/FlappyProvider';






class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterHighScoreList: []
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

      <View style={styles.container}>

        <Welcome/>
        <Menu/>
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
  Game: {
    screen: Game,
  },
  HighScore: {
    screen: HighScore,
  },
  HighScoreList: {
    screen: HighScoreList,
  },
  HighScoreForm: {
    screen: NewHighScoreForm,
  }
}, {
    initialRouteName: 'Welcome',
});

export default createAppContainer(AppNavigator);
