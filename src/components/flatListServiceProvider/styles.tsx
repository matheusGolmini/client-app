import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 50,
    },
    container: {
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
        borderWidth: 10,
    },
    textDefault: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        color: '#41414d',
        fontWeight: 'bold',
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
        fontWeight: 'bold'
    }
});