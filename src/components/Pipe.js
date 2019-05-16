import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';

export default class Pipe extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      xPOS: 0
    }
  }

  componentDidMount(){
    setInterval(this._measure, 1)
  }

  _measure = () => {
    this._pipe._component.measure((width, height, px, py, fx, fy) => {
      const location = {
        fx: fx,
        fy: fy,
        px: px,
        py: py,
        width: width,
        height: height
      }
      this.setState({xPOS: location.fx})
    })
  }

  render(props) {
    return (
      <Animated.View ref={(pipe) => {this._pipe = pipe}} style={[styles.container, {transform: [{translateX: this.props.PipePosition}]}]}>
        <View style={styles.pipe}>
          <View style={[styles.block, {bottom: this.props.bottomValue}]}/>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: 75,
    position:'absolute',
  },
  pipe: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
  },
  block: {
    position:'absolute',
    height: '35%',
    width: '100%',
    backgroundColor: 'white',
  },
});
