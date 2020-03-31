import React, {useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Project from '../../components/projectCard';
import Header from '../../components/Header';

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
      <Header title="Projetos"/>
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
      <View style={styles.projectHeight}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={mock}
          renderItem={(project) => (<Project project={project}/>)}
          style={styles.projectList}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Button type='solid' title='ADICIONAR PROJETO' titleStyle={styles.buttonText} buttonStyle={styles.button} />
      <LinearGradient pointerEvents='none' colors={['rgba(255, 255, 255, 0)', '#ffffff']} start={[0, 0]} end={[0, .7]} style={styles.bottomGradient} />
    </View>
  );
}

export default Main;
