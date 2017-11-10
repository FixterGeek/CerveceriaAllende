import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TextInput, StatusBar} from 'react-native';
import {Container, List, ListItem, Thumbnail, Body, Right, Button} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Cabecera from "./Cabecera";
import {store} from '../../App';
import * as listaActions from '../../actions/listaActions';

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

  guardar = () => {
    const {text} = this.state;
    const item = {
      id: text,
      name: text,
    }
    store.dispatch(listaActions.addItemList(item));
  };

  render(){
    const {lista, text} = this.state;
    return(
      <Container style={styles.back}>
      <Cabecera/>
      <ScrollView>
        <List>
          <ListItem>
            <Thumbnail style={styles.img} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
              }}/>
            <Body style={styles.margin}>
              <Text>GOLDEN ALE</Text>
            </Body>
            <Body>
              <Text>Cantidad</Text>
              <TextInput placeholder="0" onChangeText={text => this.setState({text})} style={styles.input}/>
            </Body>
          </ListItem>

          {/*<ListItem>
            <Thumbnail style={styles.img} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
              }}/>
            <Body style={styles.margin}>
              <Text>4 Pack Allende Golden Ale</Text>
            </Body>
            <Body>
              <Text>Cantidad</Text>
              <TextInput placeholder="0" ref={input => elInput2 = input} style={styles.input}
                onChangeText={text => elInput2 = text}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail style={styles.img} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
              }}/>
            <Body style={styles.margin}>
              <Text>Caja de 24 cervezas Allende Golden Ale</Text>
            </Body>
            <Body>
              <Text>Cantidad</Text>
              <TextInput placeholder="0" ref={input => elInput3 = input} style={styles.input}
                onChangeText={text => elInput3 = text}/>
            </Body>
          </ListItem>*/}
        </List>
      </ScrollView>
      <Button block onPress={this.guardar} style={styles.boton}>
        <Text>Guardar</Text>
      </Button>
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
