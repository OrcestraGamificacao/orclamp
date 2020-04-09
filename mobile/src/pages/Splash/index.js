import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

const Splash = ({ navigation }) =>
{

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 3000);
    }, []);

    return(
        <View style={styles.container}>
            <LottieView style={styles.animationContainer} source={require('../../../assets/animations/lamp.json')} autoPlay loop={false} />
            <View style={styles.circle}/>
            <Text style={styles.text}>Orc'lamp</Text>
            <Text style={styles.text}>Tenha ideias. Crie um projeto. Convoque um time.</Text>
        </View>
    );
}

export default Splash;