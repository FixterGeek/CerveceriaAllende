import React, {Component} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {Header, Right, Left, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Encabezado = (props) => {
  return (
    <Header style={styles.header}>

        <Image style={styles.img} source={{
            uri: 'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/10391811_455385081337078_892413498725531531_n.jpg?oh=bfbfda6b61cfd334ff68c03e81d0c6fb&oe=5AD33F08'
          }}/>


        <Text>CERVECERIA ALLENDE</Text>

        <View />
    </Header>
  );
};

export default Encabezado;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
      justifyContent:'space-between',
      alignItems:'center'
  },
  img: {
    width: 50,
    height: 50,
      borderRadius:10,
      margin:5
  }
});
