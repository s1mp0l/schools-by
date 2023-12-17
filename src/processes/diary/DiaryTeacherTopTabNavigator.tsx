import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {ChooseStudentPage} from "../../pages/progress/screens/ChooseStudentPage";
import {DiaryLessonPage} from "../../pages/diary/screens/DiaryLessonPage";
import {DiaryAbsencePage} from "../../pages/diary/screens/DiaryAbsencePage";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchLessonWithStudentMarks} from "../../features/diary/store/diary-thunks";
import {DiaryTeacherMarksStackNavigator} from "./DiaryTeacherMarksNavigator";

export type DiaryTeacherTopTapNavigatorParamList = {
  Lesson: { lesson: LessonWithMark },
  Absence: undefined,
  Marks: undefined
};

const Tab = createMaterialTopTabNavigator<DiaryTeacherTopTapNavigatorParamList>();

export const DiaryTeacherTopTapNavigator = () => {
  const {selectedLessonId} = useAppSelector(state => state.diary)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedLessonId) return;
    dispatch(fetchLessonWithStudentMarks(selectedLessonId));
  }, [selectedLessonId]);

  return (
    <Tab.Navigator
      initialRouteName={'Lesson'}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
    }}>
      <Tab.Screen
        name='Lesson'
        options={{
          title: 'Урок'
        }}
        component={DiaryLessonPage} />
      <Tab.Screen
        name='Marks'
        options={{
          title: 'Оценки'
        }}
        component={DiaryTeacherMarksStackNavigator} />
      <Tab.Screen
        name='Absence'
        options={{
          title: 'Посещаемость'
        }}
        component={DiaryAbsencePage} />
    </Tab.Navigator>
  );
}