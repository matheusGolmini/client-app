import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#8080ff'
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft: 15,
        alignSelf: 'center',
        backgroundColor: 'transparent'
    },

    input: {
        marginTop: 10,
        padding: 10,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    button: {
        backgroundColor: '#FFF',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    footer: {
        marginTop: 300
    }
})

export default styles;