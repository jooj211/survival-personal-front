import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import MText from "../components/MText";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "react-native-vector-icons";
import { createNativeWrapper } from "react-native-gesture-handler";

export default function Disciplina() {
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
      />
      <MaterialIcons
        name="arrow-forward"
        size={30}
        color="white"
        style={{
          marginBottom: -30,
          zIndex: 1,
          position: "absolute",
          right: 20,
          top: 20,
        }}
      />
      <View style={styles.events_container}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 25, color: "white", fontFamily: "Montserrat" }}
          >
            Teoria dos Grafos
          </Text>
        </View>

        <Line />

        <View style={styles.container_title}>
          <Text
            style={{ fontSize: 25, color: "white", fontFamily: "Montserrat" }}
          >
            Próximos Eventos
          </Text>

          <View style={styles.schedules}>
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
                      <Text style={styles.event_info}>
                        Álgebra Linear - 30pt
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.schedule_event, { marginTop: -5 }]}>
                    <View
                      style={[
                        styles.event_container,
                        { backgroundColor: "darkgreen" },
                      ]}
                    >
                      <Text style={styles.event_title}>TVC 1</Text>
                      <Text style={styles.event_info}>Cálculo III - 20pt</Text>
                    </View>

                    <MaterialIcons
                      name="arrow-downward"
                      size={30}
                      color="white"
                      style={{
                        margin: 30,
                        zIndex: 1,
                        position: "absolute",
                        right: 35,
                        top: 25,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Line />
        <View style={styles.grade}>
          <Text
            style={{ fontSize: 25, color: "white", fontFamily: "Montserrat" }}
          >
            Nota
          </Text>

          <View style={[styles.image_container, { alignSelf: "center" }]}>
            <Image
              style={[styles.graph, { borderRadius: 50 }]}
              source={require("../assets/images/grafico.png")}
            />

            <Text style={{ width: "300px", color: "white" }}>
              Seu rendimento é de
              <span style={{ fontWeight: "bolder" }}> 82.3%</span>
              <br />
              ainda falta <span style={{ fontWeight: "bolder" }}>
                71.4%
              </span>{" "}
              para a <br />
              aprovação
            </Text>

            <Text style={{ width: "300px", color: "white", marginTop: 25 }}>
              Faltas: 3 (9.99%)
              <br />
              Reprova com <span style={{ fontWeight: "bolder" }}>25%</span> de
              infrequência
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

  graph: {
    width: 200,
    height: 200,
  },

  grade: {
    marginBottom: 75,
  },

  control_buttons: {
    flexDirection: "row",
    width: "100vw",
    height: "10vh",
    position: "fixed",
    bottom: 0,
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#121212",
  },

  image_container: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    flexDirection: "column",
    fontFamily: "Montserrat",
    zIndex: 1,
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
    height: "50%",
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
    height: "60%",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  event_container: {
    flexDirection: "column",
    height: "50px",
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
    fontSize: 13,
    color: "white",
    fontFamily: "Montserrat",
    marginTop: 3,
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

  events_container: {
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

/* 
Q: I need to use a plus sign in material icons. what is the name of the class, if theres one
A: The cla
*/
