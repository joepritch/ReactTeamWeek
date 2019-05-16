import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ImageBackground, Button, Alert, H3 } from 'react-native';


export default class HighScore extends React.Component {
  render(props) {
    return (
      <View>
        <View>
          <H3>{props.name}</H3>
        </View>
      </View>
    )
  }
}

HighScore.propTypes = {
  name: PropTypes.string
};
