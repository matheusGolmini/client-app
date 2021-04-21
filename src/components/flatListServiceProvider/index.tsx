import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { ServiceProvider } from '../../interfaces/serviceProvider';

interface PropsComponent {
    props: {
        serviceProvider: ServiceProvider[],
        color: string 
    }
}

export default function FlatListServiceProvider(propsComponent: PropsComponent) {
    const navigation = useNavigation();


    function navigateToSkill(footerColor: string) {
        navigation.navigate('PerfilServiceProvider', { footerColor });
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.serviceProvider}
                style={styles.taskList}
                keyExtractor={(serviceProvider: ServiceProvider) => String(serviceProvider.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: serviceProvider})=> (
                <View style={ { ...styles.task, borderColor: propsComponent.props.color }}>
                    <Text style={{...styles.text, color: propsComponent.props.color}}>Nome: {serviceProvider.name}</Text>
            
                    <Text style={{...styles.text, color: propsComponent.props.color, marginTop: 10}}>
                        Experiência: 
                         {
                            serviceProvider.time_experience > 1 ?
                            ` ${serviceProvider.time_experience } anos ` 
                            : serviceProvider.time_experience === 1
                            ? ` ${serviceProvider.time_experience } ano `: ` Menor que um ano ` 
                        }
                    </Text>
                    
                    <Image style={{...styles.logo, marginTop: 20}} source={{uri: serviceProvider.image}}/>
                    <TouchableOpacity 
                        style={styles.tasksButton} 
                        onPress={() => navigateToSkill( propsComponent.props.color)}
                    >
                        <Text style={{...styles.buttonText, color:  propsComponent.props.color}}> Ver o perfil</Text>
                        <Feather name="arrow-right" size={25} color={ propsComponent.props.color}/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>  
    )
}