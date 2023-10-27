import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder='CEP'
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder='LOGRADOURO'
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder='BAIRRO'
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder='CIDADE'
      />

      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder='ESTADO'
      />

      <TouchableOpacity style={[styles.button]}>
        <Text style={styles.buttonSaveText}>Buscar</Text>
      </TouchableOpacity> 

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
    padding: 14,
    marginLeft: 10,
    borderRadius: 8,
    width: "20%",
  },
});



