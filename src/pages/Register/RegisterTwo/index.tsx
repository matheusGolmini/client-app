import React from "react";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from "react-native";
import stylesGlobal from "../../styles-global";
import { useFormik } from "formik";
import { IControlProgress } from "..";
import { registerTwoForm } from "./registerTwo.form";

const RegisterTwo = ({ index, setIndex }: IControlProgress) => {
  const [imageProfile, setImageProfile] = React.useState<string | null>(null);

  const pickImage = async (type: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageProfile(result.uri)
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: "",
      rg: ""
    },
    validationSchema: registerTwoForm,
    onSubmit: (values, { resetForm }) => {
      //Enivar para o backend
      setTimeout(() => {
        setIndex((index += 1));
      }, 100)
      console.log({ ...values, imageProfile });
      resetForm();
    },
  });

  return (
    <>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          marginBottom: 250,
        }}
      >
        <View style={{ marginBottom: 0 }}>
          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.cpf && formik.errors.cpf ? "red" : "#302E4D",
              }}
              placeholder="CPF"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.cpf}
              onFocus={() => formik.setFieldTouched("cpf")}
              onChangeText={formik.handleChange("cpf")}
            />
          </View>
          {formik.touched.cpf && formik.errors.cpf ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-cpf" style={styles.error}>
                {formik.errors.cpf}
              </Text>
            </View>
          ) : null}

          <View style={{ ...styles.input }}>
            <TextInput
              style={{
                ...styles.inputText,
                borderColor:
                  formik.touched.rg && formik.errors.rg ? "red" : "#302E4D",
              }}
              placeholder="RG"
              placeholderTextColor="#666666"
              keyboardType="numeric"
              autoCorrect={false}
              value={formik.values.rg}
              onFocus={() => formik.setFieldTouched("rg")}
              onChangeText={formik.handleChange("rg")}
            />
          </View>
          {formik.touched.rg && formik.errors.rg ? (
            <View
              style={{
                alignItems: "flex-start",
              }}
            >
              <Text testID="error-rg" style={styles.error}>
                {formik.errors.rg}
              </Text>
            </View>
          ) : null}

          <TouchableOpacity
            style={{ ...styles.buttonDocument }}
            onPress={() => pickImage("imageProfile")}
          >
            <Text
              style={{
                ...styles.buttonDocumentText,
                opacity: !!imageProfile ? 1 : 0.5,
              }}
            >
              {!!imageProfile
                ? "Imagem adicionada"
                : "Adicione uma imagem de perfil"}
            </Text>
            <Feather
              name="check"
              color="white"
              size={30}
              style={{
                marginHorizontal: 20,
                opacity: !!imageProfile ? 1 : 0.5,
              }}
            />
          </TouchableOpacity>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                ...stylesGlobal.button,
                opacity:
                  formik.touched.cpf === undefined ||
                  imageProfile === null
                    ? 0.5
                    : !formik.isValid
                    ? 0.5
                    : 1,
              }}
              onPress={() => formik.handleSubmit()}
              disabled={
                formik.touched.cpf === undefined ||
                imageProfile === null
                  ? true
                  : !formik.isValid
              }
            >
              <Text style={stylesGlobal.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },

  error: {
    color: "white",
    backgroundColor: "red",
    fontSize: 16,
    padding: 2,
    borderRadius: 3,
    marginTop: 2,
  },
  buttonDocument: {
    backgroundColor: "#302E4D",
    marginTop: 10,
    width: 300,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  buttonDocumentText: {
    padding: 8,
    alignItems: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    marginTop: 10,
    width: 300,
    height: 50,
  },

  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#302E4D",
  },
  textInfo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#37b7dc",
    marginHorizontal: 5,
  },
  inputText: {
    width: "100%",
    backgroundColor: "#FFF",
    height: 50,
    padding: 8,
    fontSize: 16,
    color: "#302E4D",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default RegisterTwo;