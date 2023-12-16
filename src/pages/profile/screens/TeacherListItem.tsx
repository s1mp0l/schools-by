import {Image, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";

interface Props {
  name: string;
  status: string;
  imageSrc?: string;
}

export const TeacherListItem = ({name, status, imageSrc}:Props) => {
  return (
    <View style={{
      flexDirection: 'row',
      gap: 10,
      paddingVertical: 10,
      paddingHorizontal: 10
    }}>
      <Image source={require('../../../../assets/teacherAvatar.png')} style={{width: 40, height: 40}}/>
      <View>
        <CustomText text={name} type={'subTitle'} />
        <CustomText text={status} type={'paragraph'} />
      </View>
    </View>
  );
};