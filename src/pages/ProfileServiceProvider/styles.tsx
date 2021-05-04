import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles =  StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    marginTop: 10,
  },

  container: {
    marginTop: 10,
    marginVertical: (height + 70) - height,
    height: height,
  },

  text: {
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  styleImageButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },

  button: {
    backgroundColor: '#4169E1',
    width: 100,
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginLeft: 30
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;