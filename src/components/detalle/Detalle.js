import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, List, ListItem, Thumbnail, Body, Right} from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component < {} > {
  render(){
    return(
      <Container style={styles.back}>
        <ScrollView>
        <List>
          <ListItem onPress={() => Actions.Detalle2()}>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Enviado</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656238_246443_20150615135424_b.jpg'}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Entregado</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Enviado</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Recibido</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'}} />
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Enviado</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'}} />
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Entregado</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Enviado</Text>
            </Right>
          </ListItem>

          <ListItem>
            <Thumbnail
              style={styles.img}
              source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'}}/>
            <Body style={styles.margin}>
              <Text>Pedido 1</Text>
              <Text note>Mar 31 de Oct</Text>
            </Body>
            <Right>
              <Text>Status: Enviado</Text>
            </Right>
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
