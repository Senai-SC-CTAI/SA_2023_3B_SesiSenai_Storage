import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useFonts, Inter_100Thin, Inter_700Bold } from '@expo-google-fonts/inter';

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export function Register() {

 useFonts({
    Inter_100Thin,
    Inter_700Bold
    });

  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = React.useState(false); // Estado para controlar a visibilidade do modal

  function Login() {
    navigation.navigate("Login");
  }

  function check() {
    setModalVisible(true);
  }
  function closeModal() {
    setModalVisible(false);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Venha se cadastrar:</Text>
      <View style={styles.register}>
        <TextInput
          style={styles.inputs}
          placeholder="Insira seu Nome"
          placeholderTextColor={"#6A6A6A"}
        ></TextInput>

        <TextInput
          style={styles.inputs}
          placeholder="Insira seu CPF"
          placeholderTextColor={"#6A6A6A"}
        ></TextInput>

        <TextInput
          style={styles.inputs}
          placeholder="Insira seu Email"
          placeholderTextColor={"#6A6A6A"}
        ></TextInput>

        <TextInput
          style={styles.inputs}
          secureTextEntry
          placeholder="Defina sua senha"
          placeholderTextColor={"#6A6A6A"}
        ></TextInput>
        <TextInput
          style={styles.inputs}
          secureTextEntry
          placeholder="Confirme sua senha"
          placeholderTextColor={"#6A6A6A"}
        ></TextInput>
      </View>
      <View style={styles.bts}>
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={check}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>

       {/* Modal de Confirmação */}
       <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Deseja confirmar o cadastro?</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
