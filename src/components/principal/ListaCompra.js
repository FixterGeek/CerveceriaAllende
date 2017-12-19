import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Thumbnail, Body, ListItem, Button, Icon} from 'native-base';

export const ListaCompra = ({item, addAmount, substractAmount, deleteItem}) => {
    return (
        <ListItem style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <Thumbnail square size={80} source={{uri: item.product.image}}/>
            <Text>{item.product.name}</Text>

            <Button light onPress={()=>substractAmount(item)} style={styles.boton}>
                <Text style={{padding:10}}>-</Text>
            </Button>
            <Text>{item.amount}</Text>
            <Button light onPress={()=>{addAmount(item)}} style={styles.boton}>
                <Text style={{padding:10}}>+</Text>
            </Button>


            <Text >$ {item.product.price}</Text>
            <Button light onPress={()=>{deleteItem(item)}} style={styles.boton}>
                <Icon name="trash" style={{color:'black'}}/>
            </Button>

        </ListItem>
    );
}

const styles = StyleSheet.create({
    totalP: {
        marginLeft: 15,
    },
    botones: {
        flexDirection: 'row'
    },
    boton: {
        backgroundColor: 'transparent', elevation: 0
    },
    text: {
        marginTop: 13
    }
});