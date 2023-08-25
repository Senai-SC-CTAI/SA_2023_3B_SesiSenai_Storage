import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function product() {
    const navigation = useNavigation();
  
    function back(){
        navigation.navigate('Productdetails')
    }
  
    return (
        <View style={styles.container}>
         <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <View style={styles.inputSearchHolder}>
          <TextInput placeholder="Pesquisar por Produtos" style={{ width: '90%', fontStyle: 'italic', color: 'grey' }}></TextInput>
          <Image
              source={require("../../../assets/search.svg")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
                marginLeft: 53,
              }}
            />
        </View>
      </View>
      <View style={styles.card}>
      <Text style={styles.props}>Ex: Cameras</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={(back)}>
        <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
       
    </View>
  );
}