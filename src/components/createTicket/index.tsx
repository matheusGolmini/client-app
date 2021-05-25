import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Footer from '../../components/footer';
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles'; 
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { IDetailService } from '../../interfaces';

function submit(props: PropsComponent, message: string, type: string) {
    if (message) {
        console.log('OK!');
        //navegar para serviços
    }
    else {
        console.log('Inválido!');
    }
};

interface PropsComponent {
    service: IDetailService
}

export default function CreateTicket(props: PropsComponent) {
    const [type, setType] = useState('question');
    const [message, setMessage] = useState('');
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Ajuda</Text>
                <Text style={styles.subheader}>Qual o motivo do seu contato conosco?</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={type}
                    onValueChange={currentType => setType(currentType)}>
                    <Picker.Item label="Dúvida" value="question" />
                    <Picker.Item label="Problemas com um serviço" value="problem" />
                    <Picker.Item label="Feedback e sugestões" value="feedback" />
                    <Picker.Item label="Outro" value="other" />
                </Picker>
                <Text style={styles.subheader}>Como podemos te ajudar?</Text>
                <TextInput style={styles.textInput}
                value={message}
                onChangeText={currentMessage => setMessage(currentMessage)}
                multiline
                numberOfLines={15}
                placeholder="Escreva sua mensagem de forma detalhada aqui." />
                {
                    props.service ? 
                    <Text style={styles.subheader}>Esse ticket está relacionado ao serviço de código {props.service.id}</Text>
                    : <></>
                }
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => submit(props, message, type)}
                >
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" translucent/>
            <Footer props={'#4169E1'}/>
        </>
    );
}