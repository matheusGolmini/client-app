import React from 'react'
import { useRoute } from '@react-navigation/core';
import Footer from '../../components/footer';
import { PropUseRoute } from '../../interfaces';
import Carousel from '../../components/carousel/carousel';
import { View, Text, StyleSheet, Image } from "react-native"

export const dummyData = [
  {
    title: 'Anise Aroma Art Bazar', 
    url: 'https://images.pexels.com/photos/3396670/pexels-photo-3396670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1

  },
  {
    title: 'Food inside a Bowl', 
    url: 'https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2
  },
  {
    title: 'Vegatable Salad', 
    url: 'https://images.pexels.com/photos/1037762/pexels-photo-1037762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
  },
  {
    title: 'Vegatable Salad', 
    url: 'https://images.pexels.com/photos/5767932/pexels-photo-5767932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
  },
  {
    title: 'Vegatable Salad', 
    url: 'https://images.pexels.com/photos/5716298/pexels-photo-5716298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
  }
]

const PerfilServiceProvider = () => {
    const route = useRoute<PropUseRoute<{footerColor: string}>>();
    console.log()
    return (
        <>
            <View style={styles.container}>
                
              <Image style={styles.logo} source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}}/>
              <Text> Perfil do Matheus </Text>
              <Text> Pintor </Text>
              <Text> Trabalhos </Text>
              <Carousel data = {dummyData}/>
              
            </View>
            <Footer props={route.params.footerColor}/>
        </>
    )
}

const styles =  StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: '#00BFFF',
    borderWidth: 5
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});

export default PerfilServiceProvider;