import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export function Environments() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Productdetails');
    }
  
    return (
        <View style={styles.container}>
       <Text style={styles.title}>Listagem de Ambientes:</Text>

        {/* input search */}
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <View style={styles.inputSearchHolder}>
          <TextInput placeholder="Pesquisar por Ambientes" style={{ width: '90%', fontStyle: 'italic', color: 'grey' }}></TextInput>
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
      <Text style={styles.props}>Ex: F13</Text>
      </View>
        <TouchableOpacity style={styles.button} onPress={(openScreen)}>
        <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
       
    </View>
  );
}
