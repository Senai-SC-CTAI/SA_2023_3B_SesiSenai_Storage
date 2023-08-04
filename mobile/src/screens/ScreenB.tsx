import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenC', {name: "Esse conteúdo veio da tela B"})
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela C"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center"
    }
})