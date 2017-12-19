import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Header, Left, Icon, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Cabecera = ({headerText, onPress, icon}) => {
    return (
      <Header style={styles.header}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name='ios-arrow-back' style={styles.color}/>
          </TouchableOpacity>
          <View>
          <Text style={styles.text}>{headerText}</Text>
          </View>

          <TouchableOpacity onPress={onPress}>
              <Icon name={icon} style={styles.color}/>
          </TouchableOpacity>
      </Header>
    );
  };
export {Cabecera}
const styles = StyleSheet.create({
  header: {
      backgroundColor:'white',
      justifyContent:'space-between',
      alignItems:'center'
  },
  color: {
    color: "#252525",
      padding:10,
  },
  text: {
    color: "#252525"
  }
});
