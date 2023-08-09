import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenI() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenJ')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela J"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center"
    }
})