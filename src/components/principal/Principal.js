import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
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

        <Card style={styles.card}>
          <ImageBackground source={{
              uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/04/4-copia.jpg'
            }} style={styles.img}>
            <View style={styles.view}>
              <Text onPress={() => Actions.Inventario()} style={styles.text}>Ordenar</Text>
            </View>
          </ImageBackground>
        </Card>

        <Card style={styles.card}>
          <ImageBackground source={{
              uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/04/5-copia.jpg'
            }} style={styles.img}>
            <View style={styles.view}>
              <Text onPress={() => Actions.Orden()} style={styles.text}>Ver Ordenes</Text>
            </View>
          </ImageBackground>
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
    fontSize: 40
  },
  view: {
    alignSelf: 'center'
  }
});


export default Principal = connect(mapStateToProps)(Principal);
