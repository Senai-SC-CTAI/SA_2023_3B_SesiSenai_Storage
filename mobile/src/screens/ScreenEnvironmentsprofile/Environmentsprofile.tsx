import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Environmentsprofile() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('product')
    }
  
    return (
    <View style={styles.container}>
        <Button
            title="product"
            onPress={openScreen}
            color="#fff"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cyan",
        justifyContent: "center"
    }
})