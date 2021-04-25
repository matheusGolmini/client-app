import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { DetailService } from '../../interfaces';
import Rating from '../../components/Rating'

interface PropsComponent {
    props: {
        service: DetailService[]
    }
}

export function ListUnpaidService(propsComponent: PropsComponent) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <FlatList 
            data={propsComponent.props.service}
            keyExtractor={(service: DetailService) => String(service.id)}
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
                        onPress={() => {}}
                    >
                        <Text style={{...styles.buttonText, color:  'white'}}> Pague o Serviço</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                        onPress={() => {}}
                    >
                        <Text style={{...styles.buttonText, color:  'white'}}> Falar com {service.nameProvider}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                        onPress={() => {}}
                    >
                        <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>  
    )
}

export function ListServiceInProgress(propsComponent: PropsComponent) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: DetailService) => String(service.id)}
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
                            onPress={() => {}}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Falar com {service.nameProvider}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => {}}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>  
    )
}

export function ListServicesFinished(propsComponent: PropsComponent) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: DetailService) => String(service.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: service})=> (
                    <View style={ { ...styles.task, borderColor: service.color }}>
                        <Image style={styles.logo} source={{uri: service.imageProvider}}/>
                        <Text style={{...styles.text, color: service.color, marginTop: 15}}>{service.service} {service.nameProvider}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data inicio: 01/02/2021</Text>
                        <Text style={{...styles.text, color: service.color}}>Acordo: {service.combinedContract}</Text>
                        <Text style={{...styles.text, color: service.color}}>Data finalização: 01/22/2021</Text>
                        
                        <Text style={{...styles.text, color: service.color}}>Valor pago: {service.value} reais</Text>

                        <Rating />
                        
                        <TouchableOpacity 
                            style={{...styles.tasksButton2, backgroundColor: service.color, borderColor: service.color}} 
                            onPress={() => {}}
                        >
                            <Text style={{...styles.buttonText, color:  'white'}}> Ajuda</Text>
                        </TouchableOpacity>

                        
                    </View>
                )}
            />
        </View>  
    )
}