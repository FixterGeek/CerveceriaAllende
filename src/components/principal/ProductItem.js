import React from 'react';
import {StatusBar, View, TouchableOpacity, Image, StyleSheet, Text, Alert} from 'react-native';
import {Content, Spinner, Card, CardItem} from 'native-base';

export const ProductItem = ({image, name, price, presentation, addToCart, item}) => {
    console.log(item);
    return(
        <TouchableOpacity onPress={() => Alert.alert('ORDEN', `¿Deseas agregar ${name} ${presentation} a la orden?`, [
            {
                text: 'Ok',
                onPress: () => addToCart(item)
            }, {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }
        ], {cancelable: false})}>
            <Card style={{width:160}}>
                <CardItem cardBody>
                    <Image source={{uri: image}} style={{height: 130, width: null, flex: 1}} resizeMode={'contain'} />
                </CardItem>
                <CardItem style={{flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold'}}>{name}</Text>
                    <Text note style={{fontSize: 12}}>{presentation}</Text>
                    <Text>$ {price}</Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )
};
