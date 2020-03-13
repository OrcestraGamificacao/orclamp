import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F7FB'
  },
  top: {
    height: 250,
    width: 300,
    alignSelf: 'center',
    top: -75,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    transform: [{scaleX: 2}]
  },
  pageTitle: {
    fontSize: 19,
    color: '#ffffff',
    lineHeight: 22,
    fontFamily: 'Roboto',
    top: 150,
    alignSelf: 'center',
    transform: [{scaleX: 1/2}]
  },
  projectList: {
    top: -85,
    flex: 1,
  },
  button: {
    height: 55,
    width: 300,
    backgroundColor: '#7AC14E',
    borderRadius: 8,
    bottom: 75,
    zIndex: 4,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: .8,
    letterSpacing: 2
  },
  bottomGradient: {
    height: 300,
    width: '100%',
    zIndex: 3,
    width: 500,
    marginTop: -300,
  },
  projectAvailable: {
    top: -85,
    alignSelf: 'flex-start',
    left: 30,
    color: 'rgba(56, 79, 125, .8)',
    fontSize: 13,
    letterSpacing: 1,
    lineHeight: 16
  },
  searchBar: {
    top: -100,
    width: 315,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 5,
  },
  searchBarText: {
    marginLeft: 10
  },
  searchBarContainer: {
    borderBottomWidth: 0
  },
});

export default styles;
