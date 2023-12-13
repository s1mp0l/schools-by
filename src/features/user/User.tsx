import {useEffect} from "react";
import {ActivityIndicator, Image, StyleSheet, View} from "react-native";
import {RootState} from "../../app/store";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {StackNavigationProp} from "@react-navigation/stack";
import {IconButton} from "../../shared/ui/IconButton";
import NotesSvg from "../../../assets/icons/notes.svg";
import SettingsSvg from '../../../assets/icons/settings.svg'
import {userTypeNameMap} from "./lib/constants";
import {CustomText} from "../../shared/ui/CustomText";
import {CustomColors} from "../../shared/lib/constants";
import {ProfileStackParamList} from "../../processes/profile/ProfileNavigator";

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  'Profile'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const User = ({navigation}: Props) => {
  const {data, loading} = useAppSelector((state: RootState) => state.user);

  const user = data.user;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => navigation.navigate('UserNotes')}>
          <NotesSvg width={20} height={20}/>
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
          </View>
        </View>
        <View style={styles.textContainer}>
          <CustomText text={`${user.firstName} ${user.lastName}`} type={'main'} color={'white'} />
          <CustomText text={user.phoneNumber} type={'paragraph'} color={'white'} />
          <CustomText text={userTypeNameMap.get(user.userType) ?? ''} type={'paragraph'} color={'white'} />
        </View>
      </View>
      <View>
        <CustomText text={'Школа'} type={'main'} />
        <View>
          <IconButton>
            <CustomText text={'ГУО “Гимназия имени Я. Купалы”'} type={'title'} />
          </IconButton>
          <IconButton>
            <CustomText text={'Администрация'} type={'title'} />
          </IconButton>
          <IconButton>
            <CustomText text={'Учительская'} type={'title'} />
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