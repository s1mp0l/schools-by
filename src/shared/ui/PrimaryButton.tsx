import {ReactNode} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity, ViewStyle
} from "react-native";
import {CustomColors} from "../lib/constants";

interface Props {
  children: ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  styles?: ViewStyle;
}

export const PrimaryButton = ({ children, onPress, styles }: Props) => {
  return (
    <TouchableOpacity onPress={onPress ?? (()=>{})} style={{...styles1?.iconBtn, ...styles}}>
      {children}
    </TouchableOpacity>
  );
};

const styles1 = StyleSheet.create({
  iconBtn: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: CustomColors.primary,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
})