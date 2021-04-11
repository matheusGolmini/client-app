import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
// import { RectButton } from 'react-native-gesture-handler';
// import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';

const Login = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#d3d3d3"/>
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
                    onPress={()=>{}}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.textClick}
                    onPress={()=>{}}
                >
                    <Text style={styles.buttonText}>Inscreva-se!</Text>
                </TouchableOpacity>

            </View>
            
        </View>
       
    )
}

export default Login;