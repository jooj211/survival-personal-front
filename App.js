import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Welcome from "./screens/Welcome";
import Disciplina from "./screens/Disciplina";
import Adicionar from "./screens/Adicionar";
import Evento from "./screens/Evento";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Disciplina"
          component={Disciplina}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Adicionar"
          component={Adicionar}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="Evento"
          component={Evento}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },

  html: {
    backgroundColor: "#121212",
  },
});
