import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { vmin, vmax } from './../services/viewport';

export default ({ onStartAgain }) => (
  <View style={{ position: 'absolute', left: 35 * vmin, top: 40 * vmax }} >
    <TouchableOpacity activeOpacity={1} onPress={onStartAgain} >
      <Image
        resizeMode="stretch"
        source={require('./../images/flappybird_play.png')}
      />
    </TouchableOpacity>
  </View>
);
