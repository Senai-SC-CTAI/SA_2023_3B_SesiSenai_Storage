import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenH() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenI')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela I"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cyan",
        justifyContent: "center"
    }
})