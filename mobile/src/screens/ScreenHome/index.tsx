import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { useFonts, Inter_100Thin, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Home() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('product')
    }
  
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.subtitle}>ao Controle de estoque</Text>
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Ir Produtos</Text>
        </TouchableOpacity>
       
    </View>
  );
}
