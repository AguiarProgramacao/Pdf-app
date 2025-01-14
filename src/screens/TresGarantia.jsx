import { KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TresGarantiaScreen() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <FontAwesome5 name="arrow-left" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>3 Irmãos Garantia</Text>
      </View>
      <ScrollView>
        <TextInput
          style={styles.input}
          placeholder="Nome do Estabelecimento"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="CPF ou CNPJ"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Representante"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="Serviço"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="Valor"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="Tempo de garantia"
          placeholderTextColor="#FFF"

        />
        <TextInput
          style={styles.input}
          placeholder="Descrição do Serviço (separe por vírgula)"
          placeholderTextColor="#FFF"

        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonSignature}>
            <FontAwesome5 name="signature" size={18} color="#FFF" />
            <Text style={styles.textButton}>Sua Assinatura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPDF}>
            <FontAwesome5 name="file-pdf" size={18} color="#FFF" />
            <Text style={styles.textButton}>Gerar PDF</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161F30",
    paddingHorizontal: 15,
    paddingTop: 15
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    marginBottom: 10,
    color: "#FFF",
    fontSize: 16
  },
  buttonsContainer: {
    marginTop: 15
  },
  buttonSignature: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#84B026",
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonPDF: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#07C7F2",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 95
  },
  header: {
    height: 50,
    flexDirection: "row",
  },
})