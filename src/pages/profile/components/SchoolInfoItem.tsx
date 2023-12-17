import {View} from "react-native";
import {ReactNode} from "react";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";
import {CallPhone} from "../../../shared/ui/CallPhone";

interface Props {
  children: ReactNode;
  title: string;
  text: string;
  phoneTitle?: boolean;
}

export const SchoolInfoItem = ({children, title, text, phoneTitle}: Props) => {
  return (
    <View style={{
      flexDirection: 'row',
      gap: 20,
    }}>
      <View style={{justifyContent: 'center'}}>{children}</View>
      <View style={{paddingRight: 30}}>
        {phoneTitle ? <CallPhone phoneNumber={title} textType={'subTitle'} color={CustomColors.primary}/> :
        <CustomText text={title} type={'subTitle'} color={CustomColors.primary}/>}
        <CustomText text={text} type={'subTitle'} color={CustomColors.darkGray}/>
      </View>
    </View>
  );
};