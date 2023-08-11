import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Login() {

    const navigation = useNavigation();
  
    function Login(){
        navigation.navigate('DrawerRoutes')
    }
    function Register(){
        navigation.navigate('Register')
      }
      function ForgetPass(){
        navigation.navigate('ForgetPassword')
      }
  
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
       
        <TouchableOpacity style={styles.button} onPress={(Login)}>
        <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.button} onPress={(ForgetPass)}>
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      display:'flex',
      backgroundColor: '#f5f5f5',
    },
    title: {
      color: 'blue',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily:'inter',
    },
    texty: {
      fontSize: 15,
      marginBottom: 10,
    },
    cadastro: {
      fontSize: 15,
      marginBottom: 10,
      color: '#FA321A',
    },
    button: {
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  })
  
  