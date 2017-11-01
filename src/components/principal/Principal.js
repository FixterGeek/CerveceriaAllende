import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, CardItem, Icon, Button} from 'native-base';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import Select from "./Select";
import Encabezado from "./Encabezado";

export default class Principal extends Component < {} > {
    state = {
        modalVisible: null
    };

    _renderModalContent = () => (
        <View style={styles.view3}>
            <View style={styles.view}>
                <Card>
                    <Image source={{
                        uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png'
                    }} style={styles.img2}/>
                </Card>
            </View>

            <Text style={styles.text}>Cerveza artesanal</Text>
            <Select/>
            <Button bordered iconRight style={styles.button} onPress={()=>Actions.Detalle()}>
                <Text style={{color:'#CB361E'}}>PEDIR</Text>
                <Icon name="cart" style={styles.icon}/>
            </Button>
        </View>
    );

    render(){
        return(
            <View style={{flex:1}}>
                <Encabezado/>
                <ScrollView >

                    <View style={{flexDirection:'row', height: '50%'}} >
                        <TouchableOpacity style={{height: '100%', width: '50%'}} onPress={() => this.setState({visibleModal: 1})} >
                            <Card style={{backgroundColor:'#CB361E'}}>
                                    <Image source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png'}} style={{height: 200, width: null}}/>
                            </Card>
                        </TouchableOpacity>


                        <TouchableOpacity style={{height: '100%', width: '50%'}} >
                            <Card style={{backgroundColor: '#CA5C0A'}}>
                                <Image
                                    source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/GoldenAleFinal2.png'}}
                                    style={{height: 200, width: null}}
                                />
                            </Card>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row', height: '50%'}} >

                        <TouchableOpacity style={{height: '100%', width: '50%'}} >
                            <Card style={{backgroundColor: '#06231B'}}>
                                <Image
                                    source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2014/08/AgaveFinal2.png'}}
                                    style={{height: 200, width: null}}
                                >
                                </Image>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity style={{height: '100%', width: '50%'}} >
                            <Card style={{backgroundColor: '#BA3812'}}>
                                <Image
                                    source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/IpaFinal2.png'}}
                                    style={{height: 200, width: null}}
                                >
                                </Image>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                    <Modal
                        isVisible={this.state.visibleModal === 1}
                        onBackdropPress={() => this.setState({visibleModal: null})}
                        animationIn={'slideInLeft'}
                        animationOut={'fadeOut'}>
                        {this._renderModalContent()}
                    </Modal>

            </View>


        );
    };
};

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    view3: {
        width: 200,
        height: 400,
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    view4: {
        backgroundColor: 'rgba(0,0,0,.5)',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    view5: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    content: {
        backgroundColor: '#fff'
    },
    fondo: {
        justifyContent: 'center',
        height: 50,
        width: null
    },
    texto: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    text: {
        alignSelf: 'center'
    },
    scroll: {
        marginBottom: 10
    },
    img: {
        height: 150,
        width: 150,
        flex: 1
    },
    img2: {
        width: '100%',
        height: '100%'
    },
    button: {
        alignSelf: 'center',
        borderColor: 'white'

    },
    icon: {
        color: '#CB361E'
    }
});
