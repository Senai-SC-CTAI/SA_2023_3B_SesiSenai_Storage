import { StyleSheet }  from 'react-native';

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#A1C2E3',
        padding: 20
    },
    headerLogo: {
        width: 37,
        height: 37,
        marginRight: 10,
      },
      headerSenai: {
        width: 140,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10,
      },
      menu: {
        width: 30,
        height: 30, 
        resizeMode: 'contain',
        marginRight: 10,
      }
})

export default styles;