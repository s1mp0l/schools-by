import {View} from "react-native";
import {ReactNode} from "react";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  children: ReactNode;
  title: string;
  text: string;
}

export const SchoolInfoItem = ({children, title, text}: Props) => {
  return (
    <View style={{
      flexDirection: 'row',
      gap: 20,
    }}>
      <View style={{justifyContent: 'center'}}>{children}</View>
      <View style={{paddingRight: 30}}>
        <CustomText text={title} type={'subTitle'} color={CustomColors.primary}/>
        <CustomText text={text} type={'subTitle'} color={CustomColors.darkGray}/>
      </View>
    </View>
  );
};