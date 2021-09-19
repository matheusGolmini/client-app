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
} from "react-native";
import { servicesImages } from "../../mocks/mock-images-jobs";
import { IServicesImages } from "../../interfaces/servicesImges";
import styles from "./styles";
import Rating from "../../components/Rating";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ProfileServiceProvider = () => {
  const { params } = useRoute<IPropUseRoute<{ footerColor: string }>>();
  const [services, setServices] = useState<IServicesImages[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setServices(servicesImages);
  }, []);

  function contractService() {
    Linking.openURL(
      `whatsapp://send?text=Olá%20sou%20o%20Matheus,%20cliente%20do%20Reparo%20Rápido.%20Vi%20seu%20perfil%20Henrique,%20gostaria%20de%20contratar%20seu%20serviço.&phone=5541984875054`
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
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
            <Text style={{ ...styles.text, color: "#FFF" }}>Matheus</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg",
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
                backgroundColor: params.footerColor,
              }}
              onPress={contractService}
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
    </View>
  );
};

export default ProfileServiceProvider;
