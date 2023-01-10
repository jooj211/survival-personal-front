import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import MText from "../components/MText";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "react-native-vector-icons";
import CustomDropdown from "../components/CustomDropdown";

export default function Adicionar() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        size={30}
        color="white"
        style={{
          marginBottom: -30,
          zIndex: 1,
          position: "absolute",
          left: 20,
          top: 20,
        }}
        onClick={() => navigation.navigate("Login")}
      />
      <View style={styles.signup_container}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 30, color: "white", fontFamily: "Montserrat" }}
          >
            Adicionar
          </Text>
        </View>

        <Line />

        <View style={styles.email_password}>
          <Text
            style={{ fontSize: 20, color: "white", fontFamily: "Montserrat" }}
          >
            Tipo
          </Text>
          <CustomDropdown />

          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            Nome
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
              marginTop: 10,
            }}
          />
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            Código
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
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
            Sala
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
              marginTop: 10,
            }}
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
            Professor
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              color: "white",
              padding: 5,
              borderBottomWidth: 1,
              borderRadius: 0,
              marginTop: 10,
            }}
            tintColor="white"
          />

          <View style={styles.buttons}>
            <View style={styles.button}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontFamily: "Montserrat",
                }}
                onClick={() => navigation.navigate("Welcome")}
              >
                ADICIONAR
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.control_buttons}>
          <MaterialIcons
            name="add"
            size={30}
            color="white"
            style={{
              zIndex: 1,
              height: "100%",
              width: "100%",
              paddingTop: 18,
              borderWidth: 1,
            }}
          />
          <MaterialIcons
            name="home"
            size={30}
            color="white"
            style={{
              zIndex: 1,
              height: "100%",
              width: "100%",
              paddingTop: 18,
              borderWidth: 1,
            }}
            onClick={() => navigation.navigate("Welcome")}
          />
          <MaterialIcons
            name="calendar-today"
            size={30}
            color="white"
            style={{
              zIndex: 1,
              height: "100%",
              width: "100%",
              paddingTop: 18,
              borderWidth: 1,
            }}
          />
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

  control_buttons: {
    flexDirection: "row",
    width: "100vw",
    height: "10vh",
    position: "fixed",
    bottom: 0,
    marginLeft: -20,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#121212",
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
    width: "50%",
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
