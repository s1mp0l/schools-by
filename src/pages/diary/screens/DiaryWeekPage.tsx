import {ScrollView, View} from "react-native";
import {WeekDay} from "../components/WeekDay";
import {DiaryLayout} from "../components/DiaryLayout";
import {StackNavigationProp} from "@react-navigation/stack";
import {DiaryTabParamList} from "../../../processes/diary/DiaryNavigator";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {setCurrentDay} from "../../../features/diary/store/diary-store";
import {useEffect} from "react";
import {
  fetchClassLessonsForWeek,
  fetchTeacherLessonsForDay,
  fetchTeacherLessonsForWeek
} from "../../../features/diary/store/diary-thunks";
import {customDateToString} from "../../../shared/lib/utils";

type DiaryTabNavigationProp = StackNavigationProp<
  DiaryTabParamList,
  'Week'
>;

interface Props {
  navigation: DiaryTabNavigationProp;
}

export const DiaryWeekPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {currentWeek, weekDaysLessons} = useAppSelector(state => state.diary);

  const {isTeacher, data} = useAppSelector(state => state.user)

  useEffect(() => {
    const dates = currentWeek.map(d => customDateToString(d, 'yyyy-mm-dd'));
    if (isTeacher) {
      const teacherId = (data as TeacherData).id;
      dispatch(fetchTeacherLessonsForWeek({teacherId, dates}))
    } else {
      const classId = (data as StudentData).nclass.id;
      dispatch(fetchClassLessonsForWeek({classId, dates}));
    }
  }, [currentWeek, isTeacher, data]);

  const onWeekDayPressHandler = (dayIndex: number) => {
    dispatch(setCurrentDay(currentWeek[dayIndex]));
    navigation.navigate('Day');
  }

  const weekDaysItems = currentWeek.map((t, i) =>
    <WeekDay
      key={`weekDay${i}`}
      title={t.weekDayFullName}
      lessons={weekDaysLessons.length ? weekDaysLessons[i] : []}
      onPressHandler={onWeekDayPressHandler}
      dayIndex={i}
      date={t}
    />
  )

  return (
    <DiaryLayout>
      <ScrollView>
        <View style={{
          padding: 10,
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          justifyContent: 'center'
        }}>
          {weekDaysItems}
        </View>
      </ScrollView>
    </DiaryLayout>
  );
};