import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import MText from "../components/MText";
import styled from "styled-components/native";

export default function Cadastro() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.signup_container}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 30, color: "white", fontFamily: "Montserrat" }}
          >
            Cadastro
          </Text>
        </View>

        <Line />

        <View style={styles.email_password}>
          <Text
            style={{ fontSize: 20, color: "white", fontFamily: "Montserrat" }}
          >
            Nome
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              opacity: 0.5,
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
              marginTop: 10,
            }}
          />
          <Text
            style={{ marginTop: 20, fontSize: 20, color: "white", fontFamily: "Montserrat" }}
          >
            E-mail
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              opacity: 0.5,
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
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
              opacity: 0.5,
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
              marginTop: 10,
            }}
            secureTextEntry={true}
            tintColor="white"
          />

          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            Confirme sua senha
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              opacity: 0.5,
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
              marginTop: 10,
            }}
            secureTextEntry={true}
            tintColor="white"
          />
        </View>

        <View style={styles.buttons}>

          <View style={styles.button}>
            <Button
              title="              "
              color="transparent"
              onPress={() => this.props.navigation.navigate('Cadastro')}
            />
            <Text
              style={{ fontSize: 18, color: "white", fontFamily: "Montserrat", marginTop: -35 }}
            >
              CONTINUAR
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, color: "blue", fontFamily: "Montserrat" }}
          >
            Já sou cadastrado
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
    padding: 0,
    fontFamily: "Montserrat",
  },

  logo: {
    width: 200,
    height: 120,
  },

  signup_container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#121212",
    borderRadius: 10,
    padding: 20,
    margin: 0,
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
