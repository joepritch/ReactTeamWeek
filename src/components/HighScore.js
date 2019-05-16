import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';


function HighScore(props){
  return (

    <View>
      <View>
        <h3>{props.name}</h3>
      </View>
    </View>
  )
}

HighScore.propTypes = {
  name: PropTypes.string
};

export default HighScore;
