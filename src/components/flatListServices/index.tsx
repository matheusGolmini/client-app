import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, Modal} from 'react-native';

import styles from './styles'; 
import { FlatList } from 'react-native-gesture-handler';
import { IDetailService } from '../../interfaces';
import Rating from '../../components/Rating';
import CreateTicket from '../createTicket'


interface PropsComponent {
    props: {
        service: IDetailService[]
    }
}

function contractService(text: string) {
    Linking.openURL(
      `whatsapp://send?text=${text}&phone=5541984875054`
    )
};


function Paypal() {
    // const [showModal, setShowModal] = useState<boolean>(false);
    // function test (data: any) {

    // }
    // return (
    //     <>
    //         <Modal
    //             visible={showModal}
    //             onRequestClose={()=> setShowModal(false)}
    //             onResponderEnd={data => test(data)}
    //         >
    //             <WebView
    //                 source={{uri: 'http://localhost:3000/'}}
    //             />
    //         </Modal>

    //         <TouchableOpacity
    //             style={{width: 300, height: 100}}
    //             onPress={() => setShowModal(true)}
    //         >
    //             <Text>Pagar com Paypal</Text>
    //         </TouchableOpacity>
    //     </>
    // )
    // Linking.openURL(
    //     `https://58b63c47854f.ngrok.io`
    //  )
};

export function ListUnpaidService(propsComponent: PropsComponent) {
    const text= `Olá%20é%20o%20Matheus,%20estou%20com%20duvida%20sobre%20esse%20serviço!%20id%20serviço`;
    const [controlPicker, setControlPicker] = useState<boolean>(false);
    return (
        <View style={styles.container}>
        <FlatList 
            data={propsComponent.props.service}
            keyExtractor={(service: IDetailService) => String(service.id)}
            showsVerticalScrollIndicator={false}    
            renderItem={({item: service})=> (
                <View style={ { ...styles.task, borderColor: service.color }}>
                    <Image style={styles.logo} source={{uri: service.imageProvider}}/>
                    <Text style={{...styles.text, color: service.color, marginTop: 15}}>{service.service} {service.nameProvider}</Text>
                    <Text style={{...styles.text, color: service.color}}>Dias estimados: {service.days} dias</Text>
                    <Text style={{...styles.text, color: service.color}}>Acordo: {service.combinedContract}</Text>
                    <Text style={{...styles.text, color: service.color}}>Valor: {service.value} reais</Text>

                    <TouchableOpacity 
                        style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                        onPress={Paypal}
                    >
                        <Text style={{...styles.buttonText, color:  'white'}}> Pague o Serviço</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                        onPress={() => contractService(text)}
                    >
                        <Text style={{...styles.buttonText, color:  'white'}}> Falar com {service.nameProvider}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                        onPress={() => {
                            service.help_open = !service.help_open;
                            setControlPicker(!controlPicker);
                        }}
                    >
                        <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                    </TouchableOpacity>
                    {
                        service.help_open ? 
                        <CreateTicket service={service}/>
                        : <></>
                    }
                </View>
            )}
        />
    </View>  
    )
}

export function ListServiceInProgress(propsComponent: PropsComponent) {
    const text= `Olá%20é%20o%20Matheus,%20gostaria%20de%20tirar%20umas%20duvidas%20com%20você.`;
    const [controlPicker, setControlPicker] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: IDetailService) => String(service.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: service})=> (
                    <View style={ { ...styles.task, borderColor: service.color }}>
                        
                        <Image style={styles.logo} source={{uri: service.imageProvider}}/>
                        <Text style={{...styles.text, color: service.color, marginTop: 15}}>{service.service} {service.nameProvider}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data inicio: 01/02/2021</Text>
                        <Text style={{...styles.text, color: service.color}}>Acordo: {service.combinedContract}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data finalização: 01/22/2021</Text>
                        
                        <Text style={{...styles.text, color: service.color}}>Valor pago: {service.value} reais</Text>

                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => contractService(text)}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Falar com {service.nameProvider}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => {
                                service.help_open = !service.help_open;
                                setControlPicker(!controlPicker);
                            }}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                        </TouchableOpacity>
                        {
                        service.help_open ? 
                        <CreateTicket service={service}/>
                        : <></>
                    }
                    </View>
                )}
            />
        </View>  
    )
}

export function ListServicesFinished(propsComponent: PropsComponent) {
    const [controlPicker, setControlPicker] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: IDetailService) => String(service.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: service})=> (
                    <View style={ { ...styles.task, borderColor: service.color }}>
                        <Image style={styles.logo} source={{uri: service.imageProvider}}/>
                        <Text style={{...styles.text, color: service.color, marginTop: 15}}>{service.service} {service.nameProvider}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data inicio: 01/02/2021</Text>
                        <Text style={{...styles.text, color: service.color}}>Acordo: {service.combinedContract}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data finalização: 01/22/2021</Text>
                        
                        <Text style={{...styles.text, color: service.color}}>Valor pago: {service.value} reais</Text>

                        <Rating value={true}/>
                        
                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => {
                                service.help_open = !service.help_open;
                                setControlPicker(!controlPicker);
                            }}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                        </TouchableOpacity>
                        {
                        service.help_open ? 
                        <CreateTicket service={service}/>
                        : <></>
                    }
                        
                    </View>
                )}
            />
        </View>  
    )
}