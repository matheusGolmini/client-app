import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import stylesGlobal from '../styles-global';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const Register = () => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null);
    const[name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[email, setEmail] = useState<string>('');
    const [conPassword, setConPassword] = useState<string>('');
    const[conEmail, setConEmail] = useState<string>('');
    const[hidePass, setHidePass] = useState<boolean>(true)
    const[hideConPass, setHideConPass] = useState<boolean>(true)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });

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
        <ScrollView 
            style={{backgroundColor: '#fff'}}
            showsVerticalScrollIndicator={false}
        >
            <View style={stylesGlobal.container}>
                <TouchableOpacity 
                    onPress={ pickImage }
                >
                    {image === null ? 
                        <Image style={stylesGlobal.logo} source={require('../../assets/avatar.jpg')}/>: <Image  source={ {uri: image }} style={stylesGlobal.logo}/>
                    }
                </TouchableOpacity>
                <Text style={ stylesGlobal.headerText }>Reparo Rápido</Text>
                <View style={stylesGlobal.input}>
                    <TextInput 
                        style={stylesGlobal.inputText} 
                        onChangeText={(val) => setName(val)}
                        placeholder='Nome' 
                        placeholderTextColor='#4169E1'
                    />
                </View>
               
                <View style={stylesGlobal.input}>
                    <TextInput 
                        keyboardType= 'email-address'
                        style={stylesGlobal.inputText} 
                        onChangeText={(val) => setEmail(val)}
                        placeholder='E-mail' 
                        placeholderTextColor='#4169E1'
                    />
                </View>

                <View style={stylesGlobal.input}>
                    <TextInput 
                        keyboardType= 'email-address'
                        style={stylesGlobal.inputText} 
                        onChangeText={(val) => setConEmail(val)}
                        placeholder='Confirmação de e-mail'
                        placeholderTextColor='#4169E1'
                    /> 
                </View>
                
                
            <View style={stylesGlobal.inputAreaPassword}>
                    <TextInput 
                        style={stylesGlobal.inputPass} 
                        secureTextEntry={hidePass} 
                        onChangeText={(val) => setPassword(val)}
                        placeholder='Senha'
                        placeholderTextColor='#4169E1'
                    />
                    <TouchableOpacity style={stylesGlobal.iconEye} onPress={() => setHidePass(!hidePass)}>
                        {
                            hidePass? 
                                <Ionicons name="eye" color="#FFF" size={25}/>
                            :
                                <Ionicons name="eye-off" color="#FFF" size={25}/>
                        }
                        
                    </TouchableOpacity>
                </View>
                <View style={stylesGlobal.inputAreaPassword}>
                    <TextInput 
                        style={stylesGlobal.inputPass} 
                        secureTextEntry={hideConPass} 
                        onChangeText={(val) => setConPassword(val)}
                        placeholder='Confirmação de senha'
                        placeholderTextColor='#4169E1'
                    />
                    <TouchableOpacity style={stylesGlobal.iconEye} onPress={() => setHideConPass(!hideConPass)}>
                        {
                            hideConPass? 
                                <Ionicons name="eye" color="#FFF" size={25}/>
                            :
                                <Ionicons name="eye-off" color="#FFF" size={25}/>
                        }
                        
                    </TouchableOpacity>
                </View>
           
                <TouchableOpacity 
                    style={stylesGlobal.button}
                    onPress={ register }
                >
                    <Text style={stylesGlobal.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView> 
    )
}

const styl = StyleSheet.create({
   

})

export default Register;