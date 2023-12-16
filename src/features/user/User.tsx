import {useEffect} from "react";
import {ActivityIndicator, Image, StyleSheet, View} from "react-native";
import {RootState} from "../../app/store";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {StackNavigationProp} from "@react-navigation/stack";
import {IconButton} from "../../shared/ui/IconButton";
import NotesSvg from "../../../assets/icons/notes.svg";
import SettingsSvg from '../../../assets/icons/settings.svg';
import LogOutSvg from '../../../assets/icons/log-out.svg';
import {userTypeNameMap} from "./lib/constants";
import {CustomText} from "../../shared/ui/CustomText";
import {CustomColors} from "../../shared/lib/constants";
import {ProfileStackParamList} from "../../processes/profile/ProfileNavigator";
import {EntranceStackParamList} from "../../processes/entrance/EntranceNavigation";
import {setUser} from "./store/user-store";
import TeachersSvg from '../../../assets/icons/teachers.svg';
import SchoolSvg from '../../../assets/icons/home.svg';
import AdminsSvg from '../../../assets/icons/users.svg';


type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  'Home'
>;

type EntranceScreenNavigationProp = StackNavigationProp<
  EntranceStackParamList,
  'Auth'
>;

type Props = {
  navigation: ProfileScreenNavigationProp | EntranceScreenNavigationProp;
};

export const User = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {data, loading} = useAppSelector((state: RootState) => state.user);

  const user = data.user;

  const logOut = () => {
    dispatch(setUser({} as UserUnionData));
    (navigation as EntranceScreenNavigationProp).navigate('Auth')
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={logOut}>
          <LogOutSvg width={20} height={20}/>
        </IconButton>
      )
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader}/>;
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <Image source={require('../../../assets/studentAvatar.png')} />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 10}}>
            <IconButton>
              <SettingsSvg width={30} height={30}/>
            </IconButton>
            <IconButton onPress={() => (navigation as ProfileScreenNavigationProp).navigate('UserNotes')}>
              <NotesSvg width={30} height={30}/>
            </IconButton>
          </View>
        </View>
        <View style={styles.textContainer}>
          <CustomText text={`${user?.firstName} ${user?.lastName}`} type={'main'} color={'white'} />
          <CustomText text={user?.phoneNumber} type={'paragraph'} color={'white'} />
          <CustomText text={userTypeNameMap.get(user?.userType) ?? ''} type={'paragraph'} color={'white'} />
        </View>
      </View>
      <View style={{gap: 20, padding: 10}}>
        <CustomText text={'Школа'} type={'main'} />
        <View style={{gap: 15}}>
          <IconButton>
            <AdminsSvg width={30} height={30}/>
            <CustomText text={'Администрация'} type={'subTitle'} color={CustomColors.darkGray}/>
          </IconButton>
          <IconButton onPress={() => (navigation as ProfileScreenNavigationProp).navigate('TeachersPage')}>
            <TeachersSvg width={30} height={30}/>
            <CustomText text={'Учительская'} type={'subTitle'} color={CustomColors.darkGray}/>
          </IconButton>
          <IconButton>
            <SchoolSvg width={30} height={30}/>
            <CustomText text={'ГУО “Гимназия имени Я. Купалы”'} type={'subTitle'} color={CustomColors.darkGray}/>
          </IconButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    backgroundColor: CustomColors.secondary
  },
  textContainer: {
    gap: 10,
  },
  loader: {}
});