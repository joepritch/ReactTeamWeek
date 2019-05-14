import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import background from '../../assets/background.jpg'

export default class Welcome extends React.Component {
      _onPress() {
      Alert.alert('on Press!');
     }
      render() {

        return (
          <View>
            // <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
            // </ImageBackground>
            <Button onPress={this._onPress} title="Hello" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
          </ View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      },
      buttonContainer: {
        backgroundColor: '#2E9298',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.25
      }
    })
