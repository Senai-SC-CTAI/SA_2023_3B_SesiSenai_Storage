import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ForgetPassword() {

    const navigation = useNavigation();
  
    function Login(){
        navigation.navigate('Login')
    }
    
  
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Nova senha</Text>
       
        <TouchableOpacity style={styles.button} onPress={(Login)}>
        <Text style={styles.buttonText}>Entrar</Text>
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
  
  