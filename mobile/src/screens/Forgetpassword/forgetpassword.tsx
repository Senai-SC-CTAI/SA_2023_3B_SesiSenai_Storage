import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';



export function Forget password () {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('sendemail')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Send Email"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center"
    },
    text:{
        color: "#fff",
    }
})