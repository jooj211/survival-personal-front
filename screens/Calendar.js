import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { TextInput } from "react-native";
import { Link, Router } from "react-router-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import MText from "../components/MText";
import styled from "styled-components/native";
import { CalendarList, Calendar as Calendario } from "react-native-calendars";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Calendar() {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const vacation = { key: "vacation", color: "red", selectedDotColor: "blue" };
  const massage = { key: "massage", color: "blue", selectedDotColor: "blue" };
  const workout = { key: "workout", color: "green" };

  return (
    <View style={{ height: 600 }}>
      <CalendarList
        markingType={"multi-dot"}
        markedDates={{
          "2017-10-25": {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: "red",
          },
          "2017-10-26": { dots: [massage, workout], disabled: true },
        }}
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
