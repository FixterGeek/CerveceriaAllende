import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StatusBar, View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {Content, Spinner, Card, CardItem} from 'native-base';
import {productFetch} from '../../actions/productsActions';
import {addToCart} from "../../actions/orderActions";
import {Cabecera} from "../orden/Cabecera";
import {ProductItem} from "./ProductItem";
import {Actions} from 'react-native-router-flux';

class ProductosList extends Component {
    componentWillMount(){
        this.props.productFetch()
    }
    fetched(){
        if(!this.props.fetched){
            return (
                <View>
                  <Spinner color={"#0097A7"}/>
                  <Text style={{alignSelf:'center'}} >Cargando...</Text>
                </View>
            )
        }
    }

    render(){
        const {product, addToCart } = this.props;
        return(

            <Content>
                <Cabecera headerText={"Lista de productos"} onPress={()=>Actions.Carrito()} icon={"ios-document"} />
                <StatusBar backgroundColor="orange" barStyle="light-content"/>
                {this.fetched()}
                <View style={styles.viewP}>
                {product.reverse().map((product, index)=>{
                    let cartItem = {
                        product: product,
                        amount: 1
                    };
                    return (
                        <ProductItem key={index} {...product} item={cartItem} addToCart={addToCart} />
                    )
                })}
                </View>
            </Content>

        );
    };
};

const styles = StyleSheet.create({
    viewP: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-around'
    }
});

const mapStateToProps = state =>{
    const product = _.map(state.product, (val,uid)=>{
        return {...val, uid};
    });
    return {product, fetched: product.length > 0, cart:state.cart}
};

export default connect (mapStateToProps, {productFetch, addToCart})(ProductosList);