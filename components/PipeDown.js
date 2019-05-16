import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { vmin, vmax } from '../services/viewport';

export default ({ x, y, width, height }) => (
  <View style={{ position: 'absolute', left: x, top: y }} >
    <Image
      resizeMode="stretch"
      source={require('./../images/pipe-up.png')}
      style={{ width: width * vmin, height: height * vmax }}
    />
  </View>
);
