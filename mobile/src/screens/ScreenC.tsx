import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

type ParamsProps = {
    name: string
}

export function ScreenC() {
    
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenA')
    }
  
    return (
    <View style={styles.container}>
        <Text style={styles.text}>
            { name }
        </Text>
        <Button
            title="Voltar para Tela A"
            onPress={openScreen}
            color="#fff"
        />
        <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center"
    },
    text:{
        color: "#fff",
    }
})