import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Footer from '../../components/footer';
import FlatListService from '../../components/flatListServices';
import { IService } from '../../interfaces';
import ReturnImageNotService from '../../components/notService';


function ServicesInProgress() {
  const [service, setService] = useState<IService[]>([]);
  useEffect(() => {
      getService();
  }, []);

  function getService() {
    setService([
      {
        id: '1',
        name: 'Henrique',
        image: 'https://image.freepik.com/vetores-gratis/eletricista-trabalhando-no-poste-de-energia-eletrica_107173-17176.jpg',
        color: '#FFD700',
        title: 'Eletricista',
        status: '',
        start_date: new Date(),
        end_date: new Date(),
      },
      {
        id: '2',
        name: 'Matheus Fernando',
        image: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg',
        color: '#00BFFF',
        title: 'Pintor',
        status: '',
        start_date: new Date(),
        end_date: new Date(),
      },
      {
        id: '3',
        name: 'Vinicius',
        image: 'https://image.freepik.com/vetores-gratis/mascote-de-canalizador-personagem-de-encanador-desenho-animado-de-trabalhadores_7450-376.jpg',
        color: '#FF0000',
        title: 'Encanador',
        status: '',
        start_date: new Date(),
        end_date: new Date(),
      },
    ])
  }
  if(service.length) {
    return (
      <FlatListService props={{service,  textButton: 'Ver andamento', nextPage: ''}}/>
    );
  }
  return (
    <ReturnImageNotService text="Nenhum Serviço"/>
  )
}

function FinishedServices() {
  const [service, setService] = useState<IService[]>([]);
  useEffect(() => {
      getService();
  }, []);

  function getService() {}
  if(service.length) {
    return (
      <FlatListService props={{service, textButton: 'Ver serviço', nextPage: ''}}/>
    );
  }
  return (
    <ReturnImageNotService text="Nenhum Serviço Finalizado"/>
  )
}



const Tab = createMaterialTopTabNavigator();

const Service = () =>  {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#A2C43A',
          inactiveTintColor: '#DCDCDC',
          labelStyle: {
            fontWeight: 'bold'
          },
          indicatorStyle: {
            backgroundColor: '#A2C43A'
          }     
        }}
        style={{marginTop:24}}
      >
        <Tab.Screen name="Pagar Serviços" component={FinishedServices} />
        <Tab.Screen name="Serviços em andamento" component={ServicesInProgress}/>
        <Tab.Screen name="Serviços finalizados" component={FinishedServices} />
      </Tab.Navigator>
      <Footer props={'#A2C43A'}/>
    </>
  );
}

export default Service;