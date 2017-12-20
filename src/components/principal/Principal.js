import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {Container, Card} from 'native-base';
import ProductosList from './ProductosList';
import Encabezado from './Encabezado';
import {Actions} from 'react-native-router-flux';
import img1 from '../../assets/imgs/img1.jpg';
import img2 from '../../assets/imgs/img2.jpg';
import img3 from '../../assets/imgs/img3.jpg';

class Principal extends Component {
  render() {
    return (
      <Container>
        <Encabezado/>
        <StatusBar backgroundColor="orange" barStyle="light-content"/>
        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.ProductosList()}>
          <ImageBackground source={img1} style={styles.img}>
            <View style={styles.view4}>
              <Text style={styles.text}>ORDENAR</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.Orden()}>
          <ImageBackground source={img2} style={styles.img}>
            <View style={styles.view4}>
              <Text style={styles.text}>VER ORDENES</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <TouchableOpacity onPress={() => Actions.Qrcode()}>
            <ImageBackground source={img3} style={styles.img}>
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
