import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {Card, CardItem, Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';

export const Cardd = ({index, p}) => {

  detalleView = () => {
    Actions.Detalle({p: p});
  };

  const {imagen, titulo} = p;

  return (<TouchableOpacity onPress={this.detalleView}>
    <Card style={styles.cardP}>

      <CardItem style={styles.cardItemS}>
        <Text style={styles.textTitle}>{titulo}</Text>
      </CardItem>

      <CardItem cardBody="cardBody">

        <ImageBackground source={{
            uri: imagen
          }} style={styles.cardImagen}></ImageBackground>
      </CardItem>

    </Card>
  </TouchableOpacity>);
};

export default Cardd;

const styles = StyleSheet.create({
  cardP: {
    flex: 0,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10
  },
  cardItemS: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  cardImagen: {
    height: 300,
    width: '100%',
    flex: 1,
    justifyContent: 'space-between'
  },
  viewShadow: {
    height: 60,
    width: null,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5
  },
  viewCat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8a3979',
    borderRadius: 5
  },
  icon: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
    width: 15
  },
  textCat: {
    color: 'white',
    margin: 5
  },
  viewNew: {
    backgroundColor: 'rgba(0,0,0,.7)',
    height: 60,
    width: null,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  center: {
    alignSelf: 'center'
  },
  textito: {
    color: 'white'
  },
  textEnd: {
    color: 'white',
    alignSelf: 'center'
  }
});