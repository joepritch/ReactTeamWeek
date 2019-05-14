import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function sketch(p){

  let bird;
  let pipes = [];

  p.setup = function() {
    createCanvas(640, 480);
    bird = new Bird();
    pipes.push(new Pipe());
  }

  p.draw = function() {
    background(0);

    for (var i = pipes.length-1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      if (pipes[i].hits(bird)) {
        console.log("HIT");
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();

    if (frameCount % 75 == 0) {
      pipes.push(new Pipe());
    }
  }

  // <TouchableOpacity style={styles.container} onPress={bird.up()}/>
  // p.keyPressed() {
  //   if (key == ' ') {
  //     bird.up();
  //     //console.log("SPACE");
  //   }
  // }

}
