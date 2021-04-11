import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft: 15
        // backgroundColor: 'transparent'
    },

    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#FFF',
        marginTop: 10,
        width: 300,
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    textClick: {
        marginTop: 10,
        flexDirection: 'row',
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

    headerText: { 
        fontSize: 25,
        color: 'black',
        marginBottom:10,
        marginTop:50,
        alignSelf:"center",
        fontWeight:"bold"
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