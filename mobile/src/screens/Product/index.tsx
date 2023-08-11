import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Product() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('productdatails')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="Ir para Product Datails"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        justifyContent: "center"
    }
})