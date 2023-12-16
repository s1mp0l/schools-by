import {ColorValue, StyleProp, StyleSheet, Text, TextStyle} from "react-native";

interface Props {
  text: string;
  type: 'main' | 'title' | 'subTitle' | 'paragraph' | 'small';
  color?: ColorValue | undefined;
  styles?: TextStyle;
}

export const CustomText = ({text, type, color, styles}: Props) => {
  return (
    <Text style = {{...styles1.commonStyles, ...styles1[type], ...styles, color: color ?? 'black'}}>
      {text}
    </Text>
  );
};

const styles1 = StyleSheet.create({
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