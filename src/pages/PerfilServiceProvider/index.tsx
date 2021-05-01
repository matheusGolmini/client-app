import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/core';
import Footer from '../../components/footer';
import { IPropUseRoute } from '../../interfaces';
import Carousel from '../../components/carousel/carousel';
import { View, Text, Image, TouchableOpacity, ScrollView,StatusBar } from "react-native"
import { servicesImages } from '../../mocks/mock-images-jobs';
import { IServicesImages } from '../../interfaces/servicesImges';
import styles from './styles';
import Rating from '../../components/Rating';

const PerfilServiceProvider = () => {
    const { params } = useRoute<IPropUseRoute<{footerColor: string}>>();
    const [ services, setServices] = useState<IServicesImages[]>([]);

    useEffect(()=> {
      setServices(servicesImages)
    }, []);

    return (
        <>
          <StatusBar barStyle="dark-content" backgroundColor={params.footerColor} translucent/>
          <ScrollView 
            showsVerticalScrollIndicator={false}
          >   
              <View style={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                  <Text style={{...styles.text, color: params.footerColor}}> Perfil do Matheus </Text>
                  <Text style={{...styles.text, color: params.footerColor}}> Pintor </Text>
                  <View style={styles.styleImageButton}>
                    <Image 
                      style={{...styles.logo, borderColor: params.footerColor   }} 
                      source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}}
                    />
                    <TouchableOpacity 
                      style={{...styles.button, backgroundColor: params.footerColor }}
                      onPress={() => {}}
                    >
                      <Text style={styles.buttonText}>Contratar serviço</Text>
                    </TouchableOpacity>
                    
                  </View>
                  
                  <Rating value={false}/>
                  <Text style={{...styles.text, color: params.footerColor, alignItems: 'center', justifyContent: 'center'}}> Trabalhos </Text>
                </View>
                <Carousel values={{services, color: params.footerColor}}/>  
              </View>
              
          </ScrollView>
          
          <Footer props={params.footerColor}/>
        </>
    )
}



export default PerfilServiceProvider;