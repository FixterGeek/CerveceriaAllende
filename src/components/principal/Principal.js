import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {Container, Card} from 'native-base';
import ProductosList from './ProductosList';
import Encabezado from './Encabezado';
import {Actions} from 'react-native-router-flux';

class Principal extends Component {
  render() {
    return (
      <Container>
        <Encabezado/>
        <StatusBar backgroundColor="orange" barStyle="light-content"/>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.Inventario()}>
          <ImageBackground source={require('../../assets/imgs/image.jpg')} style={styles.img}>
            <View style={styles.view}>
              <Text style={styles.text}>Ordenar</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.Orden()}>
          <ImageBackground source={require('../../assets/imgs/image1.jpg')} style={styles.img}>
            <View style={styles.view}>
              <Text style={styles.text}>Ver Ordenes</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </Card>
      </Container>
    );
  };
};

function mapStateToProps({reducer}) {
  return {reducer}
}

const styles = StyleSheet.create({
  card: {
    height: '50%'
  },
  img: {
    height: '100%',
    width: '100%'
  },
  text: {
    fontSize: 40,
    color: 'white',
    marginTop: 80
  },
  view: {
    alignSelf: 'center',
  }
});


export default Principal = connect(mapStateToProps)(Principal);
