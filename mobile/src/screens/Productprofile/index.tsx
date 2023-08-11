import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Productprofile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('login')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Login"
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