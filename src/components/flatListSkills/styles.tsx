import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 50,
    },
    container: {
        marginTop: 25,
        margin: 55
    },
    taskList: {
        marginTop: 15,
    },
    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#605C99',
        shadowRadius: 3.5,
        elevation: 5
    },
    title: {
        fontSize: 20,
        color: '#302E4D',
        fontWeight: 'bold'
    },
    description: {
        marginTop: 8,
        fontSize: 18,
        marginBottom: 24,
    },
    tasksButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#302E4D',
    }
});