import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Container} from 'native-base';
import ProductosList from "./ProductosList";
import Encabezado from "./Encabezado";

class Principal extends Component {
  render() {
    return (
      <Container style={{
        backgroundColor: '#BDBDBD'
      }}>
        <Encabezado/>
        <ProductosList/>
      </Container>
    );
  };
};

function mapStateToProps({reducer}) {
  return {reducer}
}

export default Principal = connect(mapStateToProps)(Principal);
