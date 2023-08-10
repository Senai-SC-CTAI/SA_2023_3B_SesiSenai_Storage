import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function productprofile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Login')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Login"
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