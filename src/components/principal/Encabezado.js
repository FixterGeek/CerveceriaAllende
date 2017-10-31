import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Icon, Item, Input} from 'native-base';
import {Actions} from 'react-native-router-flux';

const Encabezado = (props) => {
    return (
        <Header style={styles.header}>

            <View style={styles.view}>
                <Image
                    style={{width: 50, height: 50,}}
                    source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2015/05/logo.png'}}
                />
            </View>



        </Header>
    );
};

export default Encabezado;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#CB361E",
        justifyContent: "center",
    },
    view: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
    },
    color: {
        color: "white",
        fontSize: 35
    },
    item: {
        backgroundColor: 'white',
        borderRadius: 15
    },
    icon: {
        color: "#000"
    },
    input: {
        borderRadius:50
    }
});