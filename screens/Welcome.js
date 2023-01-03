import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import MText from "../components/MText";
import styled from "styled-components/native";

export default function Welcome() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image
          style={styles.icon}
          source={require("../assets/images/icon.png")}
        />
      </View>
      <View style={styles.welcome_container}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 25, color: "white", fontFamily: "Montserrat" }}
          >
            Bem vindo, User
          </Text>
        </View>

        <Line />

        <View style={styles.schedules}>
          <Text style={styles.title}>Nessa Semana</Text>

          <View style={styles.schedule}>
            <View style={styles.schedule_line}>
              <View style={styles.date}>
                <Text style={styles.date_month}>Setembro</Text>
                <Text style={styles.date_day}>30</Text>
              </View>

              <View style={styles.schedule_events}>
                <View style={styles.schedule_event}>
                  <View style={styles.event_container}>
                    <Text style={styles.event_title}>TVC 1</Text>
                    <Text style={styles.event_info}>Álgebra Linear - 30pt</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.schedule_line}>
              <View style={styles.date}>
                <Text style={styles.date_month}>Outubro</Text>
                <Text style={styles.date_day}>02</Text>
              </View>

              <View style={styles.schedule_events}>
                <View style={styles.schedule_event}>
                  <View
                    style={[
                      styles.event_container,
                      { backgroundColor: "blue" },
                    ]}
                  >
                    <Text style={styles.event_title}>Reunião Bolsa</Text>
                    <Text style={styles.event_info}>Code Sênior</Text>
                  </View>
                </View>
                <View style={styles.schedule_event}>
                  <View
                    style={[
                      styles.event_container,
                      { backgroundColor: "green" },
                    ]}
                  >
                    <Text style={styles.event_title}>Questionário 1</Text>
                    <Text style={styles.event_info}>
                      Info e Sociedade - 3pt
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <Line style={{ marginTop: 60 }} />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="Calendário"
              color="grey"
              onPress={() => alert("Calendário")}
              style={{ borderRadius: 25 }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Estatísticas"
              color="grey"
              onPress={() => alert("Estatísticas")}
              style={{ borderRadius: 25 }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Grade"
              color="grey"
              onPress={() => alert("Grade de Horários")}
              style={{ borderRadius: 25 }}
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Gerenciamento"
              color="grey"
              onPress={() => alert("Gerenciamento")}
              style={{ borderRadius: 25 }}
            />
          </View>
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

  icon: {
    width: 100,
    height: 100,
  },

  image_container: {
    height: "100px",
    width: "100px",
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    flexDirection: "column",
    fontFamily: "Montserrat",
    position: "absolute",
    zIndex: 1,
    top: 20,
  },

  welcome_container: {
    height: "80%",
    width: "100%",
    backgroundColor: "#121212",
    borderRadius: 20,
    padding: 20,
    margin: 0,
    flexDirection: "column",
    fontFamily: "Montserrat",
    position: "absolute",
    bottom: 0,
  },

  schedules: {
    flexDirection: "column",
    height: "50%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },

  schedule: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },

  schedule_events: {
    flexDirection: "column",
    width: "40%",
    justifyContent: "space-between",
  },

  schedule_line: {
    flexDirection: "row",
    height: "30%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
  },

  date: {
    flexDirection: "column",
    height: "100%",
    width: "40%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "left",
  },

  date_month: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat",
    marginTop: 0,
    marginBottom: 0,
  },

  date_day: {
    fontSize: 35,
    color: "white",
    fontFamily: "Montserrat",
    marginTop: 0,
    marginBottom: 0,
  },

  schedule_event: {
    flexDirection: "column",
    height: "80%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  event_container: {
    flexDirection: "column",
    height: "100%",
    width: "180px",
    marginTop: 0,
    marginBottom: 0,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 30,
  },

  event_title: {
    fontSize: 15,
    color: "white",
    fontFamily: "Montserrat",
    marginTop: 0,
    marginBottom: 0,
  },

  event_info: {
    fontSize: 15,
    color: "white",
    fontFamily: "Montserrat",
    marginTop: 10,
    marginBottom: 0,
  },

  title: {
    fontSize: 25,
    color: "white",
    fontFamily: "Montserrat",
    marginTop: 0,
    marginBottom: 0,
  },

  buttons: {
    /* make the buttons be on two rows and two columns */
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 0,
  },

  button: {
    padding: 10,
    width: "50%",
  },
});

const Line = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
