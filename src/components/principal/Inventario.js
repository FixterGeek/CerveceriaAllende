import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';
import {Card, CardItem, Input, Button, ListItem, Body, Thumbnail, Content, Container, Right} from  'native-base';
import {connect} from 'react-redux';
import {pedidoUpdate, pedidoCreate} from '../../actions';

class PedidoCreate extends Component {
    onButtonPress(){
        const {cliente, crojai,crojas,crojac, camarillai, camarillas, camarillac, cnaranjai, cnaranjas, cnaranjac,cverdei,cverdes,cverdec} = this.props;

        this.props.pedidoCreate({cliente: cliente || 'Jose', crojai,crojas,crojac, camarillai, camarillas, camarillac, cnaranjai, cnaranjas, cnaranjac,cverdei,cverdes,cverdec});
    }
    render(){
        return(
            <Container>
            <Content>
                <Text>ARTESANAL ROJA</Text>
                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
                    }}/>

                    <Text>Pieza</Text>

                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.crojai}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'crojai', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
                    }}/>
                    <Text>Six</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.crojas}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'crojas', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
                    }}/>
                    <Text>Caja</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.crojac}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'crojac', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>


                <Text>ARTESANAL AMARILLA</Text>
                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
                    }}/>
                    <Text>Pieza</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.camarillai}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'camarillai', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
                    }}/>
                    <Text>Six</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.camarillas}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'camarillas', value})}
                        keyboardType='numeric'
                        style={{width:100}}
                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
                    }}/>
                    <Text>Caja</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.camarillac}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'camarillac', value})}
                        keyboardType='numeric'
                        style={{width:100}}
                    />
                    </Right>
                </CardItem>

                <Text>ARTESANAL NARANJA</Text>
                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
                    }}/>
                    <Text>Pieza</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.cnaranjai}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'cnaranjai', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
                    }}/>
                    <Text>Six</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.cnaranjas}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'cnaranjas', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
                    }}/>
                    <Text>Caja</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.cnaranjac}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'cnaranjac', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <Text>ARTESANAL VERDE</Text>
                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
                    }}/>
                    <Text>Pieza</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.cverdei}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'cverdei', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_656297_246443_20150615143234_b.jpg'
                    }}/>
                    <Text>Six</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.cverdes}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'cverdes', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Thumbnail square size={80} source={{
                        uri: 'https://s3.amazonaws.com/kichink/items_678439_246443_20150703132445_b.jpg'
                    }}/>
                    <Text>Caja</Text>
                    <Right>
                    <Input
                        placeholder="Cantidad"
                        value={this.props.cverdec}
                        onChangeText={value=> this.props.pedidoUpdate({prop:'cverdec', value})}
                        keyboardType='numeric'
                        style={{width:100}}

                    />
                    </Right>
                </CardItem>

                <CardItem>
                    <Text>Cliente</Text>
                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.cliente}
                        onValueChange={value => this.props.pedidoUpdate({prop:'cliente', value})}
                    >
                        <Picker.Item label="Jose" value="Jose" />
                        <Picker.Item label="Saul" value="Saul" />
                        <Picker.Item label="Oswaldo" value="Oswaldo" />
                        <Picker.Item label="Hector" value="Hector" />
                        <Picker.Item label="Brenda" value="Brenda" />
                        <Picker.Item label="Miguel" value="Miguel" />
                    </Picker>
                </CardItem>


            </Content>
                <Button block onPress={this.onButtonPress.bind(this)} >
                    <Text>Pedir</Text>
                </Button>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {cliente, crojai,crojas,crojac, camarillai, camarillas, camarillac, cnaranjai, cnaranjas, cnaranjac,cverdei,cverdes,cverdec} = state.pedidoForm;

    return{cliente, crojai,crojas,crojac, camarillai, camarillas, camarillac, cnaranjai, cnaranjas, cnaranjac,cverdei,cverdes,cverdec};
};

export default connect (mapStateToProps, {pedidoUpdate, pedidoCreate})(PedidoCreate);