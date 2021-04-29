import React from 'react'
import { useRoute } from '@react-navigation/core';
import Footer from '../../components/footer';
import { IPropUseRoute } from '../../interfaces';
import Carousel from '../../components/carousel/carousel';
import { View, Text, StyleSheet, Image } from "react-native"
import { servicesImages } from '../../mocks/mock-images-jobs';

const PerfilServiceProvider = () => {
    const route = useRoute<IPropUseRoute<{footerColor: string}>>();
    return (
        <>
            <View style={styles.container}>
                
              <Image style={styles.logo} source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}}/>
              <Text> Perfil do Matheus </Text>
              <Text> Pintor </Text>
              <Text> Trabalhos </Text>
              <Carousel services = {servicesImages}/>
              
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