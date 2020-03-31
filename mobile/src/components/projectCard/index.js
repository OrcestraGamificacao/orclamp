import React, {useState} from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { ListItem, Card } from 'react-native-elements'
import styles from './styles';

const Label = ({name}) =>{
    return (
        <View style={styles.labelView}><Text style={styles.labelText}>{name.item}</Text></View>
)};

const Project = props =>
{
    const project = props.project;
    const {projectName, ownerName, avatar, labels} = project.item;

    return(
    <Card containerStyle={styles.card}>
        <ListItem
            title={
            <Text style={styles.projectName}>{projectName}</Text>
            }
            subtitle={
                <>
                <Text style={styles.ownerName}>
                    {ownerName}
                </Text>
                <View style={styles.labelList}>
                    <FlatList horizontal data={labels} keyExtractor={(item, index) => index.toString()} renderItem={(label) => <Label name={label} />}/>
                </View>
                </>
            }
            leftAvatar={(
                <Image style={styles.image} source={require('../../../assets/icon.png')} />
            )}
        />
    </Card>
    );
};

export default Project;