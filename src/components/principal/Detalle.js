import React from 'react';
import {View, Image, ScrollView, StyleSheet, Text, TouchableOpacity, StatusBar} from 'react-native';
import {Card, CardItem, Left, Button, Icon, Container, StyleProvider, ListItem, Thumbnail, Body, Content } from 'native-base';
import {Cabecera} from "../orden/Cabecera";

export const Detalle = ({lista}) =>{
    let products = lista.products;

    return (
        <View style={styles.view}>
            <Cabecera headerText={"DETALLE"}/>
            <StatusBar backgroundColor="orange" barStyle="light-content"/>
            <Content style={{backgroundColor:'white'}}>
                <ListItem style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Thumbnail square size={80} source={{
                        uri: "https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/10391811_455385081337078_892413498725531531_n.jpg?oh=bfbfda6b61cfd334ff68c03e81d0c6fb&oe=5AD33F08"
                    }} style={{borderRadius:10}}/>
                    <Text>Cliente: {lista.cliente}</Text>

                </ListItem>

                {products.map((products, index)=>{
                    return (
                        <ListItem key={index}>
                            <Thumbnail square size={80} source={{
                                uri: products.product.image
                            }}/>
                            <Body style={{paddingLeft:10}}>
                            <Text>Nombre: {products.product.name}</Text>
                            <Text note="note">Presentación: {products.product.presentation}</Text>
                            <Text note="note">Precio Unitario: {products.product.price}</Text>
                            <Text note="note">Cantidad: {products.amount}</Text>
                            </Body>
                        </ListItem>
                    )
                })}

            </Content>
            <Button block style={styles.boton} >
                <Text style={styles.text}>TOTAL: {lista.total}</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    text: {
        color: "orange",
        fontWeight: 'bold',
        fontSize: 20
    },
    boton: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: "orange",
        borderWidth: 2
    },
});