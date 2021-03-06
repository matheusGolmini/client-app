import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from '../styles';
import stylesGlobal from '../../styles-global';
import { Ionicons } from '@expo/vector-icons';
import ModalPicker from '../../../components/ModalPicker';
import MockService from '../../../mocks/mock-detail-service'


const ProfileEditAddress = () => {
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const[cep, setCep] = useState<string>('');
    const[rua, setRua] = useState<string>('');
    const[complemento, setComplemento] = useState<string>('');
    const[numero, setNumero] = useState<number | null>(null);

    const[isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const[stateSelected, setStateSelected] = useState<string| null>('');

    useEffect(() => {
        if(!!cep && !!rua && !!stateSelected && !!numero){
            setDisableButton(false)
            setOpacityButton(1)
        }else {
            setDisableButton(true)
            setOpacityButton(0.5)
        }
    })

    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack()
    }

    function alterData(){
        //enviar dados para serem alterados
        console.log('alterar: ', {
            cep,
            rua,
            complemento,
            stateSelected,
            numero
        });
        navigation.navigate('Home')

    }


    return (
        <> 
            <View 
                style={{backgroundColor: '#fff'}}
            >
                <View style={styles.container}>
                    <TouchableOpacity 
                        onPress={ navigateBack }
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Feather 
                            name='arrow-left' 
                            size={20} 
                            style={{
                                color: 'black',
                                paddingHorizontal: 10
                            }}
                        
                        />
                        <Text style={{color:'#666666', fontSize: 12}}>Voltar</Text>
                    </TouchableOpacity>
                
                    <View style={{alignItems: 'center', marginTop: 2}}> 
                        <Image style={styles.logo} source={{uri: 'https://image.freepik.com/vetores-gratis/pintor-com-escova-de-rolo-e-pintura-balde-icone-dos-desenhos-animados-ilustracao-vetorial-conceito-de-icone-de-profissao-de-pessoas-isolado-vetor-premium-estilo-flat-cartoon_138676-1882.jpg'}} />
                        <Text style={styles.text}>Matheus</Text>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#4169E1" size={20}/>
                        <TextInput 
                            placeholder='* Cep'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            onChangeText={(val) => setCep(val)}
                            style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}
                        />

                    </View>
                    
                    <TouchableOpacity 
                        style={{...styles.action}}
                        onPress={ () => setIsModalVisible(!isModalVisible) }
                    >
                        <FontAwesome  name='home' color="#4169E1" size={20}/>
                        <Text style={{color: !!stateSelected? 'black':'#666666', marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}>{!!stateSelected ? stateSelected: 'Selecione um estado'}</Text>
                        <Feather 
                            name='arrow-down' 
                            size={20} 
                            style={{
                                color: '#4169E1',
                                paddingHorizontal: 15
                            }}
                        />
                    </TouchableOpacity>
                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#4169E1" size={20}/>
                        <TextInput 
                            placeholder='* Rua'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onChangeText={(val) => setRua(val)}
                            style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}
                        />

                    </View>
                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#4169E1" size={20}/>
                        <TextInput 
                            placeholder='* N??mero'
                            placeholderTextColor='#666666'
                            keyboardType='number-pad'
                            autoCorrect={false}
                            onChangeText={(val) => setNumero(Number(val))}
                            style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}
                        />

                    </View>

                    <View style={styles.action}>
                        <FontAwesome  name='home' color="#4169E1" size={20}/>
                        <TextInput 
                            placeholder='Complemento'
                            placeholderTextColor='#666666'
                            keyboardType='email-address'
                            autoCorrect={false}
                            onChangeText={(val) => setComplemento(val)}
                            style={{marginLeft: 20, fontSize: 18, fontWeight: 'bold'}}
                        />

                    </View>

                    
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity 
                            style={{...stylesGlobal.button, opacity: opacityButton}}
                            onPress={alterData}
                            disabled={disableButton}
                        >
                            <Text style={stylesGlobal.buttonText}>Salvar</Text>
                        </TouchableOpacity>

                    </View>
                    <Modal
                        transparent={true}
                        animationType={'fade'}
                        visible={isModalVisible}
                    >
                        <ModalPicker 
                            setIsModalVisible={setIsModalVisible}
                            setTypeSelected={setStateSelected}
                            data={MockService.getStates()}
                        />

                    </Modal>
                    
                </View>
                
                
            </View>
        
        </>
    )
}



export default ProfileEditAddress;