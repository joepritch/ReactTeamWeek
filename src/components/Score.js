import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';

export default class Score extends React.Component {

  render(props) {
    return (
      <View style={styles.score}>
        <Text>
        {this.props.Score}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    top:50,
    left:0,
    width:50,
    height:50,
    backgroundColor:'red',
    zIndex:100
  }
});
