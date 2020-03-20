import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    top: {
        height: 250,
        width: 300,
        alignSelf: 'center',
        top: -100,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        transform: [{scaleX: 2}]
    },
    pageTitle: {
        fontSize: 20,
        color: '#ffffff',
        lineHeight: 22,
        fontFamily: 'Fjalla-One',
        top: 175,
        alignSelf: 'center',
        transform: [{scaleX: 1/2}],
    },
});

export default styles;