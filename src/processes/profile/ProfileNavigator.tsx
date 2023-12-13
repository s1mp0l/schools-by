import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {User} from "../../features/user/User";
import {NoteList} from "../../entities/notes/NoteList";
import {navigatorScreenOptions} from "../../shared/lib/constants";

export type ProfileStackParamList = {
  Home: undefined,
  Profile: undefined,
  UserNotes: undefined
};

const ProfileStack = createNativeStackNavigator();

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
    </ProfileStack.Navigator>
  );
};