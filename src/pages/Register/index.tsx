import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import stylesGlobal from '../styles-global';
import { useNavigation } from '@react-navigation/core';

const Register = () => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null);
    const[name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[email, setEmail] = useState<string>('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    function navigateToLogin(){
        navigation.navigate('Login');
    }

    async function register () {
        const data = ({
            email: email.toLowerCase(),
            password,
            name,
            image_uri: image,
            sign_in_date: new Date(),
            is_admin: false
        });
        try {
            console.log(data);
            navigateToLogin();
        
        } catch (error) {
            alert('Deu ruim');
        }
    };

    return (

        <View style={stylesGlobal.container}>
            <TouchableOpacity 
                onPress={ pickImage }
            >
                {image === null ? 
                    <Image style={stylesGlobal.logo} source={require('../../assets/user.png')}/>: <Image  source={ {uri: image }} style={stylesGlobal.logo}/>
                }
            </TouchableOpacity>
            <Text style={ stylesGlobal.headerText }>Reparo Rápido</Text>
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setName(val)}
                placeholder='Digite seu nome' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu e-mail' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                secureTextEntry={true} 
                onChangeText={(val) => setPassword(val)}
                placeholder='Digite sua senha' 
            />
            <TouchableOpacity 
                style={stylesGlobal.button}
                onPress={ register }
            >
                <Text style={stylesGlobal.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register;