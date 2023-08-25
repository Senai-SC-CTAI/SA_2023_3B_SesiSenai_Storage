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
    marginTop: 36,
    marginBottom: 36,
    width: '60%',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey', 
  },
  props: {
    fontStyle: 'italic',
    margin: 5,
    fontWeight: 'bold',
  },
  logo: {
    width: 134,
    height: 134,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 17,
  },
 title: {
    color: '#173BA6',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
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
  inputSearchHolder: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    height: 40,
    width: "100%",
    padding: 20,
    marginTop:20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

  },
  
})

export default styles;