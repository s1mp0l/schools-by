import {StyleSheet, TextInput, View} from "react-native";
import {CustomText} from "./CustomText";
import {CustomColors} from "../lib/constants";

interface Props {
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const CustomInputText = ({label, onChangeText, placeholder}: Props) => {
  return (
    <View style={styles.container}>
      <CustomText text={label} type={'subTitle'} />
      <TextInput
        defaultValue={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        autoCapitalize={'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5
  },
  textInput: {
    backgroundColor: CustomColors.lightGray,
    borderWidth: 1,
    borderColor: CustomColors.baseGray,
    borderRadius: 20,
    padding: 10
  }
})