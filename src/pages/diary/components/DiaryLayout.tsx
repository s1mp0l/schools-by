import {View} from "react-native";
import {ReactNode} from "react";

interface Props {
  children: ReactNode,
}

export const DiaryLayout = ({children}: Props) => {
  return (
    <View style={{flex: 1}}>
      {children}
    </View>
  );
};