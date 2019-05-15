import { Dimensions } from 'react-native';

const units = {
  vw: Dimensions.get('window').width / 100,
  vh: Dimensions.get('window').height / 100,
};

units.vmin = Math.min(units.vw, units.vh);
units.vmax = Math.max(units.vw, units.vh);

units.heightOfPipeUp = 25;
units.heightOfPipeDown = 25;
units.heightOfGround = 20;
units.heightOfInvisibleArea = 100 - (units.heightOfPipeUp + units.heightOfPipeDown + units.heightOfGround);
units.positionOfPipeDown = units.heightOfInvisibleArea + units.heightOfPipeUp;

module.exports = units;
