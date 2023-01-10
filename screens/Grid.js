import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import MText from "../components/MText";
import styled from "styled-components/native";
import { Agenda, AgendaList, CalendarList } from "react-native-calendars";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "react-native-vector-icons";

export default function Grid() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const navigator = useNavigation();

  const itens = [];
  const setItens = (itens) => {
    console.log(itens);
  };

  const loadItens = (day) => {
    const items = itens || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          const materias = [
            "Algebra Linear",
            "Cálculo Numérico",
            "Estrutura de Dados",
            "Informática e Sociedade",
          ];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: materias[i]
                ? materias[i] + " " + strTime
                : "Modelagem de Sistemas" + " " + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItens(newItems);
    }, 1000);
  };

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";
    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]}
        onPress={() => navigator.navigate("Welcome")}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  return (
    <View style={{ height: 600 }}>
      <Agenda
        items={itens}
        loadItemsForMonth={loadItens}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        selected={"2017-05-16"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
