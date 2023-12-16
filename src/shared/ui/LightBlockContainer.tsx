import {ReactNode} from "react";
import {View} from "react-native";
import {CustomColors} from "../lib/constants";

interface Props {
  children: ReactNode;
}

export const LightBlockContainer = ({children}: Props) => {
  return (
    <View style={{
      backgroundColor: CustomColors.secondaryLight,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 10,
    }}>
      {children}
    </View>
  );
};