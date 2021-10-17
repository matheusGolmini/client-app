import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
  ActivityIndicator,
} from "react-native";

import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import Rating from "../../components/Rating";
import {
  ConstractService,
  IConstractResponse,
} from "../../service/api/contract-service";
import { useNavigation } from "@react-navigation/core";

interface PropsComponent {
  props: {
    service: IConstractResponse[];
  };
}

function contractService(text: string, phone: string) {
  Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
}

function Payment(url: string) {
  Linking.openURL(url);
}

export function ListUnpaidService(propsComponent: PropsComponent) {
  const navigation = useNavigation();
  const [controlPicker, setControlPicker] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IConstractResponse) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{ uri: service.imageProfile }}
              />
            </View>
            <Text style={{ ...styles.text, marginTop: 15 }}>
              {service.skillName} {service.firstName}
            </Text>
            {/* <Text style={{ ...styles.text }}>
              Dias estimados: {service.days} dias
            </Text> */}
            <Text style={{ ...styles.text }}>
              Acordo: {service.briefDescription}
            </Text>
            <Text style={{ ...styles.text }}>
              Valor: {service.amountTotal} reais
            </Text>
            <Text style={{ ...styles.text }}>Data inicio: 01/02/2021</Text>
            <Text style={{ ...styles.text }}>Data finalização: 01/22/2021</Text>

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() => Payment(service.link)}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Pague o Serviço
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() =>
                contractService(
                  `Olá%20${service.firstName},%20gostaria%20de%20tirar%20uma%20dúvida%20com%20você.`,
                  service.phone
                )
              }
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Falar com {service.firstName}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() => {
                navigation.navigate("Help", { idService: service.id })
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Ajuda
              </Text>
            </TouchableOpacity>
            {/* {service.help_open ? <CreateTicket service={service} /> : <></>} */}
          </View>
        )}
      />
    </View>
  );
}

export function ListServiceInProgress(propsComponent: PropsComponent) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  const finalizarService = async (contractId: string) => {
    try {
      setIsLoading(true);
      await ConstractService.updateStatus(contractId, { status: "Finalizado" });
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IConstractResponse) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{ uri: service.imageProfile }}
              />
            </View>
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#605C99"
                style={{ marginTop: 20 }}
              />
            )}
            {!isLoading && (
              <>
                <Text style={{ ...styles.text, marginTop: 15 }}>
                  {service.skillName} {service.firstName}
                </Text>
                <Text style={{ ...styles.text }}>Data inicio: 01/02/2021</Text>
                <Text style={{ ...styles.text }}>
                  Acordo: {service.briefDescription}
                </Text>
                <Text style={{ ...styles.text }}>
                  Data finalização: 01/22/2021
                </Text>

                <Text style={{ ...styles.text }}>
                  Valor pago: {service.amountTotal} reais
                </Text>

                {!!service.terminated_service_provider && (
                  <TouchableOpacity
                    style={{
                      ...styles.tasksButton2,
                    }}
                    onPress={() => finalizarService(service.id)}
                  >
                    <Text style={{ ...styles.buttonText, color: "white" }}>
                      Finalizar Serviço
                    </Text>
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  style={{ ...styles.tasksButton2 }}
                  onPress={() =>
                    contractService(
                      `Olá%20${service.firstName},%20gostaria%20de%20tirar%20uma%20dúvida%20com%20você.`,
                      service.phone
                    )
                  }
                >
                  <Text style={{ ...styles.buttonText, color: "white" }}>
                    Falar com {service.firstName}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ ...styles.tasksButton2 }}
                  onPress={() => {
                    navigation.navigate("Help", { idService: service.id })
                  }}
                >
                  <Text style={{ ...styles.buttonText, color: "white" }}>
                    Ajuda
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
}

export function ListServicesFinished(propsComponent: PropsComponent) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.service}
        keyExtractor={(service: IConstractResponse) => String(service.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: service }) => (
          <View style={{ ...styles.task }}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{ uri: service.imageProfile }}
              />
            </View>
            <Text style={{ ...styles.text, marginTop: 15 }}>
              {service.skillName} {service.firstName}
            </Text>
            <Text style={{ ...styles.text }}>
              Data inicio: {service.startDate}
            </Text>
            <Text style={{ ...styles.text }}>
              Acordo: {service.briefDescription}
            </Text>
            <Text style={{ ...styles.text }}>
              Data finalização: {service.endDate}
            </Text>

            <Text style={{ ...styles.text }}>
              Valor pago: {service.amountTotal} reais
            </Text>

            <Rating value={true} />

            <TouchableOpacity
              style={{ ...styles.tasksButton2 }}
              onPress={() => {
                navigation.navigate("Help", { idService: service.id })
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Ajuda
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
