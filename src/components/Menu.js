import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';
import background from '../../assets/birds.gif'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class Menu extends React.Component {
      _onPress() {
      Alert.alert('on Press!');
     }
     static navigationOptions = {
       title: 'Menu',
         headerTitleStyle: {
           color: 'white'
         },
         headerStyle: {
           backgroundColor: '#2F95D6',
         }
       }
      render() {

        return (
          <View style={styles.container}>
            <View style={styles.background}>
              <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            < /View>
              <View style={styles.buttonContainer}>
                <Button
                  title="RESTART"
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Welcome' })
                      ],
                    }))
                  }}
                />
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
      backgroundColor: 'rgba(255, 69, 0, 0.9)',
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
