import {ColorValue, StyleSheet, Text, View} from "react-native";
import {CustomColors} from "../lib/constants";
import {MarkCircle} from "./MarkCircle";

interface Props {
  mark: number;
  size: number;
  text: string;
  color?: ColorValue | undefined;
}

export const MarkCircleWithText = ({mark, size, text, color}: Props) => {
  return (
    <View style={{
      ...styles.container,
      gap: size / 10
    }}>
      <MarkCircle mark={mark} size={size} color={color}/>
      <Text style = {{
        ...styles.text,
        fontSize: Math.floor(size / 3)
      }}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: CustomColors.darkGray
  }
})