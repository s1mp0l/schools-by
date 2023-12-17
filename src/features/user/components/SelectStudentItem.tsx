import {Image, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import CheckSvg from '../../../../assets/icons/check-circle.svg';
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  student: StudentData;
  selected?: boolean;
  onPress?: () => void;
  index: number;
}

export const SelectStudentItem = ({student, selected, onPress, index}: Props) => {
  const name = `${student.user.firstName} ${student.user.lastName}`;
  const className = `${student.nclass.grade} "${student.nclass.letter}"`;
  const images = [
    require('../../../../assets/studentAvatar1.png'),
    require('../../../../assets/studentAvatar.png')
  ];
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}>
          <Image source={images[index]}
                 style={{width: 40, height: 40}}/>
          <CustomText text={name} type={'title'} />
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}>
          <CustomText text={className} type={'subTitle'} />
          <View style={{
            width: 40,
            height: 40,
            borderColor: CustomColors.baseGray,
            borderRadius: 10,
            borderWidth: 1,
            padding: 5
          }}>
            {selected ? <CheckSvg width={30} height={30}/> : <></>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};