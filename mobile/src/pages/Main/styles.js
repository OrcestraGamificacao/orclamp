import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F7FB',
  },
  projectList: {
    top: -100,
    flex: 1,
  },
  projectHeight: {
    height: 325,
  },
  button: {
    height: 55,
    width: 300,
    backgroundColor: '#7AC14E',
    borderRadius: 8,
    zIndex: 4,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    position: 'absolute',
    bottom: 30,
    left: -150,
  },
  bottomGradient: {
    height: 400,
    width: '100%',
    zIndex: 3,
    width: 500,
    marginTop: -320,
    bottom: 0,
  },
  projectAvailable: {
    top: -100,
    alignSelf: 'flex-start',
    left: 30,
    color: 'rgba(56, 79, 125, .8)',
    fontSize: 13,
    letterSpacing: 1,
    lineHeight: 16,
    fontFamily: 'Fjalla-One',
  },
  buttonText: {
    fontFamily: 'Fjalla-One',
  },
});

export default styles;
