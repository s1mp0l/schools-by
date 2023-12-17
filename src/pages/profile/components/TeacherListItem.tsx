import {Image, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  name: string;
  status: string;
  imageSrc?: string;
}

export const TeacherListItem = ({name, status}:Props) => {
  return (
    <View style={{
      flexDirection: 'row',
      gap: 15,
      paddingVertical: 10,
      paddingHorizontal: 10
    }}>
      <Image source={require('../../../../assets/teacherAvatar.png')} style={{width: 40, height: 40}}/>
      <View style={{paddingRight: 40}}>
        <CustomText text={name} type={'title'} />
        <CustomText text={status} type={'subTitle'} color={CustomColors.darkGray}/>
      </View>
    </View>
  );
};