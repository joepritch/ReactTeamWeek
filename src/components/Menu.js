import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import background from '../../assets/birds.gif'


export default class Menu extends React.Component {
      _onPress() {
      Alert.alert('on Press!');
     }
      render() {

        return (
          <View style={styles.container}>
            <View style={styles.background}>
              <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            < /View>
              <View style={styles.buttonContainer}>
                <Button onPress={this._onPress} title="RESTART" color="#FFFFFF" />
                <Button onPress={this._onPress} title="ADD TO LEADERBOARD" color="#FFFFFF" />
            </View>
          </ View>
        );
      }
    }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    buttonContainer: {
      position: 'absolute',
      alignSelf: 'center',
      backgroundColor: 'rgba(135,206,250, 0.9)',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 10,
      shadowOpacity: 0.25
    },
    background: {
      position: 'relative'
    }
  })
