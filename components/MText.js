import styled from "styled-components/native";
import { useFonts } from "expo-font";

export default function MText(props) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text {...props} style={[{ fontFamily: "Montserrat" }, props.style]} />
  );
}
