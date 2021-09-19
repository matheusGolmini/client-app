import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import { IServiceProvider } from "../../interfaces/serviceProvider";
import Rating from "../../components/Rating";

interface PropsComponent {
  props: {
    serviceProvider: IServiceProvider[];
    color: string;
  };
}

export default function FlatListServiceProvider(
  propsComponent: PropsComponent
) {
  const navigation = useNavigation();

  function navigateToSkill(footerColor: string) {
    navigation.navigate("ProfileServiceProvider", { footerColor });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={propsComponent.props.serviceProvider}
        style={styles.taskList}
        keyExtractor={(serviceProvider: IServiceProvider) =>
          String(serviceProvider.id)
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item: serviceProvider }) => (
          <View style={{ ...styles.task }}>
            <Image
              style={{ ...styles.logo, marginTop: 5 }}
              source={{ uri: serviceProvider.image }}
            />
            <Rating
              size={35}
              value={false}
              numberRating={serviceProvider.numberRating}
            />
            <Text style={{ ...styles.text }}>Nome: {serviceProvider.name}</Text>

            <Text style={{ ...styles.text, marginTop: 10 }}>
              Experiência:
              {serviceProvider.time_experience > 1
                ? ` ${serviceProvider.time_experience} anos `
                : serviceProvider.time_experience === 1
                ? ` ${serviceProvider.time_experience} ano `
                : ` Menor que um ano `}
            </Text>

            

            <TouchableOpacity
              style={styles.tasksButton}
              onPress={() => navigateToSkill("#302E4D")}
            >
              <Text style={{ ...styles.buttonText }}> Ver o perfil</Text>
              <Feather name="arrow-right" size={25} color={"#302E4D"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
