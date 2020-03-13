import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Project from '../../components/projectCard';

import styles from './styles';

function Main() {

  var [searchText, changeSearchText] = useState('');

  var mock = [
    {
      projectName: 'Plataforma educacional gamificada',
      ownerName: 'Jason Fried',
      avatar: '../../../assets/icon.png',
      labels: ['Rails', 'Ruby on Rails']
    },
    {
      projectName: 'App de academia gamificado',
      ownerName: 'Henri Charriere',
      avatar: '../../../assets/icon.png',
      labels: ['Javascript', 'React Native']
    },
    {
      projectName: 'Chatbot de monitoramento ',
      ownerName: 'Stephen King',
      avatar: '../../../assets/icon.png',
      labels: ['Rasa', 'Python']
    }
  ];

  mock = mock.filter(project => {return project.projectName.toLowerCase().includes(searchText.toLowerCase())});

  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#7AC14E', '#5A8D3B']}
      style={styles.top}>
        <Text style={styles.pageTitle}>Projetos</Text>
      </LinearGradient>
      <Input
          placeholder={'Procurar projeto'}
          onChangeText={changeSearchText}
          value={searchText}
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarContainer}
          inputStyle={styles.searchBarText}
          leftIcon={
            <Icon name='search'
              size={20}
              color='rgba(125,125,125, .5)'
            />
          }
        />
      <Text style={styles.projectAvailable}>PROJETOS DISPONÍVEIS</Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={mock}
        renderItem={(project) => (<Project project={project}/>)}
        style={styles.projectList}
        showsVerticalScrollIndicator={false}
      />
      <Button type='solid' title='ADICIONAR PROJETO' buttonStyle={styles.button} />
      <LinearGradient pointerEvents='none' colors={['#ffffff', 'rgba(255, 255, 255, 0)']} start={[0, .7]} end={[0, 0]} style={styles.bottomGradient} />
    </View>
  );
}

export default Main;
