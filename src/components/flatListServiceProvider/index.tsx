import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import Rating from "../../components/Rating";
import { ServiceSkillResponse } from "../../service/api/service-provider-skill";

interface PropsComponent {
  props: {
    serviceProvider: ServiceSkillResponse[];
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
        keyExtractor={(serviceProvider: ServiceSkillResponse) =>
          String(serviceProvider.id)
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item: serviceProvider }) => (
          <View style={{ ...styles.task }}>
            <Image
              style={{ ...styles.logo, marginTop: 5 }}
              source={{
                uri: serviceProvider.serviceProvider.idServiceProvider
                  .imageProfile,
              }}
            />
            <Rating size={35} value={false} numberRating={5} />
            <Text style={{ ...styles.text }}>
              Nome: {serviceProvider.serviceProvider.idServiceProvider.firstName}
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
