import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { vmin, vmax } from './../services/viewport';

export default ({ onStart }) => (
  <View style={{ position: 'absolute', left: 27 * vmin, top: 30 * vmax }} >
    <Image
      resizeMode="stretch"
      source={require('./../images/flappybird-logo.png')}
    />
    <TouchableOpacity activeOpacity={1} onPress={onStart} >
      <Image
        resizeMode="stretch"
        style={{ marginLeft: 26 }}
        source={require('./../images/flappybird-tab.png')}
      />
    </TouchableOpacity>
  </View>
);
