import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import stylesGlobal from '../styles-global';

const Login = () => {
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const navigation = useNavigation();


    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToRegister(){
        navigation.navigate('Register');
    }

    async function login() {
        console.log('email:', email.toLocaleLowerCase());
        console.log('password:', password)
        try {
            navigateToHome()
        } catch (error) {
            alert('Deu ruim')
        }
    }


    return (
        <View style={stylesGlobal.container}>
            <Image style={stylesGlobal.logo} source={require('../../assets/home.jpg')}/>
            <Text style={ stylesGlobal.headerText }>Seja bem vindo!</Text>

            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu E-mail' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                secureTextEntry={true} 
                onChangeText={(val) => setPassword(val)}
                placeholder='Digite sua senha' 
            />
            <View style={{marginTop: 20}}> 
                <TouchableOpacity 
                    style={stylesGlobal.button}
                    onPress={login}
                >
                    <Text style={stylesGlobal.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={stylesGlobal.textClick}
                    onPress={navigateToRegister}
                >
                    <Text style={stylesGlobal.buttonText}>Inscreva-se!</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login;