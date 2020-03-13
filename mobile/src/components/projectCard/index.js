import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import { ListItem } from 'react-native-elements'
import styles from './styles';

const Label = ({name}) =>
(
    <View><Text>{name}</Text></View>
);

const Project = ({project}) =>
{
    const {projectName, ownerName, image, labels} = project;

    return(
    <ListItem
        containerStyle={styles.card}
        title={projectName}
        subtitle={ownerName}
        leftAvatar={(
            <Image style={styles.image} source={require('../../../assets/icon.png')} />
        )}
    />
    );
};

export default Project;