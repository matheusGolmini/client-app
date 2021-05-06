import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import stylesGlobal from '../../pages/styles-global';

const { height } = Dimensions.get('window');

interface ConfirmModal {
    visible: boolean
}

export default function ConfirmModal() {
    const [visible, setVisible ] = useState<boolean>(true);

    // useEffect(() => {
    //     set
    // }, []);
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
        >
            <View style={styles.modal}>
                <Text style={styles.title}>Quer realmente alterar seus dados?</Text>
                <View style={styles.buttonArea}>
                    <TouchableOpacity 
                        style={{...styles.button, marginHorizontal: 10}}
                        onPress={() => {}}
                    >
                        <Text style={stylesGlobal.buttonText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={stylesGlobal.buttonText}>Não</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

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

    button: {
        backgroundColor: '#4169E1',
        marginTop: 10,
        width: 100,
        height: 40,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
    },
})