import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text, Platform, Picker} from 'react-native';
import {Container, StyleProvider, Body, List, ListItem, CardItem, Button, Toast, Left, Thumbnail} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {ListaCompra} from './ListaCompra';
import cliente from '../../assets/imgs/cliente.jpg'
//Redux
import {connect} from 'react-redux';
import {addToCart, addAmount, substractAmount, deleteItem, saveOrder} from '../../actions/orderActions';
import firebase from '../../components/firebase/Firebase';

const clientes = [
    {name: 'Selecciona un cliente', },
    {name: 'Jose', },
    {name: 'Miguel', },
    {name: 'Brenda', },
    {name: 'Oswaldo', },
    {name: 'Hector', },
    {name: 'Sául', }
];


class Carrito extends Component <{}> {
    state={
        order:{
            total:0,
            products:[],
            user:'',
            cliente:''
        },
        cliente:''
    };

    sendOrder = () => {
        let cliente = this.state.cliente;
        let fecha = new Date();
        let user = firebase.auth().currentUser;
        let email;
        if (user !== null) {
            email = user.email;
            Actions.Principal()
        }else{email='NO USER'}
        fecha = fecha.getTime();
        let {order} = this.state;
        order.total = this.getTotal();
        order.products = this.props.cart;
        order.date = fecha;
        order.user = email;
        order.cliente = cliente;
        console.log(this.state.order);
        this.props.saveOrder(order).then((snap)=>Toast.show({
            text: 'Orden exitosa',
            position: 'bottom',
            buttonText: 'Ok'
        }))
            .catch((error)=>{}, Toast.show({
                text: 'Algo falló',
                position: 'bottom',
                buttonText: 'Ok'
            }))
    };

    getTotal = () => {
        let total = 0;
        for (let t of this.props.cart) {
            let subtotal = t.product.price * t.amount;
            total += subtotal
        }
        return total
    };

    onValueChange(value:string){
     this.setState({
        cliente: value
    })
    }

    render() {
        const total = this.getTotal()
        return (

                <Container style={styles.fondo}>

                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={cliente} />
                        </Left>
                        <Body>
                        <CardItem>
                            <Picker
                                style={styles.picker}
                                selectedValue={this.state.cliente}
                                onValueChange={this.onValueChange.bind(this)}>
                                {clientes.map((p, index)=>{
                                    return <Picker.Item key={index} label={p.name} value={p.name}/>
                                })}

                            </Picker>
                        </CardItem>
                        </Body>
                    </ListItem>

                    <ScrollView>
                        {this.props.cart.map((item, index)=>{
                            console.log(item)
                            return <ListaCompra
                                item={item}
                                addAmount={this.props.addAmount}
                                substractAmount={this.props.substractAmount}
                                deleteItem={this.props.deleteItem}
                                key={index}
                            />
                        })}
                    </ScrollView>

                    <View style={styles.card}>
                        <CardItem style={styles.cardItem}>
                            <Text>Total a Pagar</Text>
                            <Text style={styles.pago}>$ {total}</Text>
                        </CardItem>

                        <Button block style={styles.boton} onPress={(this.sendOrder)}>
                            <Text style={styles.text}>Enviar Orden</Text>
                        </Button>
                    </View>

                </Container>

        );
    }
}

const mapStateToProps = state => {
    return {cart: state.cart};
};

const styles = StyleSheet.create({
    text: {
        color: "#0097A7",
        fontWeight: 'bold',
        fontSize: 20
    },
    text1: {
        color: 'black',
        fontWeight: 'bold'
    },
    total: {
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    totalP: {
        marginLeft: 15
    },
    boton: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: "#0097A7",
        borderWidth: 2
    },
    list: {
        backgroundColor: 'white'
    },
    cardItem: {
        alignSelf: 'center',
        flexDirection: 'column'
    },
    pago: {
        fontSize: 20
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    fondo: {
        backgroundColor: 'white'
    },
    picker: {
        flex: 1
    },
});

export default Carrito = connect(mapStateToProps, {addToCart, addAmount, substractAmount, deleteItem, saveOrder})(Carrito);
