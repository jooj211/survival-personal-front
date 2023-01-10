import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "react-router-native";

const ControlButtons = () => {
  const navigation = useNavigation();

  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default ControlButtons;
