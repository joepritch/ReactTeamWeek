import React from 'react';
import HighScore from './HighScore';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';


export default class HighScoreList extends React.Component {
  render(props) {
    return (
      <View>
        {this.props.highScoreList.map((highScore, index) =>
          <HighScore name={highScore.name}
            key={index}/>
        )}
      </View>
    )
  }
}

HighScoreList.propTypes = {
  highScoreList: PropTypes.array
};
