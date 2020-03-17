import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    top: {
        height: 250,
        width: 300,
        alignSelf: 'center',
        top: -75,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        transform: [{scaleX: 2}]
    },
    pageTitle: {
        fontSize: 19,
        color: '#ffffff',
        lineHeight: 22,
        fontFamily: 'Fjalla-One',
        top: 150,
        alignSelf: 'center',
        transform: [{scaleX: 1/2}]
    },
});

export default styles;