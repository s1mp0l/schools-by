import React from 'react';
import {IconButton} from "../../../shared/ui/IconButton";
import AdminsSvg from "../../../../assets/icons/users.svg";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";
import TeachersSvg from "../../../../assets/icons/teachers.svg";
import SchoolSvg from "../../../../assets/icons/home.svg";
import {View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {ProfileStackParamList} from "../../../processes/profile/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  'Home'
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

const SchoolButtonsProfile = ({navigation}: Props) => {
  return (
    <View style={{gap: 15}}>
      <IconButton onPress={() => navigation.navigate('AdministrationPage')}>
        <AdminsSvg width={30} height={30}/>
        <CustomText text={'Администрация'} type={'subTitle'} color={CustomColors.darkGray}/>
      </IconButton>
      <IconButton onPress={() => navigation.navigate('TeachersPage')}>
        <TeachersSvg width={30} height={30}/>
        <CustomText text={'Учительская'} type={'subTitle'} color={CustomColors.darkGray}/>
      </IconButton>
      <IconButton onPress={() => navigation.navigate('SchoolInfoPage')}>
        <SchoolSvg width={30} height={30}/>
        <CustomText text={'ГУО “Гимназия имени Я. Купалы”'} type={'subTitle'} color={CustomColors.darkGray}/>
      </IconButton>
    </View>
  );
};

export default SchoolButtonsProfile;