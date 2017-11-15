import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Content, ListItem, Thumbnail, Body} from 'native-base';
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/Lista';
import _ from 'lodash';
import Cabecera from './Cabecera';

class Orden extends Component {
  componentWillMount() {
    this.props.listaFetch();
  }

  render() {
    const {lista} = this.props;

    return (
      <Container style={styles.back}>
        <Cabecera/>
        <Content>
          {
            lista.map((lista, index) => {
              return (
                <ListItem key={index}>
                  <Thumbnail square size={80} source={{
                      uri: lista.image
                    }}/>
                  <Body>
                    <Text>{lista.descripcion}</Text>
                    <Text note="note">{lista.producto}</Text>
                  </Body>
                </ListItem>
              )
            })
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const lista = _.map(state.lista, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  return {lista};
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps, {listaFetch})(Orden);
