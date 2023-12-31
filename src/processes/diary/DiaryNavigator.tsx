import {navigatorScreenOptions} from "../../shared/lib/constants";
import {DiaryMonthPage} from "../../pages/diary/screens/DiaryMonthPage";
import {DiaryWeekPage} from "../../pages/diary/screens/DiaryWeekPage";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SwitchNavigatorBar} from "../../entities/switch-navigator/SwitchNavigatorBar";
import {DiaryDayNavigator} from "./DiaryDayNavigator";

export type DiaryTabParamList = {
  Day: undefined,
  Week: undefined,
  Month: undefined
};

const DiaryTab = createBottomTabNavigator<DiaryTabParamList>();

export const DiaryNavigator = () => {
  return (
    <DiaryTab.Navigator
      tabBar={(props) => <SwitchNavigatorBar {...props}/>}
      screenOptions={navigatorScreenOptions}
    >
      <DiaryTab.Screen
        name={'Day'}
        component={DiaryDayNavigator}
        options={{title: 'День', headerShown: false}}
      />
      <DiaryTab.Screen
        name={'Week'}
        component={DiaryWeekPage}
        options={{title: 'Неделя'}}
      />
      <DiaryTab.Screen
        name={'Month'}
        component={DiaryMonthPage}
        options={{title: 'Месяц'}}
      />
    </DiaryTab.Navigator>
  );
};