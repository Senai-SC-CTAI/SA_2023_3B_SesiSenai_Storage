import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';



export function productprofile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Home')
    }
  
    return (
        <View style={styles.container}>
       
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Proximo</Text>
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
  
  