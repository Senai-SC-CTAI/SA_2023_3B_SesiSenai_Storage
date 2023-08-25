import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import { useFonts, Inter_100Thin, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Profile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Login')
    }
    useFonts({
        Inter_100Thin,
        Inter_700Bold,
      });
    return (
        <View style={styles.container}>
        <Image
        source={require("../../../assets/user.png")}
        style={styles.logo}
      ></Image>
      <View style={styles.card}>
        <Text style={styles.props}>Nome:</Text>
        <Text style={styles.props}>Email:</Text>
        <Text style={styles.props}>CPF:</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.props}>Senha:</Text>
        <Text style={styles.props}>Nova senha:</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
       
    </View>
  );
}
