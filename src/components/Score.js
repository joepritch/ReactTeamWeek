import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class Score extends React.Component {

  render(props) {
    return (
      <View style={styles.score}>

        <Text style={styles.text}>
        {this.props.Score}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    top:0,
    right: 0,
    width:80,
    height:80,
    backgroundColor:'lightgray',
    zIndex:100
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: '50px'
  }
});
