import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';

export default function Footer(color: { props: string | null}) {
    const [backgroundColor, setBackgroundColor] = useState<string>('#778899');
    const navigation = useNavigation();

    useEffect(()=> {
        if(!!color.props) {
            setBackgroundColor(color.props);
        }
    }, []);


    function goTo(screenName: string){
        navigation.navigate(screenName);
    }
    
    return (
        <View style={{...styles.footer, backgroundColor: backgroundColor}}>
           <TouchableOpacity 
                style={styles.button}
                onPress={() => goTo('Home')}
            >
                <Feather name="home" size={25} color="white"/>
                <Text style={styles.iconText}> Home </Text>

            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => goTo('Profile')}
            >
                <Feather name="user" size={25} color="white"/>
                <Text style={styles.iconText}> Perfil </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => goTo('Service')}
            >
                <Feather name="book" size={25} color="white"/>
                <Text style={styles.iconText}>Serviços</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => goTo('Login')}
            >
                <Feather name="power" size={25} color="white"/>
                <Text style={styles.iconText}> Sair </Text>

            </TouchableOpacity>
         
        </View>
    )
}