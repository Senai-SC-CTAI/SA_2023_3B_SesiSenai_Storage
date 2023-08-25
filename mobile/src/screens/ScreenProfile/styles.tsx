import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    backgroundColor: '#A1C2E3',
  },
  card:{
    justifyContent: 'center',
    display:'flex',
    backgroundColor: '#D9D9D9',
    marginBottom: 36,
    width: '90%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  props: {
    fontStyle: 'italic',
    margin: 5,
    fontWeight: 'bold',
  },
  login:{
    width: '66%',
    margin: 20,
  },
  inputs:{
    backgroundColor: '#D9D9D9',
    width: '100%',
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    fontStyle: 'italic'
  },
  logo: {
    width: 134,
    height: 134,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 17,
  },
  senai:{
    width: 145,
    height: 43,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 110,
  },
  title: {
    color: '#173BA6',
    fontSize: 30,
    fontWeight: 'normal',
    marginBottom: 5,
    fontFamily: 'Inter-Black',
  },
  subtitle: {
    color: '#737373',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Inter-Black',
    marginBottom: 27,
  },
  cadastro: {
    fontSize: 15,
    marginBottom: 10,
    color: '#FA321A',
  },
  button: {
    backgroundColor: '#1E4DD9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 10,
  },
  bts:{
    justifyContent: 'center',
    alignItems: 'center',
    display:'flex',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text:{
    marginTop: 10,
    color: '#6A6A6A',
  },
  senha:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  s:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
  },
  qm:{
    width: 13,
    height: 14,
    marginLeft: 5, 
  }
  
})

export default styles;