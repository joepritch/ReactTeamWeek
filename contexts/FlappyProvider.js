import React, { Component } from 'react';
import {
  vmin,
  vmax,
  heightOfPipeUp,
  heightOfPipeDown,
  heightOfGround,
  heightOfInvisibleArea,
  positionOfPipeDown,
} from '../services/viewport';
import { FlappyContext } from './FlappyContext';

export default class FlappyProvider extends Component {
  state = this.initialState;

  get initialState() {
    return {
      game: {
        gravity: 0.00015,
        objects: [{
          name: 'bird',
          position: {
            x: 46,
            y: 50,
          },
          velocity: {
            x: 0,
            y: 0,
          },
          dimension: {
            width: 6,
            height: 5,
          },
          rigid: true,
          static: false,
          invisible: false,
        }, {
          name: 'PipeUp',
          position: {
            x: 110,
            y: 0,
          },
          velocity: {
            x: -0.8,
            y: 0,
          },
          dimension: {
            width: 15,
            height: heightOfPipeUp,
          },
          rigid: true,
          static: true,
          invisible: false,
        }, {
          name: 'PipeDown',
          position: {
            x: 110,
            y: positionOfPipeDown,
          },
          velocity: {
            x: -0.8,
            y: 0,
          },
          dimension: {
            width: 15,
            height: heightOfPipeDown,
          },
          rigid: true,
          static: true,
          invisible: false,
        }, {
          name: 'Invisible',
          position: {
            x: 110,
            y: heightOfPipeUp,
          },
          velocity: {
            x: -0.8,
            y: 0,
          },
          dimension: {
            width: 15,
            height: heightOfInvisibleArea,
          },
          rigid: true,
          static: true,
          invisible: true,
        }, {
          name: 'PipeUp',
          position: {
            x: 150,
            y: 0,
          },
          velocity: {
            x: -0.8,
            y: 0,
          },
          dimension: {
            width: 15,
            height: heightOfPipeUp,
          },
          rigid: true,
          static: true,
          invisible: false,
        }, {
          name: 'PipeDown',
          position: {
            x: 150,
            y: positionOfPipeDown,
          },
          velocity: {
            x: -0.8,
            y: 0,
          },
          dimension: {
            width: 15,
            height: heightOfPipeDown,
          },
          rigid: true,
          static: true,
          invisible: false,
        }, {
          name: 'Invisible',
          position: {
            x: 150,
            y: heightOfPipeUp,
          },
          velocity: {
            x: -0.8,
            y: 0,
          },
          dimension: {
            width: 15,
            height: heightOfInvisibleArea,
          },
          rigid: true,
          static: true,
          invisible: true,
        }, {
          name: 'Ground',
          position: {
            x: 0,
            y: 80,
          },
          velocity: {
            x: -1,
            y: 0,
          },
          dimension: {
            width: 100,
            height: heightOfGround,
          },
          rigid: false,
          static: true,
          invisible: true,
        }, {
          name: 'Ground',
          position: {
            x: 100,
            y: 80,
          },
          velocity: {
            x: -1,
            y: 0,
          },
          dimension: {
            width: 100,
            height: heightOfGround,
          },
          rigid: false,
          static: true,
          invisible: true,
        }],
        score: 0,
        gameOver: false,
        collidedArray: [],
        start: false,
      },
    };
  }

  tick = (dt) => {
    const game = { ...this.state.game };
    game.objects = update(game.objects, dt, game.gravity);
    game.gameOver = checkForCollition(game.objects);
    game.score = checkForScoreUp(game.objects, game.score, game.collidedArray).score;
    game.collidedArray = checkForScoreUp(game.objects, game.score, game.collidedArray).collidedArray;
    this.setState({ game });
  };
  bounce = () => {
    const game = { ...this.state.game };
    game.objects = bounce(game.objects);
    this.setState({ game });
  }
  startGame = () => {
    const game = { ...this.state.game };
    game.start = true;
    this.setState({ game });
  }
  startGameAgain = () => {
    const game = { ...this.initialState.game };
    game.objects[0].position.x = 50;
    game.start = true;
    this.setState({ game });
  };
  runGroundAlways = () => {
    const game = { ...this.state.game };
    game.objects = updateGroundPosition(game.objects);
    this.setState({ game });
  };
  render() {
    const { state, props: { children } } = this;
    return (
      <FlappyContext.Provider value={{
        ...state,
        tick: this.tick,
        bounce: this.bounce,
        startGame: this.startGame,
        startGameAgain: this.startGameAgain,
        runGroundAlways: this.runGroundAlways,
        }}
      >
        {children}
      </FlappyContext.Provider>);
  }
}

function getUpdatedVelocity(newPosition, bird, timeLapsed, gravity) {
  let updateVelocity = bird.velocity.y + (timeLapsed * gravity);
  if (newPosition.y > 100) {
    updateVelocity = -(updateVelocity);
  }
  return {
    x: bird.velocity.x,
    y: updateVelocity,
  };
}

function getUpdatedY(bird, timeLapsed, gravity) {
  const distanceCovered = (bird.velocity.y * timeLapsed) + (0.5 * gravity * timeLapsed * timeLapsed);
  return {
    x: bird.position.x,
    y: bird.position.y + distanceCovered,
  };
}

function getUpdatedVelocityForPipe(pipe) {
  return {
    x: pipe.velocity.x,
    y: 0,
  };
}

function getUpdateDistanceForPipe(pipe, timeLapsed) {
  function getYPosition(pipeName) {
    if (pipeName === 'PipeUp') {
      return 0;
    } else if (pipeName === 'PipeDown') {
      return positionOfPipeDown;
    } else if (pipeName === 'Invisible') {
      return heightOfPipeUp;
    }
  }
  const distanceCovered = pipe.velocity.x;
  if (pipe.position.x > 0 - pipe.dimension.width) {
    return {
      x: pipe.position.x + distanceCovered,
      y: pipe.position.y,
    };
  }
  return {
    x: 100,
    y: getYPosition(pipe.name),
  };
}

function getUpdatedGroundPosition(ground) {
  const distanceCovered = ground.velocity.x;
  return (ground.position.x > -97)
    ? {
      x: ground.position.x + distanceCovered,
      y: 80,
    }
    : {
      x: 100,
      y: 80,
    };
}

function updateGroundPosition(gameObjects) {
  const arr = [];
  gameObjects.map(item => {
    if (item.static === true && item.rigid === false) {
      const newGroundPosition = getUpdatedGroundPosition(item);
      const newGround = Object.assign({}, item, {
        position: newGroundPosition,
      });
      return arr.push(newGround);
    }
    return arr.push(item);
  });
  return arr;
}

function update(gameObjects, dt = 1000 / 60, gravity = 0.00015) {
  const arr = [];
  gameObjects.map(item => {
    let updatedVelocity;
    if (item.static === false) {
      const newPosition = getUpdatedY(item, dt, gravity);
      updatedVelocity = getUpdatedVelocity(newPosition, item, dt, gravity);
      const newBird = Object.assign({}, item, {
        position: newPosition,
        velocity: updatedVelocity,
      });
      return arr.push(newBird);
    } else if (item.static === true && item.rigid === true) {
      const newPositionOfPipe = getUpdateDistanceForPipe(item, dt);
      updatedVelocity = getUpdatedVelocityForPipe(item);
      const newPipe = Object.assign({}, item, {
        position: newPositionOfPipe,
        velocity: updatedVelocity,
      });
      return arr.push(newPipe);
    } else if (item.static === true && item.rigid === false) {
      const newGroundPosition = getUpdatedGroundPosition(item);
      const newGround = Object.assign({}, item, {
        position: newGroundPosition,
      });
      return arr.push(newGround);
    }
    return arr.push(item);
  });
  return arr;
}

function bounce(gameObjects) {
  const arr = [];
  const item = gameObjects[0];
  const bounceUpdatedVelocity = {
    x: item.velocity.x,
    y: -0.05,
  };
  const newBird = Object.assign({}, item, {
    velocity: bounceUpdatedVelocity,
  });
  arr.push(newBird);
  return arr.concat(gameObjects.slice(1));
}

function detectCollition(bird, visibleObject) {
  const birdXPostion = bird.position.x * vmin;
  const birdYPostion = bird.position.y * vmax;
  const birdWidth = bird.dimension.width * vmin;
  const birdHeight = bird.dimension.height * vmax;

  const visibleObjectXPosition = visibleObject.position.x * vmin;
  const visibleObjectYPosition = visibleObject.position.y * vmax;
  const visibleObjectWidth = visibleObject.dimension.width * vmin;
  const visibleObjectHeight = visibleObject.dimension.height * vmax;

  return birdXPostion < visibleObjectXPosition + visibleObjectWidth &&
         birdXPostion + birdWidth > visibleObjectXPosition &&
         birdYPostion < visibleObjectYPosition + visibleObjectHeight &&
         birdHeight + birdYPostion > visibleObjectYPosition;
}

function checkForCollition(gameObjects) {
  const bird = gameObjects[0];
  const pipeDown = gameObjects[2];
  const pipeUp = gameObjects[1];
  const pipeUpO = gameObjects[4];
  const pipeDownO = gameObjects[5];
  const ground = gameObjects[7];
  const groundO = gameObjects[8];

  if (detectCollition(bird, pipeDown)) {
    return true;
  }
  if (detectCollition(bird, pipeUp)) {
    return true;
  }
  if (detectCollition(bird, pipeUpO)) {
    return true;
  }
  if (detectCollition(bird, pipeDownO)) {
    return true;
  }
  if (detectCollition(bird, ground)) {
    return true;
  }
  if (detectCollition(bird, groundO)) {
    return true;
  }

  return false;
}

function checkForScoreUp(gameObjects, score, collidedArray) {
  const bird = gameObjects[0];
  const invisible = gameObjects[3];
  const invisibleO = gameObjects[6];

  const birdXPostion = bird.position.x * vmin;
  const birdYPostion = bird.position.y * vmax;
  const birdWidth = bird.dimension.width * vmin;
  const birdHeight = bird.dimension.height * vmax;

  const invisibleXPosition = invisible.position.x * vmin;
  const invisibleYPosition = invisible.position.y * vmax;
  const invisibleWidth = invisible.dimension.width * vmin;
  const invisibleHeight = invisible.dimension.height * vmax;

  const invisibleOXPosition = invisibleO.position.x * vmin;
  const invisibleOYPosition = invisible.position.y * vmax;
  const invisibleOWidth = invisibleO.dimension.width * vmin;
  const invisibleOHeight = invisibleO.dimension.height * vmax;


  if (birdXPostion < invisibleXPosition + invisibleWidth &&
         birdXPostion + birdWidth > invisibleXPosition &&
         birdYPostion < invisibleYPosition + invisibleHeight &&
         birdHeight + birdYPostion > invisibleYPosition) {
    if (collidedArray.length === 0) {
      score++;
    }
    return {
      score,
      collidedArray: [invisible.name],
    };
  }
  if (birdXPostion < invisibleOXPosition + invisibleOWidth &&
       birdXPostion + birdWidth > invisibleOXPosition &&
       birdYPostion < invisibleOYPosition + invisibleOHeight &&
       birdHeight + birdYPostion > invisibleOYPosition) {
    if (collidedArray.length === 0) {
      score++;
    }
    return {
      score,
      collidedArray: [invisible.name],
    };
  }

  return {
    score,
    collidedArray: [],
  };
}
