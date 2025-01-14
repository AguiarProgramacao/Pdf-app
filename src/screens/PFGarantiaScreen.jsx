import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { PDFDocument, rgb } from "pdf-lib";
import { Asset } from "expo-asset";

export default function PFGarantiaScreen() {
  const navigation = useNavigation();

  const copyImageToFileSystem = async () => {
    try {
      const asset = Asset.fromModule(require("../../assets/PF_Dedetizadora.png"));
      await asset.downloadAsync();

      const destPath = FileSystem.documentDirectory + "PF_Dedetizadora.png";
      const imageData = await FileSystem.readAsStringAsync(asset.localUri, { encoding: FileSystem.EncodingType.Base64 });
      await FileSystem.writeAsStringAsync(destPath, imageData, { encoding: FileSystem.EncodingType.Base64 });
    } catch (error) {
      console.error("Erro ao copiar a imagem:", error);
      Alert.alert("Erro", "Não foi possível preparar a imagem de fundo.");
    }
  };

  useEffect(() => {
    copyImageToFileSystem();
  }, []);

  const returnPage = () => {
    navigation.goBack();
  };

  const generatePDF = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([420, 595]); // A5 size
  
      const bgImageUri = FileSystem.documentDirectory + "PF_Dedetizadora.png";
      const bgImageBase64 = await FileSystem.readAsStringAsync(bgImageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const bgImage = await pdfDoc.embedPng(bgImageBase64);
  
      const { width, height } = page.getSize();
      page.drawImage(bgImage, {
        x: 0,
        y: 0,
        width,
        height,
      });
  
      // Adicionar texto ao PDF
      page.drawText("Nome do Estabelecimento: Nome Exemplo", {
        x: 50,
        y: height - 100,
        size: 10,
        color: rgb(0, 0, 0),
      });
  
      page.drawText("CPF ou CNPJ: 123.456.789-00", {
        x: 50,
        y: height - 120,
        size: 10,
        color: rgb(0, 0, 0),
      });
  
      page.drawText("Descrição do Serviço: Serviço Exemplo", {
        x: 50,
        y: height - 140,
        size: 10,
        color: rgb(0, 0, 0),
      });
  
      // Salvar o PDF no dispositivo
      const pdfBytes = await pdfDoc.save();
      const pdfBase64 = pdfBytes.toString("base64"); // Converte diretamente os bytes para base64
  
      const pdfUri = FileSystem.documentDirectory + "GarantiaServico.pdf";
      await FileSystem.writeAsStringAsync(pdfUri, pdfBase64, {
        encoding: FileSystem.EncodingType.Base64,
      });
  
      // Compartilhar o PDF
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(pdfUri);
      } else {
        Alert.alert("Erro", "Não foi possível compartilhar o PDF.");
      }
    } catch (error) {
      console.error("Erro ao gerar o PDF:", error);
      Alert.alert("Erro", "Erro ao gerar o PDF. Verifique os logs.");
    }
  };  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonBack} onPress={returnPage}>
          <FontAwesome5 name="arrow-left" size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.title}>P&F Garantia</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nome do Estabelecimento" placeholderTextColor="#FFF" />
        <TextInput style={styles.input} placeholder="CPF ou CNPJ" placeholderTextColor="#FFF" />
        <TextInput style={styles.input} placeholder="Descrição do Serviço" placeholderTextColor="#FFF" />
      </View>
      <TouchableOpacity style={styles.buttonPDF} onPress={generatePDF}>
        <FontAwesome5 name="file-pdf" size={18} color="#FFF" />
        <Text style={styles.textButton}>Gerar PDF</Text>
      </TouchableOpacity>
    </View>
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
    marginLeft: 90
  },
  header: {
    height: 50,
    flexDirection: "row",
  },
  buttonBack: {
    width: 40
  }
})