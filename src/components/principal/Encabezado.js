import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Input, Right, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Encabezado = (props) => {
  return (
    <Header style={styles.header}>
    <View style={styles.view}>
      <Image style={styles.img} source={{
          uri: 'http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png'
        }}/>
    </View>
      <Right>
        <TouchableOpacity onPress={() => Actions.Detalle()}>
          <Icon name='ios-cart' style={{color:'white'}}/>
        </TouchableOpacity>
      </Right>
  </Header>
  );
};

export default Encabezado;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    justifyContent: "center"
  },
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10
  },
  img: {
    width: 50,
    height: 50
  }
});
