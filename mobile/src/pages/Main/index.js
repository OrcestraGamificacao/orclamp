import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';
import Project from '../../components/projectCard';

import styles from './styles';

function Main() {

  var [searchText, changeSearchText] = useState('');

  var mock = [
    {
      projectName: 'Plataforma educacional gamificada',
      ownerName: 'Jason Fried',
      image: '../../../assets/icon.png',
      labels: ['Rails', 'Ruby on Rails'],
      id: 1
    },
    {
      projectName: 'App de academia gamificado',
      ownerName: 'Henri Charriere',
      image: '../../../assets/icon.png',
      labels: ['Javascript', 'React Native'],
      id: 2
    },
    {
      projectName: 'Chatbot de monitoramento ',
      ownerName: 'Stephen King',
      image: '../../../assets/icon.png',
      labels: ['Rasa', 'Python'],
      id: 3
    }
  ];

  mock = mock.filter(project => {return project.projectName.toLowerCase().includes(searchText.toLowerCase())});

  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#7AC14E', '#5A8D3B']}
      style={styles.top}>
        <Text style={styles.pageTitle}>Projetos</Text>
        <TextInput
          placeholder={'Procurar projeto'}
          onChangeText={changeSearchText}
          style={styles.searchBar}
        />
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.projectList}>
        {mock.map(project => (<Project project={project} />))}
      </ScrollView>
      <Button type='solid' title='ADICIONAR PROJETO' raised buttonStyle={styles.button} />
    </View>
  );
}

export default Main;
