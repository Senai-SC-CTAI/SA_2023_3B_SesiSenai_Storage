import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenG() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenH')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela H"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center"
    }
})