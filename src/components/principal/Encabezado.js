import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Header, Right, Left, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Encabezado = (props) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Image style={styles.img} source={{
            uri: 'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/10391811_455385081337078_892413498725531531_n.jpg?oh=bfbfda6b61cfd334ff68c03e81d0c6fb&oe=5AD33F08'
          }}/>
      </Left>
      <Body>
        <Text>CERVECERIA ALLENDE</Text>
      </Body>
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
