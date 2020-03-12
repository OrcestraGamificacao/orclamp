import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#384F7D',
        fontSize: 16,
        //width: 270,
        lineHeight: 22,
        fontFamily: 'sans-serif-light'
    },
    animationContainer: {
        backgroundColor: '#F5F7FB',
        width: 200,
        height: 200,
        transform: [{rotateY: '180deg'}]
    },
    container: {
        backgroundColor: '#F5F7FB',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;