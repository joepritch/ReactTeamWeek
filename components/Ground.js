import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { vmin, vmax } from '../services/viewport';

export default ({ x, y, width, height }) => (
  <View style={{ position: 'absolute', left: x, top: y * vmax }} >
    <Image
      resizeMode="stretch"
      source={require('./../images/flappybird-bg-brow.png')}
      style={{ width: width * vmin, height: height * vmax }}
    />
  </View>
);
