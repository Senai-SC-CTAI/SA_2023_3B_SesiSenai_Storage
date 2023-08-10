import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ForgetPassword() {
    const navigation = useNavigation();
    
    function openScreen(){
        navigation.navigate('Home')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Home"
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