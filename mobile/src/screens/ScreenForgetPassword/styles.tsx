import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    backgroundColor: '#A1C2E3',
  },
  inputs:{
    backgroundColor: '#D9D9D9',
    width: '70%',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    margin: 18,
    borderColor: 'grey',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  title: {
    color: '#173BA6',
    fontSize: 30,
    fontWeight: 'normal',
    marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  subtitle: {
    color: '#737373',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    width: '70%',
    marginTop: 5,
    fontStyle: 'italic',
    marginBottom: 27,
  },
  button: {
    backgroundColor: '#1E4DD9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text:{
    marginTop: 10,
    color: '#6A6A6A',
  },
  pass:{
    width: '66%',
    margin: 20,
    alignContent: 'center',
    textAlign: 'center'
  },
  bts:{
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    flexDirection: 'row',
  }
})

export default styles;