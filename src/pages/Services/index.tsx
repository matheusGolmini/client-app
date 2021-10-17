import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ListServiceInProgress,
  ListUnpaidService,
  ListServicesFinished,
} from "../../components/flatListServices";
import ReturnImageNotService from "../../components/notService";
import { View } from "react-native";
import {
  ConstractService,
  IConstractFinishi,
  IConstractResponse,
} from "../../service/api/contract-service";

function InitServices() {
  const [service, setService] = useState<IConstractResponse[]>([]);
  useEffect(() => {
    ConstractService.getWaitingPayment().then(async (value) => {
      setService(value);
    });
  });

  if (service.length) {
    return <ListUnpaidService props={{ service }} />;
  }
  return <ReturnImageNotService text="Nenhum Serviço para Pagar" />;
}

function ServicesInProgress() {
  const [service, setService] = useState<IConstractResponse[]>([]);
  useEffect(() => {
    ConstractService.getInprogress().then(async (value) => {
      setService(value);
    });
  });

  if (service.length) {
    return <ListServiceInProgress props={{ service }} />;
  }
  return <ReturnImageNotService text="Nenhum Serviço" />;
}

function ServicesFinished() {
  const [service, setService] = useState<IConstractFinishi[]>([]);
  useEffect(() => {
    ConstractService.getFinished().then(async (value) => {
      setService(value);
    });
  });

  if (service.length) {
    return <ListServicesFinished props={{ service }} />;
  }
  return <ReturnImageNotService text="Nenhum Serviço Finalizado" />;
}

const Tab = createMaterialTopTabNavigator();

const Service = () => {
  return (
    <>
      <View
        style={{
          height: 40,
          backgroundColor: "#302E4D",
        }}
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#302E4D",
          inactiveTintColor: "#DCDCDC",
          labelStyle: {
            fontWeight: "bold",
          },
          indicatorStyle: {
            backgroundColor: "#302E4D",
          },
        }}
      >
        <Tab.Screen name="Pagar Serviços" component={InitServices} />
        <Tab.Screen
          name="Serviços em andamento"
          component={ServicesInProgress}
        />
        <Tab.Screen name="Serviços finalizados" component={ServicesFinished} />
      </Tab.Navigator>
    </>
  );
};

export default Service;
