import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import styled from "styled-components/native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.login_container}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>Bem-Vindo(a)!</Text>
        </View>

        <Line />

        <View style={styles.email_password}>
          <Text style={{ fontSize: 20 }}>E-mail</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderBottomWidth: 1,
              borderRadius: 10,
              marginTop: 10,
            }}
          />

          <Text style={{ fontSize: 20, marginTop: 20 }}>Senha</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderBottomWidth: 1,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Text style={{ fontSize: 20 }}>LOGIN</Text>
          </View>

          <View style={styles.button}>
            <Text style={{ fontSize: 20 }}>CADASTRAR</Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18, color: "blue" }}>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  login_container: {
    height: "50%",
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginTop: 100,
    flexDirection: "column",
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
    backgroundColor: "red",
  },
});

const Line = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

/*
Q: How can I make the border of the input be only the bottom?
A: Y

*/
