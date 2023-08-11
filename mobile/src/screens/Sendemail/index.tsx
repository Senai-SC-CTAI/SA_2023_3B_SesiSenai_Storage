import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenD() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenE')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Tela E"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        justifyContent: "center"
    }
})