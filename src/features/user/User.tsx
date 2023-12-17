import {useEffect} from "react";
import {ActivityIndicator, Image, ScrollView, StyleSheet, View} from "react-native";
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
import SchoolButtonsProfile from "./components/SchoolButtonsProfile";
import {SelectStudent} from "./components/SelectStudent";


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
  const {
    data,
    parentData,
    loading,
    isParent,
  } = useAppSelector((state: RootState) => state.user);

  const user = isParent ? parentData.user : data.user;
  const userType: UserType = user.userType.trim() as UserType;
  const imageSrc: Record<UserType, any> = {
    'teacher': require('../../../assets/teacherAvatar.png'),
    'student': require(`../../../assets/studentAvatar.png`),
    'parent': require(`../../../assets/parentAvatar1.png`)
  }

  const logOut = () => {
    dispatch(setUser({} as UserUnionData));
    (navigation as EntranceScreenNavigationProp).navigate('Auth')
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', gap: 15}}>
          <IconButton onPress={() => (navigation as ProfileScreenNavigationProp).navigate('UserNotes')}>
            <NotesSvg width={30} height={30}/>
          </IconButton>
          <IconButton onPress={() => (navigation as ProfileScreenNavigationProp).navigate('SettingsPage')}>
            <SettingsSvg width={30} height={30}/>
          </IconButton>
        </View>
      )
    });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader}/>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <Image source={imageSrc[userType]} />
          <IconButton onPress={logOut}>
            <LogOutSvg width={30} height={30}/>
          </IconButton>
        </View>
        <View style={styles.textContainer}>
          <CustomText text={`${user?.firstName} ${user?.lastName}`} type={'main'} color={'white'} />
          <CustomText text={user?.phoneNumber} type={'paragraph'} color={'white'} />
          <CustomText text={userTypeNameMap.get(user?.userType) ?? ''} type={'title'} color={'white'} />
        </View>
      </View>
      {isParent ? <View style={{gap: 20, padding: 10}}>
        <CustomText text={'Дети'} type={'main'} />
        <SelectStudent />
      </View> : <></>}
      <View style={{gap: 20, padding: 10}}>
        <CustomText text={'Школа'} type={'main'} />
        <SchoolButtonsProfile navigation={navigation as ProfileScreenNavigationProp} />
      </View>
    </ScrollView>
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