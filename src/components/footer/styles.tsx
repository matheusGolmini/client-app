import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    footer:{
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    power:{
        alignItems: 'center'
    },
    button: {
        flex:1,
        backgroundColor: 'transparent',
        marginLeft: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconText: {
        fontSize: 20,
        color: "white",
        fontWeight:"bold",
        alignContent: 'center',
        alignItems: 'center'
    },
    
});