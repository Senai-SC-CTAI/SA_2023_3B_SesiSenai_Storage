import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
   
//     export function Login() {
//         const navigation = useNavigation();
     
     
//         function goToHome() {
//             navigation.navigate('Home'); //TELA HOME
//         }
     
//         function openScreen(){
//         navigation.navigate('Register')
//         }

//         function goToForgotPassword() {
//             navigation.navigate('ForgetPassword'); //Senha
//         }
     
//     return (
//     <View style={styles.container}>
//         <TouchableOpacity
//                style={styles.button}
//                onPress={(openScreen)}>
//                 <Text style={styles.buttonText}>Cadastro</Text>
//            </TouchableOpacity>

//            <TouchableOpacity
//                style={styles.button}
//                onPress={(goToHome)}>
//                 <Text style={styles.buttonText}>Login</Text>
//            </TouchableOpacity>
           
//            <TouchableOpacity
//                style={styles.button}
//                onPress={(goToForgotPassword)}>
//                 <Text style={styles.buttonText}>Recuperar Senha</Text>
//            </TouchableOpacity>
//        </View>
// );
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'green',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     button: {
//         width: 150,
//         height: 150,
//         borderRadius: 35,
//         backgroundColor: 'gray',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: 10
//     },
//     buttonText: {
//         color: 'blue'
//     }
//  });
 