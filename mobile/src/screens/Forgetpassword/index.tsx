import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';



export function ForgetPassword () {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Login')
    }
  
    return (
    <View style={styles.container}>
        <TouchableOpacity
         onPress={openScreen}
        >
      <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center"
    },
    text:{
        fontSize: 15,
        color: "#fff",
    }
})