import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Container, Card, CardItem, Left, Body} from 'native-base';

export default class Login extends Component <{}> {
  render() {
    return (
      <Container style={styles.back}>
      <ScrollView>
        <Card>
          <CardItem style={styles.back2}>
            <Left>
              <Body>
                <Text style={styles.texto}>GOLDEN ALE</Text>
                <Text note="note" style={styles.texto}>Mar 31 de Oct</Text>
              </Body>
            </Left>
            <Text style={styles.texto}>Status: Enviado</Text>
          </CardItem>
          <CardItem>
            <Image source={{
                uri: 'https://s3.amazonaws.com/kichink/items_656278_246443_20150615141713_b.jpg'
              }} style={styles.img}/>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Fermentación:{'\n'}<Text style={styles.color}>
                Ale</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Alc. Vol.:{'\n'}<Text style={styles.color}>
                4.5%</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Color:{'\n'}<Text style={styles.color}>
                Oro claro con espuma blanca y compacta.</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Aroma:{'\n'}<Text style={styles.color}>
                La malta aflora como miel y cereal integral, mientras que el perfil de lúpulo es cítrico,
                floral y especiado.</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Sabor:{'\n'}<Text style={styles.color}>
                El sabor cítrico y resinoso del lúpulo que se recibe en primera instancia cede ante un
                sabor a malta de gentil tostado; ambos culminan en un final nítido.</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Tiempo de Elaboración: {'\n'}<Text style={styles.color}>
                10 Días</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Temperatura Recomendada:{'\n'}<Text style={styles.color}>
                8ºC</Text>
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.text}>Maridaje:{'\n'}<Text style={styles.color}>
                Platillos de sabor ligero, como ensaladas, pasta, carne blanca o mariscos, quesos.
                Buen alivio con platos picosos.</Text>
            </Text>
          </CardItem>
        </Card>
      </ScrollView>
    </Container>
    );
  };
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'white',
    marginTop: 20
  },
  back2: {
    backgroundColor: '#310403'
  },
  text: {
    color: 'orange'
  },
  color: {
    color: 'black'
  },
  img: {
    height: 200,
    width: null,
    flex: 1
  },
  texto: {
    color: 'white'
  }
});
