import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Controls extends React.Component {
  render(props) {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onScreenTapped}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});
