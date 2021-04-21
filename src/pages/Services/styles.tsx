import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    taskList: {
        marginTop: 15,
    },
    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },
    taskProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    taskValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    tasksButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tasksButtonText: {
        color: '#A2C43A',
        fontSize: 15,
        fontWeight: 'bold'
    }
});