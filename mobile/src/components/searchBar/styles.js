import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    searchBar: {
        top: -125,
        width: 315,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        paddingVertical: 5,
        shadowOffset: {height: 1, width: 0},
        shadowColor: '#000000',
        shadowOpacity: .1,
        shadowRadius: 2.22,
        elevation: 3
    },
    searchBarText: {
        marginLeft: 10,
        fontFamily: 'Fjalla-One'
    },
    searchBarContainer: {
        borderBottomWidth: 0
    },
});

export default styles;