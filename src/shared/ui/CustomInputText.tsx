import {StyleSheet, TextInput, View} from "react-native";
import {CustomText} from "./CustomText";
import {CustomColors} from "../lib/constants";

interface Props {
  label: string;
}

export const CustomInputText = ({label}: Props) => {
  return (
    <View style={styles.container}>
      <CustomText text={label} type={'subTitle'} />
      <TextInput style={styles.textInput}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5
  },
  textInput: {
    backgroundColor: CustomColors.baseGray,
    borderRadius: 20,
    padding: 10
  }
})