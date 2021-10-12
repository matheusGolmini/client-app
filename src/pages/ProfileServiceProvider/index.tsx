import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { IPropUseRoute } from "../../interfaces";
import Carousel from "../../components/carousel/carousel";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { servicesImages } from "../../mocks/mock-images-jobs";
import { IServicesImages } from "../../interfaces/servicesImges";
import styles from "./styles";
import Rating from "../../components/Rating";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  GetServiceProviderResponse,
  ServiceProviderService,
} from "../../service/api/service-provider-service";

const { width } = Dimensions.get("window");

const ProfileServiceProvider = () => {
  const { params } = useRoute<IPropUseRoute<{ serviceProviderId: string }>>();
  const [services, setServices] = useState<IServicesImages[]>([]);
  const [serviceProvider, setServiceProvider] =
    useState<GetServiceProviderResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigation = useNavigation();

  useEffect(() => {
    ServiceProviderService.getServiceProviderById(
      params.serviceProviderId
    ).then((value) => {
      setServiceProvider(value);
      setIsLoading(false);
    });
    setServices(servicesImages);
  }, []);

  function contactServiceProvider(text: string, phone: string) {
    // "Olá%20sou%20o%20Matheus,%20cliente%20do%20Reparo%20Rápido.%20Vi%20seu%20perfil%20Henrique,%20gostaria%20de%20contratar%20seu%20serviço.",
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      {isLoading && (
        <ActivityIndicator
          size="large"
          color="#605C99"
          style={{ marginTop: 100 }}
        />
      )}
      {!isLoading && (
        <>
          <LinearGradient
            style={styles.topBar}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[0.3, 0.7]}
            colors={["#605C99", "#302E4D"]}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 40,
                alignItems: "center",
              }}
            >
              <View style={{ marginLeft: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Feather name="arrow-left" size={25} color={"#FFF"} />
                </TouchableOpacity>
              </View>
              <View style={{ paddingHorizontal: width / 3 - 30 }}>
                <Text style={{ ...styles.text, color: "#FFF" }}>
                  {serviceProvider?.idServiceProvider.firstName}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.logo}
                source={{
                  uri: serviceProvider?.idServiceProvider.imageProfile,
                }}
              />
            </View>
          </LinearGradient>
          <View style={styles.footer}>
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "#605C99",
                width: 65,
              }}
            />
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderTopLeftRadius: 75,
                width: 10,
                height: 75,
              }}
            />
          </View>
          <Rating value={false} numberRating={3} />
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ ...styles.text }}>Pintor</Text>
              <View style={styles.styleImageButton}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: "#302E4D",
                  }}
                  onPress={() =>
                    contactServiceProvider(
                      `Olá%20sou%20cliente%20do%20Reparo%20Rápido.%20Vi%20seu%20perfil%20${String(
                        serviceProvider?.idServiceProvider.firstName
                      )},%20gostaria%20de%20contratar%20seu%20serviço.`,
                      String(serviceProvider?.idServiceProvider.phone)
                    )
                  }
                >
                  <Text style={styles.buttonText}>Contratar serviço</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ ...styles.text }}>Experiência de 5 anos</Text>

            <Text
              style={{
                ...styles.text,
              }}
            >
              Trabalhos
            </Text>
          </View>
          <Carousel values={{ services }} />
        </>
      )}
    </View>
  );
};

export default ProfileServiceProvider;
