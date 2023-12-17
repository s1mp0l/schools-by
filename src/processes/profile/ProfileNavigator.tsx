import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {User} from "../../features/user/User";
import {NoteList} from "../../entities/notes/NoteList";
import {navigatorScreenOptions} from "../../shared/lib/constants";
import {TeachersPage} from "../../pages/profile/screens/TeachersPage";
import {AdministrationPage} from "../../pages/profile/screens/AdministrationPage";
import {SchoolInfoPage} from "../../pages/profile/screens/SchoolInfoPage";
import {SettingsPage} from "../../pages/profile/screens/SettingsPage";

export type ProfileStackParamList = {
  Home: undefined,
  UserNotes: undefined,
  TeachersPage: undefined,
  AdministrationPage: undefined,
  SchoolInfoPage: undefined,
  SettingsPage: undefined
};

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={navigatorScreenOptions}>
      <ProfileStack.Screen
        name={'Home'}
        component={User}
        options={{
          title: 'Профиль',
        }}
      />
      <ProfileStack.Screen
        name={"UserNotes"}
        component={NoteList}
        options={{
          title: 'Уведомления'
        }}/>
      <ProfileStack.Screen
        name={"TeachersPage"}
        component={TeachersPage}
        options={{
          title: 'Учительская'
        }}/>
      <ProfileStack.Screen
        name={"AdministrationPage"}
        component={AdministrationPage}
        options={{
          title: 'Администрация'
        }}/>
      <ProfileStack.Screen
        name={"SchoolInfoPage"}
        component={SchoolInfoPage}
        options={{
          title: 'Школа'
        }}/>
      <ProfileStack.Screen
        name={"SettingsPage"}
        component={SettingsPage}
        options={{
          title: 'Настройки'
        }}/>
    </ProfileStack.Navigator>
  );
};