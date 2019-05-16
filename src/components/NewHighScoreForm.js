import React from 'react'
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, FormInput } from 'react-native';





export default class NewHighScoreForm extends React.Component {

  _name = null;

  function handleNewHighScoreFormSubmission(event) {
    event.preventDefault();
    props.onNewHighScoreCreation({name: _name.value});
    _name.value = '';

  }






  render(props) {
    return (
      <View>

        <FormInput>
          <TextInput
            id='name'
            placeholder='Enter Your Name'
            ref={(input) => {_name = input;}}/>

          <Button color="#333333"
            title= "ENTER"
            onPress={handleNewHighScoreFormSubmission} />
        </FormInput>
      </View>
    )
  }
}

NewHighScoreForm.propTypes = {
  onNewHighScoreCreation: PropTypes.func
};
