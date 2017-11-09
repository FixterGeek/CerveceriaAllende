import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {StatusBar} from 'react-native';
import Card from './Card';
import {Content} from 'native-base';

class ProductosList extends Component {
    state={
        allProductos:[]
    };

    componentWillMount(){
        const {allProductos} = this.props;
        this.setState({allProductos});
    };

    render(){
        const {allProductos} = this.state;
        return(

            <Content>
                <StatusBar backgroundColor="red" barStyle="light-content"/>
                {allProductos.map((p, index)=>{
                    return <Card
                        key={index}
                        index={index}
                        p={p}
                    />
                })}
            </Content>

        );
    };
};

function mapStateToProps(state, ownProps) {
    return {allProductos: state.productos.allProductos};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(dispatch)};
}

export default ProductosList = connect(mapStateToProps, mapDispatchToProps)(ProductosList);
