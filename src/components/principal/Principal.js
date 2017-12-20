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
          <TouchableOpacity onPress={() => Actions.ProductosList()}>
          <ImageBackground source={{uri: "http://cerveceriaallende.mx/wp-content/uploads/2016/04/4-copia.jpg"}} style={styles.img}>
            <View style={styles.view4}>
              <Text style={styles.text}>ORDENAR</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.Orden()}>
          <ImageBackground source={{uri: "http://cerveceriaallende.mx/wp-content/uploads/2016/04/5-copia.jpg"}} style={styles.img}>
            <View style={styles.view4}>
              <Text style={styles.text}>VER ORDENES</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.Qrcode()}>
            <ImageBackground source={{uri: "http://conceptodefinicion.de/wp-content/uploads/2017/03/Inventario.jpg"}} style={styles.img}>
              <View style={styles.view4}>
                <Text style={styles.text}>AÑADIR A INVENTARIO</Text>
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
    width: '100%',
      justifyContent:'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
      backgroundColor:'transparent'
  },
  view: {
    alignSelf: 'center',
  },
    view4: {
        backgroundColor: 'rgba(0,0,0,.6)',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems:'center'
    },
});


export default Principal = connect(mapStateToProps)(Principal);
