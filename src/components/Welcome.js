import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Animated } from 'react-native';
import background from '../../assets/background.jpg'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Welcome extends React.Component {
      static navigationOptions = {
        title: '',
          headerTitleStyle: {
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#4EC0CB',
          }
        }
      render() {

        return (
          <View>
            <View style={styles.background}>
              <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
              </ImageBackground>
            < /View>
              <View style={styles.buttonContainer}>
              <FadeInView style={styles.button}>
                <Button color="#FFFFFF"
                  title="START"
                  onPress={() => {
                    this.props.navigation.dispatch(StackActions.reset({
                      index: 0,
                      actions: [
                        NavigationActions.navigate({ routeName: 'Menu' })
                      ],
                    }))
                  }}
                />
              </FadeInView>
              </View>
          </ View>
        );
      }
    }

    const styles = StyleSheet.create({
      buttonContainer: {
        position: 'absolute',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '40%'

      },
      button: {
        backgroundColor: 'rgba(197, 239, 247, 0.8)',
        marginBottom: 10,
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
