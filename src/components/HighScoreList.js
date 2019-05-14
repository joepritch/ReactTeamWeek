import React from 'react';
import HighScore from './HighScore';
import PropTypes from 'prop-types';

function HighScoreList(props){
  return (

    <div>
      <hr/>
      {props.highScoreList.map((highScore, index) =>
        <HighScore name={highScore.name}
          key={index}/>
      )}
    </div>
  )
}

HighScoreList.propTypes = {
  highScoreList: PropTypes.array
};

export default HighScoreList;
