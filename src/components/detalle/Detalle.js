import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TextInput, StatusBar} from 'react-native';
import {Container, List, ListItem, Thumbnail, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera from "./Cabecera";


export default class Login extends Component < {} > {
  render(){
      const {p} = this.props;
    return(
      <Container style={styles.back}>

        <Cabecera/>
        <StatusBar backgroundColor="red" barStyle="light-content"/>
        <ScrollView>
        <List>
          <ListItem onPress={() => Actions.Detalle2()}>
            <Thumbnail
              style={styles.img}
              source={{uri: p.imag1}}/>
            <Body style={styles.margin}>
              <Text>{p.titulo}</Text>
              <Text>Cantidad</Text>
            <TextInput
                keyboardType='numeric'
            />
            </Body>
            <Right/>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{uri: p.imag2}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text>Cantidad</Text>
              <TextInput
                  keyboardType='numeric'
              />
            </Body>
            <Right/>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{uri: p.imag3}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text>Cantidad</Text>
              <TextInput
                  keyboardType='numeric'
              />
            </Body>
            <Right/>
          </ListItem>

        </List>
        </ScrollView>
      </Container>
    );
  };
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white'
  },
  img: {
    width: 100,
    height: 100
  },
  margin: {
    marginLeft: 10
  },
  margin2: {
    marginRight: 15
  }
});
