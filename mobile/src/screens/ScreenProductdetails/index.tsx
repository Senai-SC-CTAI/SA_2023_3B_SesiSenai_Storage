import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { useFonts, Inter_100Thin, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Productdetails() {

  useFonts({
    Inter_100Thin,
    Inter_700Bold
    });

    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('product')
    }
  
    return (
        <View style={styles.container}>
       <Text style={styles.title}>Detalhes do Produto:</Text>
       <View style={styles.card}></View>
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
       
    </View>
  );
}
