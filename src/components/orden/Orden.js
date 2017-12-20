import React, {Component} from 'react';
import {StyleSheet, Text, StatusBar} from 'react-native';
import {Container, Content, ListItem, Thumbnail, Body} from 'native-base';
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/Lista';
import _ from 'lodash';
import {Cabecera} from './Cabecera';
import {Actions} from 'react-native-router-flux';

class Orden extends Component {
  componentWillMount() {
    this.props.listaFetch();
  }

  render() {
    const {lista} = this.props;

    return (
      <Container style={styles.back}>
        <Cabecera headerText={"LISTA DE ORDENES"} />
        <Content>
          <StatusBar backgroundColor="orange" barStyle="light-content"/>
          {
            lista.map((lista, index) => {
              return (
                <ListItem key={index} onPress={()=> Actions.Detalle({lista:lista})}>
                  <Thumbnail square size={80} source={{
                      uri: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/10391811_455385081337078_892413498725531531_n.jpg?oh=bfbfda6b61cfd334ff68c03e81d0c6fb&oe=5AD33F08"
                    }} style={{borderRadius:10}}/>
                  <Body style={{paddingLeft:10}}>
                    <Text>Cliente: {lista.cliente}</Text>
                    <Text note="note">Total: {lista.total}</Text>
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
