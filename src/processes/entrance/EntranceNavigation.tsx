import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthPage} from "./AuthPage";
import {navigatorScreenOptions} from "../../shared/lib/constants";
import {MainNavigation} from "../../app/MainNavigation";

export type EntranceStackParamList = {
  Auth: undefined,
  App: undefined,
};

const EntranceStack = createNativeStackNavigator<EntranceStackParamList>();

export const EntranceNavigator = () => {
  return (
    <EntranceStack.Navigator
      initialRouteName={'Auth'}
      screenOptions={navigatorScreenOptions}
    >
      <EntranceStack.Screen
        name={'Auth'}
        component={AuthPage}
        options={{
          title: 'Авторизация'
        }}
      />
      <EntranceStack.Screen
        name={"App"}
        component={MainNavigation}
        options={{
          title: 'Приложение',
          headerShown: false
        }}
      />
    </EntranceStack.Navigator>
  );
};