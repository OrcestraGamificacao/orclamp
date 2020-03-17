import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const Header = props => {
    
    return (
        <LinearGradient
            colors={['#7AC14E', '#5A8D3B']}
            style={styles.top}
        >
            <Text style={styles.pageTitle}>{props.title}</Text>
      </LinearGradient>
    );
}

export default Header;