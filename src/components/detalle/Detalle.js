import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Container, Content, ListItem, Thumbnail, Body, Text} from 'native-base';
import {connect} from 'react-redux';
import {listaFetch} from '../../actions/ListaActions';
import _ from 'lodash';

class Detalle extends Component {
    componentWillMount() {
        this.props.listaFetch();
    }


    render() {
        const {lista} = this.props;

        return (
            <Container style={styles.back}>
              <Content>
                  {lista.map((lista, index) => {
                          return(

                              <ListItem key={index}>
                                <Thumbnail square size={80} source={{
                                    uri: lista.image
                                }}/>
                                <Body>
                                <Text>{lista.descripcion}</Text>
                                <Text note="note">{lista.producto}</Text>
                                </Body>
                              </ListItem>
                          )

                      }
                  )}
              </Content>
            </Container>
        );
    }
}
const mapStateToProps = state => {
    const lista = _.map(state.lista, (val, uid) => {
        return {
            ...val,
            uid
        };
    });

    return {lista};
};

const styles = StyleSheet.create({
    back: {
        backgroundColor: 'white'
    }
});

export default connect(mapStateToProps, {listaFetch})(Detalle);
