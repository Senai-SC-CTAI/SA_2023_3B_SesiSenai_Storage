import * as React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useFonts, Inter_100Thin, Inter_700Bold } from '@expo-google-fonts/inter';
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function Login() {

useFonts({
  Inter_100Thin,
  Inter_700Bold,
});

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
        >
        </TextInput>
        <Text style={[styles.title, { marginTop: 25, fontSize: 18 }]}>Senha:</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Ex: 03041252"
          secureTextEntry
          placeholderTextColor={"#6A6A6A"}
        >
        </TextInput>
      </View>

      <View style={styles.bts}>
        <TouchableOpacity style={styles.button} onPress={Login}>
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
