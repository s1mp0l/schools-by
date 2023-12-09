import {Button, Image} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {ProfileStackParamList} from "../../../processes/profile/ProfileNavigator";
import {CustomInputText} from "../../../shared/ui/CustomInputText";
import {PageLayout} from "../../../shared/ui/PageLayout";
import LogoImage from "../../../../assets/DiaryLogoImage.png"

type ProfileNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;

type Props = {
  navigation: ProfileNavigationProp;
};

export const AuthPage = ({ navigation }: Props) => {
  return (
    <PageLayout>
      <Image source={LogoImage} style={{alignSelf: 'center'}}/>
      <CustomInputText label={'Логин'} />
      <CustomInputText label={'Пароль'} />
      <Button title={'Войти'} onPress={() => navigation.navigate('Profile')}/>
    </PageLayout>
  );
};