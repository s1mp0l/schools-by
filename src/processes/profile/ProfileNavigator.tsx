import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {User} from "../../features/user/User";
import {NoteList} from "../../entities/notes/NoteList";
import {navigatorScreenOptions} from "../../shared/lib/constants";
import {TeachersPage} from "../../pages/profile/screens/TeachersPage";

export type ProfileStackParamList = {
  Home: undefined,
  UserNotes: undefined,
  TeachersPage: undefined
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
    </ProfileStack.Navigator>
  );
};