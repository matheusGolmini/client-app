import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Image, StyleSheet, ImageBackground, Modal, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import stylesGlobal from '../styles-global';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Register = () => {
    const navigation = useNavigation();

    const [image, setImage] = useState<string | null>(null);
    const[name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const[email, setEmail] = useState<string>('');
    const[phone, setPhone] = useState<string>('');
    const[cpf, setCpf] = useState<string>('');
    const [conPassword, setConPassword] = useState<string>('');
    const[conEmail, setConEmail] = useState<string>('');
    const[hidePass, setHidePass] = useState<boolean>(true);
    const[hideConPass, setHideConPass] = useState<boolean>(true);
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const [visibleModalTwo, setVisibleModalTwo ] = useState<boolean>(false);
    const [messageModal, setMessageModal ] = useState<string>('');

    useEffect(() => {
        if(!!name && !!phone && !!conPassword && !!password && !!conEmail && !!email && !!cpf){
            setDisableButton(false)
            setOpacityButton(1)
        }else {
            setDisableButton(true)
            setOpacityButton(0.5)
        }
    })

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

    function emailAndPasswordEqual(){
        if(email.toLowerCase() === conEmail.toLowerCase()){
            if(password === conPassword) {
                register();
            } else {
                setMessageModal('As senhas n??o est??o iguais!')
                setVisibleModalTwo(true);
            }
        }else {
            setMessageModal('Os E-mails n??o est??o iguais!')
            setVisibleModalTwo(true);
        }
    }

    return (
        <>
            <ScrollView 
                style={{backgroundColor: '#fff'}}
                showsVerticalScrollIndicator={false}
            >
                <View style={stylesGlobal.container}>
                    <TouchableOpacity 
                        onPress={ pickImage }
                    >
                        {image === null 
                            ? <ImageBackground 
                                style={{...stylesGlobal.logo, marginTop: 20, width: 200, height: 200}} 
                                source={require('../../assets/avatar.jpg')}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon name="camera"  size={35} color="#FFF" style={styles.camera}/>
                                </View>  
                            </ImageBackground >
                            : <Image  source={ {uri: image }} style={{...stylesGlobal.logo,  marginTop: 20, width: 170, height: 170}}/>
                        }
                    </TouchableOpacity>
                    <Text style={ stylesGlobal.headerText }>Reparo R??pido</Text>
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
                            placeholder='Telefone'
                            placeholderTextColor='#4169E1'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setPhone(val)}
                        />

                    </View>

                    <View style={stylesGlobal.input}>
                        <TextInput 
                            placeholder='CPF'
                            placeholderTextColor='#4169E1'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            style={stylesGlobal.inputText}
                            onChangeText={(val) => setCpf(val)}
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
                            placeholder='Confirma????o de e-mail'
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
                            placeholder='Confirma????o de senha'
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
                        style={{...stylesGlobal.button, margin: 25, opacity: opacityButton}}
                        onPress={ emailAndPasswordEqual }
                        disabled={disableButton}
                    >
                        <Text style={stylesGlobal.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> 

            <Modal
                animationType='slide'
                transparent={true}
                visible={visibleModalTwo}
            >
                <View style={styles.modal}>
                    <Text style={styles.title}>{messageModal}</Text>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity 
                            style={styles.buttonModal}
                            onPress={() => setVisibleModalTwo(false) }
                        >
                            <Text style={stylesGlobal.buttonText}>Ajustar</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </Modal>
        </>
    )
}


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    camera:{
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 10,
    },
    modal: {
        backgroundColor: '#FFF',
        marginTop: height - 200,
        height: 1000,
        width: '100%',
        borderRadius: 20,
        elevation: 10,
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#4169E1'
    
      },
    
      title: {
        marginTop: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
      },
    
      buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
      },
    
      buttonModal: {
        backgroundColor: '#4169E1',
        marginTop: 10,
        width: 100,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
      },
})

export default Register;