import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function SendEmail() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Profile')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Profile"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "brown",
        justifyContent: "center"
    }
})