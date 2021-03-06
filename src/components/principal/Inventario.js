import React, {Component} from 'react';
import {Text, Picker, StyleSheet, TextInput, StatusBar} from 'react-native';
import {CardItem, Button, Thumbnail, Content, Container, ListItem, Body, Left} from 'native-base';
import {connect} from 'react-redux';
import {pedidoUpdate, pedidoCreate} from '../../actions';
import {Cabecera} from '../orden/Cabecera';
import cliente from '../../assets/imgs/cliente.jpg'

const clientes = [
    {name: 'Jose', },
    {name: 'Miguel', },
    {name: 'Brenda', },
    {name: 'Oswaldo', },
    {name: 'Hector', },
    {name: 'Sául', }
];

class PedidoCreate extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
        image:''
    }
  }
  handleChange(image){
    this.setState({
        name: this.props.cliente,
        image: image
    })
  }
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
        <Cabecera headerText={"ARMA TU PEDIDO"} />
        <Content>
          <StatusBar backgroundColor="orange" barStyle="light-content"/>
          <ListItem avatar>
            <Left>
              <Thumbnail source={cliente} />
            </Left>
            <Body>
              <CardItem>
                <Text>Cliente</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={this.props.cliente}
                  onValueChange={value => this.props.pedidoUpdate({prop: 'cliente', value})}>
                    {clientes.map((p, index)=>{
                        return <Picker.Item key={index} label={p.name} value={p.name}/>
                    })}

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
