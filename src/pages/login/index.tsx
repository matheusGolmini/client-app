import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './style';

const Login = () => {
    return (
        <>
            <View style={styles.container} >
                <Image style={styles.logo} source={require('../../assets/home.jpg')}/>

                <TextInput
                    onChangeText={() => {}}
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                />

                <TextInput
                    onChangeText={() => {}}
                    placeholder="Digite sua senha"
                    secureTextEntry={true}
                    style={styles.input}
                />
                
                <View style={styles.footer}>
                    <RectButton style={styles.button} onPress={() => {}}>
                        <View style={styles.buttonIcon}>
                            <Icon name="arrow-right" color="black" size={25}/>
                        </View>
                        <Text style={styles.buttonText}>
                            Entrar
                        </Text>
                    </RectButton>
                </View>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Text style={styles.buttonText}>Inscreva-se</Text>
                </TouchableOpacity>
            </View>

            
        </>
    )
}

export default Login;