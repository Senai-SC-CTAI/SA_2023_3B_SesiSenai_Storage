import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Register() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('SendEmail')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="SendEmail"
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