import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Container, List, ListItem, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera from "./Cabecera";
import {store} from '../../../index';

export default class Login extends Component < {} > {
  state = {
    lista: []
  }

  componentWillMount() {
    this.setState({lista: store.getState().lista})
    this.unsubscribe = store.subscribe(() => {
      const {lista} = store.getState();
      this.setState({lista});
    })
  }
  render() {
    const {lista, text} = this.state;
    return (
      <Container style={styles.back}>
      <Cabecera/>
      <ScrollView>
        <View>
          {
            lista.map((i, index) => {
              return (<View key={index}>
                <Text>{i.name}</Text>
              </View>)
            })
          }
        </View>
      </ScrollView>
    </Container>
    );
  };
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  }
});
