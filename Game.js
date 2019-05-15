import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { vw, vh, vmin, vmax } from './services/viewport';
import Bird from './components/Bird';
import PipeUp from './components/PipeUp';
import PipeDown from './components/PipeDown';
import GameOver from './components/GameOver';
import Score from './components/Score';
// import Invisible from './components/Invisible';
import Ground from './components/Ground';
import Start from './components/Start';
import StartAgain from './components/StartAgain';
import contextWrap from './util/contextWrap';

const requestAnimation = requestAnimationFrame;

let time = new Date();
let myReqAnimationId;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});

class Game extends Component {
  state = {
    rotation: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.gameOver;
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate(nextProps, nextState) {

    if (nextProps.gameOver) {
      this.setState({ gameOver: true });
      cancelAnimationFrame(myReqAnimationId);
    }
  }

  update = () => {
    const timediff = new Date() - time;
    time = new Date();
    this.props.tick(timediff);
    myReqAnimationId = requestAnimation(this.update);
  }

  startFlappyBird = () => {
    this.props.startGame();
    time = new Date();
    this.setState({ gameOver: false });
    myReqAnimationId = requestAnimation(this.update);
  }

  startFlappyBirdAgain = () => {
    this.props.startGameAgain();
    time = new Date();
    this.setState({ gameOver: false });
    myReqAnimationId = requestAnimation(this.update);
  }

  render() {
    const { rotation, animate } = this.state;
    const {
      start,
      gameOver,
      bounce,
      pipeUp,
      pipeUpO,
      ground,
      groundO,
      pipeDown,
      pipeDownO,
      bird,
      score,
    } = this.props;
    return (
      <TouchableOpacity activeOpacity={1} onPress={bounce} style={styles.image} >
        <ImageBackground
          style={styles.image}
          source={require('./images/bg.png')}
        >
          <View style={{ position: 'absolute', top: 0, left: 0 }}>
            {!start
              ? <Start onStart={this.startFlappyBird} />
              : <Text />}
            {gameOver
              ? <GameOver />
              : <Text /> }
            <PipeUp
              x={pipeUp.position.x * vmin}
              y={pipeUp.position.y}
              height={pipeUp.dimension.height}
              width={pipeUp.dimension.width}
            />
            <PipeUp
              x={pipeUpO.position.x * vmin}
              y={pipeUpO.position.y}
              height={pipeUpO.dimension.height}
              width={pipeUpO.dimension.width}
            />
            <Ground
              x={ground.position.x * vmin}
              y={ground.position.y}
              height={ground.dimension.height}
              width={ground.dimension.width}
            />
            <Ground
              x={groundO.position.x * vmin}
              y={groundO.position.y}
              height={groundO.dimension.height}
              width={groundO.dimension.width}
            />
            <PipeDown
              x={pipeDown.position.x * vmin}
              y={pipeDown.position.y * vmax}
              height={pipeDown.dimension.height}
              width={pipeDown.dimension.width}
            />
            <PipeDown
              x={pipeDownO.position.x * vmin}
              y={pipeDownO.position.y * vmax}
              height={pipeDownO.dimension.height}
              width={pipeDownO.dimension.width}
            />
            <Bird
              x={bird.position.x * vw}
              y={bird.position.y * vh}
              rotation={rotation}
              animate={animate}
              height={bird.dimension.height}
              width={bird.dimension.width}
            />
            <Score score={score} />
            {gameOver && start &&
              <StartAgain onStartAgain={this.startFlappyBirdAgain} />}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default contextWrap(Game);
