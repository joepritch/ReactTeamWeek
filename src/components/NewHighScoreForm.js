import React from 'react'
import PropTypes from "prop-types";

function NewHighScoreForm(){

  let _name = null;

  function handleNewHighScoreFormSubmission(event) {
      event.preventDefault();
      props.onNewHighScoreCreation({name: _name.value});
      _name.value = '';

    }

  return (
    <div>
      <form onSubmit={handleNewHighScoreFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          ref={(input) => {_name = input;}}/>
        <button type='submit'>Submit High Score</button>
      </form>
    </div>
  )
}

NewTicketForm.propTypes = {
  onNewHighScoreCreation: PropTypes.func
};

export default NewHighScoreForm;
