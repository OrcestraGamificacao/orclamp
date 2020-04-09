import React from 'react';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SearchBar = ({changeSearchText, searchText, placeholder}) =>(
    <Input
        placeholder={placeholder}
        onChangeText={changeSearchText}
        value={searchText}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarContainer}
        inputStyle={styles.searchBarText}
        leftIcon={
            <Icon name='ios-search'
                size={20}
                color='rgba(125,125,125, .5)'
            />
        }
    />
);

export default SearchBar;