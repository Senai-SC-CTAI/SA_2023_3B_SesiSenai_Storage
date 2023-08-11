import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Profile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('environments')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Environments"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "purple",
        justifyContent: "center"
    }
})