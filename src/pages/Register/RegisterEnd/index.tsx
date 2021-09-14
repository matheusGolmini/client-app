import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import stylesGlobal from "../../styles-global";

const RegisterEnd = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <View style={{marginTop: 20, padding: 10}}>
            <Text style={{fontWeight: "bold", fontSize: 20}}>Você já pode logar no app e contratar um serviço!</Text>
        </View>
        <TouchableOpacity
          style={{
            ...stylesGlobal.button,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={stylesGlobal.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RegisterEnd;
