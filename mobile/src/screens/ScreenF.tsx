import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenF() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenG')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela G"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center"
    }
})