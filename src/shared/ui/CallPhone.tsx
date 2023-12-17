import {ColorValue, TextStyle, TouchableOpacity, ViewStyle} from "react-native";
import {callNumber} from "../lib/utils";
import {CustomText} from "./CustomText";
import {CustomColors} from "../lib/constants";

interface Props {
  phoneNumber: string;
  styles?: TextStyle;
  color?: ColorValue;
  textType?: 'main' | 'title' | 'subTitle' | 'paragraph' | 'small';
}

export const CallPhone = ({phoneNumber, styles, color, textType}: Props) => {
  return (
    <TouchableOpacity onPress={() => callNumber(phoneNumber)} style={{paddingVertical: 5}}>
      <CustomText text={phoneNumber} type={textType || 'paragraph'} color={color || CustomColors.darkGray} styles={styles}/>
    </TouchableOpacity>
  );
};