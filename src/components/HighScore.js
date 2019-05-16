import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';


export default class HighScore extends React.Component {
  render(props) {
    return (
      <View>
        <View>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    )
  }
}
