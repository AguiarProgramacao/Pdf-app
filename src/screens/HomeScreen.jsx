import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const pageTresGarantia = () => {
    navigation.navigate("TresGarantia");
  }
  
  const pageTresProposta = () => {
    navigation.navigate("TresProposta");
  }
  
  const pagePFProposta = () => {
    navigation.navigate("PFProposta");
  }
  
  const pagePFGarantia = () => {
    navigation.navigate("PFGarantia");
  }

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161F30" />
      <Text style={styles.text}>Olá, chefe!!</Text>
      <Text style={styles.text}>Qual vai ser o documento gerado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button3} onPress={pageTresGarantia}>
          <Text style={styles.textButton}>3 Irmãos Garantia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={pageTresProposta}>
          <Text style={styles.textButton}>3 Irmãos Proposta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPF} onPress={pagePFGarantia}>
          <Text style={styles.textButton}>P&F Garantia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPF} onPress={pagePFProposta}>
          <Text style={styles.textButton}>P&F Proposta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonImuni}>
          <Text style={styles.textButton}>ImuniGávea Garantia</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Aguiar Programação</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161F30",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 95
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 30
  },
  button3: {
    width: "100%",
    padding: 15,
    backgroundColor: "#84B026",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 6
  },
  buttonPF: {
    width: "100%",
    padding: 15,
    backgroundColor: "#07C7F2",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderRadius: 6
  },
  buttonImuni: {
    width: "100%",
    padding: 15,
    backgroundColor: "#3D3D3D",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  },
  textButton: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  footer: {
    alignItems: "center",
    marginTop: 130
  }
})