import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  logo: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 5,
    marginTop: 10,
  },

  container: {
    marginVertical: height + 70 - height,
    height: height,
  },

  topBar: {
    height: 0.16 * height,
    backgroundColor: "#605C99",
    borderBottomRightRadius: 65,
  },

  footer: {
    flexDirection: "row",
    width: 65,
  },

  text: {
    marginTop: 5,
    alignContent: "center",
    alignItems: "center",
    fontSize: 25,
    color: '#302E4D',
    fontWeight: "bold",
  },

  styleImageButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  button: {
    backgroundColor: "#302E4D",
    width: 100,
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginLeft: 30,
  },

  buttonText: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
