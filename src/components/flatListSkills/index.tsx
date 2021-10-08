import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import { ISkill } from "../../interfaces/skills";

export default function FlatListSkills(skills: { props: ISkill[] }) {
  const navigation = useNavigation();

  function navigateToSkill(footerColor: string) {
    navigation.navigate("ServiceProvider", { footerColor });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={skills.props}
        style={styles.taskList}
        keyExtractor={(skill: ISkill) => String(skill.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: skill }) => (
          <View style={{ ...styles.task }}>
            <Text style={{ ...styles.title }}>{skill.name}</Text>
            <Text style={{ ...styles.description }}>{skill.description}</Text>
            {/* <View style={{ alignItems: "center" }}>
              <Image style={styles.logo} source={{ uri: skill.image }} />
            </View> */}
              <Image style={styles.logo} source={{ uri: skill.imageUrl }} />

            <TouchableOpacity
              style={styles.tasksButton}
              onPress={() => navigateToSkill('')}
            >
              <Text style={{ ...styles.buttonText }}> Ver mais detalhes</Text>
              <Feather name="arrow-right" size={25} color={"#302E4D"} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
