import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/core';
import Footer from '../../components/footer';
import { IPropUseRoute } from '../../interfaces';
import Carousel from '../../components/carousel/carousel';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, Linking } from "react-native"
import { servicesImages } from '../../mocks/mock-images-jobs';
import { IServicesImages } from '../../interfaces/servicesImges';
import styles from './styles';
import Rating from '../../components/Rating';

const ProfileServiceProvider = () => {
    const { params } = useRoute<IPropUseRoute<{footerColor: string}>>();
    const [ services, setServices] = useState<IServicesImages[]>([]);
    
    useEffect(()=> {
      setServices(servicesImages)
    }, []);

    function contractService() {
      Linking.openURL(
        `whatsapp://send?text=Olá%20sou%20o%20Matheus,%20cliente%20do%20Reparo%20Rápido.%20Vi%20seu%20perfil%20Henrique,%20gostaria%20de%20contratar%20seu%20serviço.&phone=5541984875054`
      )
    }

    return (
        <>
          <StatusBar barStyle="dark-content" backgroundColor={params.footerColor} translucent/>
          <ScrollView 
            style={{backgroundColor: '#fff'}}
            showsVerticalScrollIndicator={false}
          >   
              <View style={styles.container}>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                  <Text style={{...styles.text, color: params.footerColor}}> Perfil do Matheus </Text>
                  <Text style={{...styles.text, color: params.footerColor}}> Pintor </Text>
                  <View style={styles.styleImageButton}>
                    <Image 
                      style={{...styles.logo, borderColor: params.footerColor}} 
                      source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}}
                    />
                    <TouchableOpacity 
                      style={{...styles.button, backgroundColor: params.footerColor }}
                      onPress={contractService}
                    >
                      <Text style={styles.buttonText}>Contratar serviço</Text>
                    </TouchableOpacity>
                    
                  </View>
                  <Text style={{...styles.text, color: params.footerColor}}>Experiência de 5 anos </Text>
                  <Rating value={false} numberRating={3}/>
                  <Text style={{...styles.text, color: params.footerColor, alignItems: 'center', justifyContent: 'center'}}> Trabalhos </Text>
                </View>
                <Carousel values={{services, color: params.footerColor}}/>  
              </View>
              
          </ScrollView>
          
          <Footer props={params.footerColor}/>
        </>
    )
}



export default ProfileServiceProvider;