import React, { Component } from 'react';
import { FlappyContext } from '../contexts/FlappyContext';

export default function contextWrap(InputComponent) {
  return class extends Component {
    render() {
      return (
        <FlappyContext.Consumer>
          {context => (
            <InputComponent {...this.props} {...context} {...mapStateToProps(context)} />)}
        </FlappyContext.Consumer>
      );
    }
  };
}

const mapStateToProps = (state) => ({
  bird: state.game.objects[0],
  pipeUp: state.game.objects[1],
  pipeDown: state.game.objects[2],
  invisible: state.game.objects[3],
  pipeUpO: state.game.objects[4],
  pipeDownO: state.game.objects[5],
  invisibleO: state.game.objects[6],
  ground: state.game.objects[7],
  groundO: state.game.objects[8],
  score: state.game.score,
  gameOver: state.game.gameOver,
  start: state.game.start,
});

