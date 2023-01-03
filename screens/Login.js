import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import MText from "../components/MText";
import styled from "styled-components/native";

export default function Login() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <View style={styles.login_container}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 30, color: "white", fontFamily: "Montserrat" }}
          >
            Bem-Vindo(a)!
          </Text>
        </View>

        <Line />

        <View style={styles.email_password}>
          <Text
            style={{ fontSize: 20, color: "white", fontFamily: "Montserrat" }}
          >
            E-mail
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 10,
              marginTop: 10,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            Senha
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 10,
              marginTop: 10,
            }}
            secureTextEntry={true}
            tintColor="white"
          />
        </View>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: "Montserrat",
                marginBottom: 0,
              }}
              onClick={() => navigation.navigate("Welcome")}
            >
              LOGIN
            </Text>
          </View>

          <View style={styles.button}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: "Montserrat",
              }}
              onClick={() => navigation.navigate("Cadastro")}
            >
              CADASTRAR
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, color: "blue", fontFamily: "Montserrat" }}
          >
            Professor? Cadastre aqui
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(27, 27, 27)",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontFamily: "Montserrat",
  },

  logo: {
    width: 200,
    height: 120,
  },

  login_container: {
    height: "60%",
    width: "100%",
    backgroundColor: "#121212",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginTop: 20,
    flexDirection: "column",
    fontFamily: "Montserrat",
  },

  email_password: {
    flexDirection: "column",
    height: "50%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },

  buttons: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: "40%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    cursor: "pointer",
  },
});

const Line = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
