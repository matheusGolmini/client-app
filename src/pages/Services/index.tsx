import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Footer from '../../components/footer';
import {ListServiceInProgress, ListUnpaidService, ListServicesFinished} from '../../components/flatListServices';
import ReturnImageNotService from '../../components/notService';
import { IDetailService } from '../../interfaces/service';

import mockService from '../../mocks/mock-detail-service';
import { StatusBar } from 'react-native';


function InitServices() {
  const [service, setService] = useState<IDetailService[]>([]);
  useEffect(() => {
      getService();
  }, []);

  function getService() {
    setService(mockService.getServicePayment)
  }
  if(service.length) {
    return (
      <ListUnpaidService props={{service}}/>
    );
  }
  return (
    <ReturnImageNotService text="Nenhum Serviço para Pagar"/>
  )
}
 
function ServicesInProgress() {
  const [service, setService] = useState<IDetailService[]>([]);
  useEffect(() => {
      getService();
  }, []);

  function getService() {
    setService(mockService.getServiceInProgress)
  }
  if(service.length) {
    return (
      <ListServiceInProgress props={{service}}/>
    );
  }
  return (
    <ReturnImageNotService text="Nenhum Serviço"/>
  )
}

function ServicesFinished() {
  const [service, setService] = useState<IDetailService[]>([]);
  useEffect(() => {
      getService();
  }, []);

  function getService() {
    setService(mockService.getServiceServicesFinished())
  }
  if(service.length) {
    return (
      <ListServicesFinished props={{service}}/>
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
      <StatusBar barStyle="dark-content" backgroundColor="#A2C43A" translucent/>
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
        <Tab.Screen name="Pagar Serviços" component={InitServices} />
        <Tab.Screen name="Serviços em andamento" component={ServicesInProgress}/>
        <Tab.Screen name="Serviços finalizados" component={ServicesFinished} />
      </Tab.Navigator>
      <Footer props={'#A2C43A'}/>
    </>
  );
}

export default Service;