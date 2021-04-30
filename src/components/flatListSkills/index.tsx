import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { ISkills } from '../../interfaces/skills';

export default function FlatListSkills(skills: { props: ISkills[]}) {
    const navigation = useNavigation();


    function navigateToSkill(footerColor: string) {
        navigation.navigate('ServiceProvider', { footerColor });
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={skills.props}
                style={styles.taskList}
                keyExtractor={(skill: ISkills) => String(skill.id)}
                showsVerticalScrollIndicator={false}    
                renderItem={({item: skill})=> (
                <View style={ { ...styles.task, borderColor: skill.color }}>
                    <Text style={{...styles.title, color: skill.color}}>{skill.title}</Text>
                    <Text style={{...styles.description, color: skill.color}}>{skill.description}</Text>
                    <Image style={styles.logo} source={{uri: skill.image}}/>

                    <TouchableOpacity 
                        style={styles.tasksButton} 
                        onPress={() => navigateToSkill(skill.color)}
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