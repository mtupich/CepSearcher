import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'
import Api from './src/services/api'

export default function App() {
  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")

  async function buscarCep() {
    if(cep == "") {
      Alert.alert("Cep inválido!")
      setCep("")
    }

    try {
      const response = await Api.get(`/${cep}/json/`);
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setCidade(response.data.localidade)
      setEstado(response.data.uf)
    } catch(error) {
      console.log("ERRO" + error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <View style={styles.inputButtonArea}>
        <TextInput
          style={styles.inputCustom}
          value={cep}
          onChangeText={ (texto) => setCep(texto) }
          placeholder='CEP'
        />

        <TouchableOpacity style={[styles.button]} onPress={buscarCep}>
          <Text style={styles.buttonSaveText}>Buscar</Text> 
        </TouchableOpacity> 
      </View> 

      <TextInput
        style={styles.input}
        value={logradouro}
        onChangeText={ (texto) => setLogradouro(texto) }
        placeholder='LOGRADOURO'
      />

      <TextInput
        style={styles.input}
        value={bairro}
        onChangeText={ (texto) => setBairro(texto) }
        placeholder='BAIRRO'
      />

      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={ (texto) => setCidade(texto) }
        placeholder='CIDADE'
      />

      <TextInput
        style={styles.input}
        value={estado}
        onChangeText={ (texto) => setEstado(texto) }
        placeholder='ESTADO'
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
  },
  inputCustom: {
    width: "70%",
    height: 40,
    margin: 10,
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
  },
  header: {
    backgroundColor: "#3E8D8D",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    color: "#FFF",
  },
  button:{
    backgroundColor: "red",
    padding: 12,
    marginLeft: 10,
    borderRadius: 8,
    width: "20%",
  },
  inputButtonArea:{
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});



