import React, {Component} from 'react';
import {Image, Text, ScrollView} from 'react-native';
import {Container, Card, CardItem, Thumbnail, Button, Icon, Left, Body} from 'native-base';

export default class Detalle extends Component < {} > {
  render() {
    return (
      <Container>
        <ScrollView>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    img: {
        justifyContent: 'flex-end',
        flex: 2,
        height: null,
        width: null
    },
    texto: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: 'transparent'
    },
    view: {
        margin: 15
    },
    view2: {
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    view3: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 10
    },
    view4: {
        flex: 1,
        margin: 20
    },
    inputRounded: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        borderColor: 'orange',
        borderWidth: 1.5,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    boton: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf:'center',
    },
    text: {
        color: 'white'
    },
    text1: {
        color: 'white',
        fontSize: 18
    },
    adelante: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20
    },
    button: {
        width: '78%',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: 'orange',
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'orange',
        fontSize: 50
    },
    buttonSpinner: {
        marginRight: 140,
        marginLeft: 140,
        marginBottom: 10,
        backgroundColor: 'orange'
    },
    color: {
        color: 'white'
    },
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
});
