import {navigatorScreenOptions} from "../../shared/lib/constants";
import {ProgressCurrentPage} from "../../pages/progress/screens/ProgressCurrentPage";
import {ProgressYearPage} from "../../pages/progress/screens/ProgressYearPage";
import {SwitchNavigatorBar} from "../../entities/switch-navigator/SwitchNavigatorBar";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export type ProgressStackParamList = {
  Home: undefined,
  Current: undefined,
  Year: undefined
};

const ProgressTab = createBottomTabNavigator<ProgressStackParamList>();

export const ProgressNavigator = () => {
  return (
    <ProgressTab.Navigator
      tabBar={(props) => <SwitchNavigatorBar {...props}/>}
      screenOptions={navigatorScreenOptions}
    >
      <ProgressTab.Screen
        name={'Current'}
        component={ProgressCurrentPage}
        options={{
          title: 'Текущая'
        }}
      />
      <ProgressTab.Screen
        name={'Year'}
        component={ProgressYearPage}
        options={{
          title: 'Итоги'
        }}
      />
    </ProgressTab.Navigator>
  );
};