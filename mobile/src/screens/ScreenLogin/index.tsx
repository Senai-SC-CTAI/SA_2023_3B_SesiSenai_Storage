import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useFonts, Inter_100Thin, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import styles from "./styles";
import axios from 'axios';

export function Login() {

  useFonts({
    Inter_100Thin,
    Inter_700Bold,
  });

  const logar = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8090/api/login', {
        name_user: username,
        password_user: password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      if ( response == true ) {
        navigation.navigate("DrawerRoutes")
      } else {
        alert("Usuário ou Senha Incorreta!");
      }

    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };


  const navigation = useNavigation();

  function Login() {
    navigation.navigate("DrawerRoutes");
  }
  function Register() {
    navigation.navigate("Register");
  }
  function ForgetPass() {
    navigation.navigate("ForgetPassword");
  }

  return (
    <View style={styles.container}>

      <Image
        source={require("../../../assets/logo.svg")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.subtitle}>ao Controle de estoque</Text>

      <View style={styles.login}>
        <Text style={[styles.title, { textAlign: 'left', fontSize: 18 }]}>Login:</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Ex: Lucas Pinto da Silva"
          placeholderTextColor={"#6A6A6A"}
          value={username}
          onChangeText={(text: any) => setUsername(text)}
        >
        </TextInput>
        <Text style={[styles.title, { marginTop: 25, fontSize: 18 }]}>Senha:</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Ex: 03041252"
          secureTextEntry
          placeholderTextColor={"#6A6A6A"}
          value={password}
          onChangeText={(text: any) => setPassword(text)}
        >
        </TextInput>
      </View>

      <View style={styles.bts}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Register}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.s}>
        <TouchableOpacity onPress={ForgetPass} style={styles.senha}>
          <Text style={styles.text}>Esqueci minha senha</Text>
          <Image
            source={require("../../../assets/q-mark.png")}
            style={styles.qm}
          ></Image>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../assets/senai-logo.svg")}
        style={styles.senai}
      ></Image>
    </View>
  );
}