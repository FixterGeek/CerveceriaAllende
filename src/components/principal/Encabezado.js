import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Header, Right, Left, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Encabezado = (props) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Image style={styles.img} source={{
            uri: 'http://cerveceriaallende.mx/wp-content/uploads/2015/04/logo.png'
          }}/>
      </Left>
      <Body>
        <Text>Cerveceria Allende</Text>
      </Body>
      <Right/>
    </Header>
  );
};

export default Encabezado;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white"
  },
  img: {
    width: 50,
    height: 50
  }
});
