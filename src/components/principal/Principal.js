import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Card, CardItem, Icon, Button} from 'native-base';
import Modal from 'react-native-modal';

export default class Principal extends Component < {} > {
    state = {
        modalVisible: null
    };

    _renderModalContent = () => (
        <View style={styles.view3}>
            <View style={styles.view}>
                <Card>
                    <Image source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Tomates_-_Vladimir_Morozov.jpg'
                    }} style={styles.img2}/>
                </Card>
            </View>

            <Text style={styles.text}>Jitomate</Text>
            <Button bordered iconRight style={styles.button} onPress={() => alert('Agregado!')}>
                <Text>Agregar</Text>
                <Icon name="cart" style={styles.icon}/>
            </Button>
        </View>
    );

    render(){
        return(
            <View>
                <View style={{flexDirection:'row', height: '50%'}} >
                    <TouchableOpacity style={{height: '100%', width: '50%'}} onPress={() => this.setState({visibleModal: 1})} >
                        <View style={{backgroundColor: '#CB361E'}}>
                            <Image
                                styleName="large"
                                source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png'}}
                                style={{height: '100%', justifyContent:'center', alignItems:'center', width: '100%'}}
                            >
                            </Image>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{height: '100%', width: '50%'}} >
                        <View style={{backgroundColor: '#CA5C0A'}}>
                            <Image
                                styleName="large"
                                source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/GoldenAleFinal2.png'}}
                                style={{height: '100%', justifyContent:'center', alignItems:'center', width: '100%'}}
                            >
                            </Image>
                        </View>
                    </TouchableOpacity>



                </View>

                <View style={{flexDirection:'row', height: '50%'}} >

                    <TouchableOpacity style={{height: '100%', width: '50%'}} >
                        <View style={{backgroundColor: '#06231B'}}>
                            <Image
                                styleName="large"
                                source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2014/08/AgaveFinal2.png'}}
                                style={{height: '100%', justifyContent:'center', alignItems:'center', width: '100%'}}
                            >
                            </Image>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{height: '100%', width: '50%'}} >
                        <View style={{backgroundColor: '#BA3812'}}>
                            <Image
                                styleName="large"
                                source={{uri: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/IpaFinal2.png'}}
                                style={{height: '100%', justifyContent:'center', alignItems:'center', width: '100%'}}
                            >
                            </Image>
                        </View>
                    </TouchableOpacity>
                </View>
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
        height: 200,
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
        height: 150
    },
    button: {
        alignSelf: 'center',
        borderColor: 'white'
    },
    icon: {
        color: "green"
    }
});

