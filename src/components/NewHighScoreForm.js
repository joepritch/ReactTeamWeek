import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, FormInput } from 'react-native';





export default class NewHighScoreForm extends React.Component {

  _name = null;

  handleNewHighScoreFormSubmission(event) {
    event.preventDefault();
    this.props.onNewHighScoreCreation({name: _name.value});
    _name.value = '';

  }






  render(props) {
    return (
      <View>
        <TextInput
          id='name'
          placeholder='Enter Your Name'
          ref={(input) => {_name = input;}}/>
        <Button color="#333333"
          title= "ENTER"
          onPress={this.handleNewHighScoreFormSubmission} />
      </View>
    )
  }
}

NewHighScoreForm.propTypes = {
  onNewHighScoreCreation: PropTypes.func
};
