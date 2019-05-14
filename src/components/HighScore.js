import React from 'react';
import PropTypes from "prop-types";


function HighScore(props){
  return (

    <div>
      <div>
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

HighScore.propTypes = {
  name: PropTypes.string
};

export default HighScore;
