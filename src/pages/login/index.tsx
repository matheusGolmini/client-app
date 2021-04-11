import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

const Login = () => {
    const navigation = useNavigation();

    function navigateToHome(){
        navigation.navigate('Home');
    }

    function navigateToRegister(){
        navigation.navigate('Register');
    }

    async function login() {
        // const data = ({
        //     email: email.toLowerCase(),
        //     password
        // })
        try {
            // const response = await api.post('users/login', data);
            // if(!response.data){
            //     Alert.alert("Você não foi encontrado na base")
            // }else{
                navigateToHome()
            // }
        } catch (error) {
            alert('Deu ruim')
        }
    }



    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/home.jpg')}/>
            <Text style={ styles.headerText }>Seja bem vindo!</Text>

            <TextInput 
                style={styles.input} 
                onChangeText={(val) => {}}
                placeholder='Digite seu E-mail' 
            />
            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                onChangeText={(val) => {}}
                placeholder='Digite sua senha' 
            />
            <View style={{marginTop: 20}}> 
                <TouchableOpacity 
                    style={styles.button}
                    onPress={login}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.textClick}
                    onPress={navigateToRegister}
                >
                    <Text style={styles.buttonText}>Inscreva-se!</Text>
                </TouchableOpacity>

            </View>
            
        </View>
       
    )
}

export default Login;