import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { vmin, vmax } from './../services/viewport';

export default ({ x, y, width, height }) => (
  <View style={{ position: 'absolute', left: x, top: y * vmax }} >
    <Text style={{ width: width * vmin, height: height * vmax }} />
  </View>
);
