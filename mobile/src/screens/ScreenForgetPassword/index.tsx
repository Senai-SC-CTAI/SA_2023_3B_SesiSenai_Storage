import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function ForgetPassword() {

    const navigation = useNavigation();
  
    function Login(){
        navigation.navigate('Login')
    }
    
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Esqueceu sua senha:</Text>
        <Text style={styles.subtitle}>Preencha com seu email a baixo para receber uma mensagem com a redefinição da senha</Text>
       
        <TextInput
          style={styles.inputs}
          placeholder="Insira seu Email"
          placeholderTextColor={"#6A6A6A"}
        >
        </TextInput>

   <View style={styles.bts}>
   <TouchableOpacity style={styles.button} onPress={(Login)}>
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={(Login)}>
        <Text style={styles.buttonText}>Enviar email</Text>
        </TouchableOpacity>
   </View>
       
    </View>
  );
}
