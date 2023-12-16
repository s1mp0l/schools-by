import {navigatorScreenOptions} from "../../shared/lib/constants";
import {ProgressYearPage} from "../../pages/progress/screens/ProgressYearPage";
import {SwitchNavigatorBar} from "../../entities/switch-navigator/SwitchNavigatorBar";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ProgressCurrentNavigator, ProgressCurrentParamList} from "./ProgressCurrentNavigator";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {fetchAllStudentMarks} from "../../features/progress/store/progress-thunks";
import {NavigatorScreenParams} from "@react-navigation/native";

export type ProgressTabParamList = {
  Current: NavigatorScreenParams<ProgressCurrentParamList>,
  Year: undefined
};

const ProgressTab = createBottomTabNavigator<ProgressTabParamList>();

export const ProgressNavigator = () => {
  const {data} = useAppSelector(state => state.user);
  const {studentSubjects} = useAppSelector(state => state.progress)
  const studentId = (data as StudentData).id;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (studentId || !studentSubjects.length)
      dispatch(fetchAllStudentMarks(studentId));
  }, [studentId, studentSubjects.length]);
  return (
    <ProgressTab.Navigator
      tabBar={(props) => <SwitchNavigatorBar {...props}/>}
      screenOptions={navigatorScreenOptions}
    >
      <ProgressTab.Screen
        name={'Year'}
        component={ProgressYearPage}
        options={{
          title: 'Итоги'
        }}
      />
      <ProgressTab.Screen
        name={'Current'}
        component={ProgressCurrentNavigator}
        options={{
          title: 'Текущая',
          headerShown: false
        }}
      />
    </ProgressTab.Navigator>
  );
};