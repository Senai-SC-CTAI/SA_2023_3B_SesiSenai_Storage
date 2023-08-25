import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Environmentsprofile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('product')
    }
  
    return (
        <View style={styles.container}>
       
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Proximo</Text>
        </TouchableOpacity>
       
    </View>
  );
}

