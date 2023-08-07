import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenK() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenA')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela A"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gold",
        justifyContent: "center"
    }
})