import {ColorValue, StyleSheet, Text} from "react-native";

interface Props {
  text: string;
  type: 'main' | 'title' | 'subTitle' | 'paragraph' | 'small'
  color?: ColorValue | undefined
}

export const CustomText = ({text, type, color}: Props) => {
  return (
    <Text style = {{...styles.commonStyles, ...styles[type], color: color ?? 'black'}}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  commonStyles: {
    // fontFamily: 'Montserrat'
  },
  main: {
    fontSize: 24,
    fontWeight: "700"
  },
  title: {
    fontSize: 18,
    fontWeight: "600"
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600"
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "400"
  },
  small: {
    fontSize: 12,
    fontWeight: "300"
  }
});