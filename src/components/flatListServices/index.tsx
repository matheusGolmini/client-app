import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { IService } from '../../interfaces';

interface PropsComponent {
    props: {
        service: IService[]
        textButton: string,
        nextPage: string
    }
}

export default function FlatListService(propsComponent: PropsComponent) {
    const navigation = useNavigation();


    function navigateToSkill(footerColor: string) {
        navigation.navigate('PerfilServiceProvider', { footerColor });
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={propsComponent.props.service}
                keyExtractor={(service: IService) => String(service.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: service})=> (
                    <View style={ { ...styles.task, borderColor: service.color }}>
                        <Text style={{...styles.text, color: service.color}}>{service.title}</Text>
                        <Text style={{...styles.text, color: service.color}}>{service.name}</Text>
                        <Image style={{...styles.logo, marginTop: 20}} source={{uri: service.image}}/>

                        <TouchableOpacity 
                            style={styles.tasksButton} 
                            onPress={() => navigateToSkill(service.color)}
                        >
                            <Text style={{...styles.buttonText, color:  service.color}}> {propsComponent.props.textButton} </Text>
                            <Feather name="arrow-right" size={25} color={ service.color}/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>  
    )
}