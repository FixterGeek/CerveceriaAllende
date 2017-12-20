
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import Camera from 'react-native-camera';
import {Cabecera} from "../orden/Cabecera";
import {Actions} from 'react-native-router-flux';

export default class Camara extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cabecera headerText={"LECTOR"} onPress={()=>Actions.pop()} />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}>



              <Image style={styles.capture} source={{uri:'https://image.flaticon.com/icons/png/512/19/19862.png'}}/>


        </Camera>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  preview: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  capture: {
    height:200,
    width:200,
  },
  
});
