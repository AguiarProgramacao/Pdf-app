import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Print from "expo-print";
import { Asset } from "expo-asset";

export default function PFPropostaScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    estabelecimento: "",
    endereco: "",
    servico: "",
    descricao: "",
    valor: "",
    parcelas: "",
    valorCartao: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = async () => {
    const bgImage = Asset.fromModule(require("../../assets/bg-pf.png")).uri;

    const html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 0;
              margin: 0;
              background-image: url(${bgImage});
              background-size: cover;
              background-repeat: no-repeat;
              color: #000;
            }
            .container {
              padding: 20px;
              border-radius: 10px;
            }
            .title {
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 20px;
              margin-top: 100px; 
            }
            .field {
              margin-bottom: 10px;
            }
            .field label {
              font-weight: bold;
            }
            .field span {
              display: block;
              margin-top: 5px;
              font-size: 16px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="title">Proposta de Serviço</div>
            <div class="field">
              <label>Nome do Estabelecimento:</label>
              <span>${formData.estabelecimento}</span>
            </div>
            <div class="field">
              <label>Endereço:</label>
              <span>${formData.endereco}</span>
            </div>
            <div class="field">
              <label>Serviço:</label>
              <span>${formData.servico}</span>
            </div>
            <div class="field">
              <label>Descrição do Serviço:</label>
              <span>${formData.descricao}</span>
            </div>
            <div class="field">
              <label>Valor:</label>
              <span>${formData.valor}</span>
            </div>
            <div class="field">
              <label>Quantidade de Parcelas:</label>
              <span>${formData.parcelas}</span>
            </div>
            <div class="field">
              <label>Valor no Cartão:</label>
              <span>${formData.valorCartao}</span>
            </div>
          </div>
        </body>
      </html>
    `;

    await Print.printAsync({ html });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>P&F Proposta</Text>
      </View>
      <ScrollView>
        {[
          { placeholder: "Nome do Estabelecimento", key: "estabelecimento" },
          { placeholder: "Endereço", key: "endereco" },
          { placeholder: "Serviço", key: "servico" },
          { placeholder: "Descrição do Serviço", key: "descricao" },
          { placeholder: "Valor", key: "valor" },
          { placeholder: "Quantidade Parcela", key: "parcelas" },
          { placeholder: "Valor no Cartão", key: "valorCartao" },
        ].map((field) => (
          <TextInput
            key={field.key}
            style={styles.input}
            placeholder={field.placeholder}
            placeholderTextColor="#FFF"
            onChangeText={(value) => handleInputChange(field.key, value)}
          />
        ))}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonPDF} onPress={generatePDF}>
            <FontAwesome5 name="file-pdf" size={18} color="#FFF" />
            <Text style={styles.textButton}>Gerar PDF</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

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
    marginLeft: 110
  },
  header: {
    height: 50,
    flexDirection: "row",
  },
})