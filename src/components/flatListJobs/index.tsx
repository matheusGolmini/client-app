import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { Skills } from '../../interfaces/skills';
// import Imag from '../../assets/favicon.png'

export default function FlatListJobs(skills: { props: Skills[]}) {
    // console.log(skills.props)
    const navigation = useNavigation();

    function logout(){
        navigation.navigate('Login');
    }
    
    // console.log(Imag)

    return (
        <View style={styles.container}>
            <FlatList 
                data={skills.props}
                style={styles.taskList}
                keyExtractor={(skill: Skills) => String(skill.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: skill})=> (
                <View style={ { ...styles.task, borderColor: skill.color }}>
                    <Text style={{...styles.title, color: skill.color}}>{skill.title}</Text>
                    <Text style={{...styles.description, color: skill.color}}>{skill.description}</Text>
                    <Image style={styles.logo} source={{uri: skill.image}}/>

                    <TouchableOpacity 
                        style={styles.tasksButton} 
                        onPress={() => {}}
                    >
                        <Text style={{...styles.buttonText, color: skill.color}}> Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={25} color={skill.color}/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>  
    )
}