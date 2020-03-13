import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: 300,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 10,
    },
    image: {
        width: 65,
        height: 65,
        backgroundColor: 'black',
        marginLeft: 0,
        marginTop: 0
    },
    labelText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 10
    },
    labelView: {
        backgroundColor: 'rgba(122, 193, 78, .8)',
        borderRadius: 100,
        marginHorizontal: 5,
        padding: 5,
        paddingHorizontal: 10
    },
    labelList: {
        alignItems: 'flex-start',
        marginVertical: 5
    },
    item: {
        height: 100,
        backgroundColor: 'black'
    },
    projectName: {
        color: '#384F7D',
        fontSize: 17,
        width: 100,
        alignSelf: 'flex-end',
    },
    ownerName: {
        fontSize: 13,
        marginBottom: 10
    }
});

export default styles;