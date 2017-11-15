import React, {Component} from 'react';
import {Text, Picker, StyleSheet, TextInput} from 'react-native';
import {CardItem, Button, Thumbnail, Content, Container, ListItem, Body, Left} from 'native-base';
import {connect} from 'react-redux';
import {pedidoUpdate, pedidoCreate} from '../../actions';
import Cabecera from '../orden/Cabecera';

class PedidoCreate extends Component {
  onButtonPress() {
    const {
      cliente,
      crojai,
      crojas,
      crojac,
      camarillai,
      camarillas,
      camarillac,
      cnaranjai,
      cnaranjas,
      cnaranjac,
      cverdei,
      cverdes,
      cverdec
    } = this.props;

    this.props.pedidoCreate({
      cliente: cliente || 'Jose',
      crojai,
      crojas,
      crojac,
      camarillai,
      camarillas,
      camarillac,
      cnaranjai,
      cnaranjas,
      cnaranjac,
      cverdei,
      cverdes,
      cverdec
    });
  }
  render() {
    return (
      <Container style={styles.back}>
        <Cabecera/>
        <Content>

          <ListItem avatar>
            <Left>
              <Thumbnail source={{
                  uri: 'https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/19732346_10213092050513215_2022404890484623335_n.jpg?oh=0fd3137405d352a5f144219a877e3ddd&oe=5A96C5BD' }} />
            </Left>
            <Body>
              <CardItem>
                <Text>Cliente</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.props.cliente}
                  onValueChange={value => this.props.pedidoUpdate({prop: 'cliente', value})}>
                  <Picker.Item label="Jose" value="Jose"/>
                  <Picker.Item label="Saul" value="Saul"/>
                  <Picker.Item label="Oswaldo" value="Oswaldo"/>
                  <Picker.Item label="Hector" value="Hector"/>
                  <Picker.Item label="Brenda" value="Brenda"/>
                  <Picker.Item label="Miguel" value="Miguel"/>
                </Picker>
              </CardItem>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>ARTESANAL ROJA</Text>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Pieza</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.crojai}
                onChangeText={value=> this.props.pedidoUpdate({prop:'crojai', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Six</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.crojas}
                onChangeText={value=> this.props.pedidoUpdate({prop:'crojas', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Caja</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.crojac}
                onChangeText={value=> this.props.pedidoUpdate({prop:'crojac', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>ARTESANAL AMARILLA</Text>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Pieza</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.camarillai}
                onChangeText={value=> this.props.pedidoUpdate({prop:'camarillai', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Six</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.camarillas}
                onChangeText={value=> this.props.pedidoUpdate({prop:'camarillas', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Caja</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.camarillac}
                onChangeText={value=> this.props.pedidoUpdate({prop:'camarillac', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>ARTESANAL NARANJA</Text>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Pieza</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.cnaranjai}
                onChangeText={value=> this.props.pedidoUpdate({prop:'cnaranjai', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Six</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.cnaranjas}
                onChangeText={value=> this.props.pedidoUpdate({prop:'cnaranjas', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Caja</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.cnaranjac}
                onChangeText={value=> this.props.pedidoUpdate({prop:'cnaranjac', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem itemDivider>
            <Text>ARTESANAL VERDE</Text>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Pieza</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.cverdei}
                onChangeText={value=> this.props.pedidoUpdate({prop:'cverdei', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Six</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.cverdes}
                onChangeText={value=> this.props.pedidoUpdate({prop:'cverdes', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

          <ListItem>
            <Thumbnail square size={80} source={{
                uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
              }}/>

            <Body style={styles.margin}>
              <Text>Caja</Text>
            </Body>

            <Body>
              <TextInput
                placeholder="Cantidad: 0"
                value={this.props.cverdec}
                onChangeText={value=> this.props.pedidoUpdate({prop:'cverdec', value})}
                keyboardType='numeric'
                style={styles.input}/>
            </Body>
          </ListItem>

        </Content>
        <Button block onPress={this.onButtonPress.bind(this)} style={styles.color}>
          <Text style={styles.text}>PEDIR</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#252525'
  },
  picker: {
    flex: 1
  },
  input: {
    width: 100
  },
  text: {
    color: 'white'
  },
  back: {
    backgroundColor: 'white'
  },
  margin: {
    marginLeft: 10
  }
});

const mapStateToProps = (state) => {
  const {
    cliente,
    crojai,
    crojas,
    crojac,
    camarillai,
    camarillas,
    camarillac,
    cnaranjai,
    cnaranjas,
    cnaranjac,
    cverdei,
    cverdes,
    cverdec
  } = state.pedidoForm;

  return {
    cliente,
    crojai,
    crojas,
    crojac,
    camarillai,
    camarillas,
    camarillac,
    cnaranjai,
    cnaranjas,
    cnaranjac,
    cverdei,
    cverdes,
    cverdec
  };
};

export default connect(mapStateToProps, {pedidoUpdate, pedidoCreate})(PedidoCreate);
