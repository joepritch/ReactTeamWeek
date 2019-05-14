import React from 'react';
import HighScore from './HighScore';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';

function HighScoreList(props){
  return (

    <View>

      {this.screenProps.highScoreList.map((highScore, index) =>
        <HighScore name={highScore.name}
          key={index}/>
      )}
    </View>
  )
}

HighScoreList.propTypes = {
  highScoreList: PropTypes.array
};

export default HighScoreList;
