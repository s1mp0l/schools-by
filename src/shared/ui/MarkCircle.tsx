import {ColorValue, StyleSheet, Text, View} from "react-native";
import {CustomColors} from "../lib/constants";

interface Props {
  mark: number;
  color?: ColorValue | undefined;
  size: number;
  isRectangle?: boolean;
  isAddMark?: boolean;
}

export const MarkCircle = ({mark, color, size, isRectangle, isAddMark}: Props) => {
  const circleColor = mark > 0 ? mark >= 4 ? mark >= 7 ?
    CustomColors.success : CustomColors.warn : CustomColors.error : CustomColors.baseGray;

  const valueString = isAddMark ? '+' : (mark === 0 ? '' : mark.toString());
  return (
    <View style={{
      ...styles.circle,
      borderRadius: isRectangle ? 0 : 100,
      backgroundColor: color ?? circleColor,
      width: size,
      height: size
    }}>
      <Text style = {{
        color: 'white',
        fontSize: Math.floor(size / 2)
      }}>
        {valueString}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    justifyContent: "center",
    alignItems: "center"
  },
})