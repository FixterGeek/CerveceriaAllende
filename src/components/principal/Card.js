import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import {Card, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';

export const Cardd = ({index, p}) => {
  detalleView = () => {
    Actions.Detalle({p: p});
  };

  const {imagen, titulo} = p;

  return (
    <TouchableOpacity onPress={this.detalleView}>
      <Card style={styles.cardP}>
        <CardItem style={styles.cardItemS}>
          <Text style={styles.textTitle}>{titulo}</Text>
        </CardItem>
        <CardItem cardBody>
          <ImageBackground source={{
              uri: imagen
            }} style={styles.cardImagen}></ImageBackground>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
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
  }
});
