import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import Project from '../../components/ProjectCard';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import styles from './styles';

const Projects = ({ navigation }) => {
  const [searchText, changeSearchText] = useState('');

  let mock = [
    {
      projectName: 'Plataforma educacional gamificada',
      ownerName: 'Jason Fried',
      avatar: '../../../assets/icon.png',
      labels: ['Rails', 'Ruby on Rails'],
    }];


  mock = mock.filter((project) => project.projectName.toLowerCase()
    .includes(searchText.toLowerCase()));
  return (
    <View style={styles.container}>
      <Header title="Meus Projetos" />
      <SearchBar
        placeholder="Procurar projeto"
        changeSearchText={changeSearchText}
        searchText={searchText}
      />
      <Text style={styles.projectAvailable}>MEUS PROJETOS</Text>
      <View style={styles.projectHeight}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={mock}
          renderItem={(project) => (<Project project={project} />)}
          style={styles.projectList}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Button type="solid" title="ADICIONAR PROJETO" titleStyle={styles.buttonText} buttonStyle={styles.button} />
    </View>
  );
};

export default Projects;
