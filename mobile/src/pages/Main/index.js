import React, {useState} from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

function Main() {

  var [searchText, changeSearchText] = useState('Procurar projeto');



  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#7AC14E', '#5A8D3B']}
      style={styles.top}>
        <Text style={styles.pageTitle}>Projetos</Text>
        <TextInput style={styles.searchBar}/>
      </LinearGradient>
    </View>
  );
}

export default Main;
