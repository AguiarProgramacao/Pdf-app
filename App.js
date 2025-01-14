import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import TresGarantiaScreen from "./src/screens/TresGarantia";
import TresPropostaScreen from "./src/screens/TresPropostaScreen";
import PFGarantiaScreen from "./src/screens/PFGarantiaScreen";
import PFPropostaScreen from "./src/screens/PFPropostaScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TresGarantia" component={TresGarantiaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TresProposta" component={TresPropostaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PFGarantia" component={PFGarantiaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PFProposta" component={PFPropostaScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}