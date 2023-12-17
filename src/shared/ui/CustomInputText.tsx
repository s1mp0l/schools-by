import {StyleSheet, TextInput, View} from "react-native";
import {CustomText} from "./CustomText";
import {CustomColors} from "../lib/constants";

interface Props {
  label: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  textContentType?: 'password' | 'username';
  hidePassword?: boolean;
}

export const CustomInputText = ({label, onChangeText, placeholder, textContentType, hidePassword}: Props) => {
  return (
    <View style={styles.container}>
      <CustomText text={label} type={'subTitle'} />
      <TextInput
        secureTextEntry={hidePassword}
        textContentType={textContentType}
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