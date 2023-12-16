import {View} from "react-native";
import {DayLesson} from "../../../entities/lesson/components/DayLesson";
import {CustomText} from "../../../shared/ui/CustomText";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {customDateToDayObj, customDateToString} from "../../../shared/lib/utils";
import {useEffect} from "react";
import {
  fetchClassLessonsForDay,
  fetchClassLessonsForWeek, fetchTeacherLessonsForDay,
  fetchTeacherLessonsForWeek
} from "../../../features/diary/store/diary-thunks";
import {fetchAllStudentMarks} from "../../../features/progress/store/progress-thunks";

export const DayDetailView = () => {
  const dispatch = useAppDispatch();
  const {currentDay, dayLessons} =
    useAppSelector(state => state.diary);

  const {studentSubjects} = useAppSelector(state => state.progress)
  const {isTeacher, data} = useAppSelector(state => state.user)

  useEffect(() => {
    const date = customDateToString(currentDay, 'yyyy-mm-dd');
    if(isTeacher) {
      const teacherId = (data as TeacherData).id;
      dispatch(fetchTeacherLessonsForDay({teacherId, date}));
    } else {
      const classId = (data as StudentData).nclass.id;
      dispatch(fetchClassLessonsForDay({classId, date}));
    }
  }, [currentDay, isTeacher, data]);

  useEffect(() => {
    const studentClassId = (data as StudentData).id;
    if (!studentSubjects?.length || !studentClassId) {
      dispatch(fetchAllStudentMarks(studentClassId));
    }
  }, [studentSubjects, data]);

  const lessonsLength = 8;

  const dayLessonsWithMarks: LessonWithMark[] = dayLessons.map(l => ({
    ...l,
    mark: studentSubjects.find(s => s.title === l.subject)
      ?.marks?.find(m => m.lesson === l.id)?.value || null
  }))

  const lessonsItems = [...Array(lessonsLength).keys()].map((i) =>
    <DayLesson isTeacher={isTeacher} lesson={dayLessonsWithMarks[i]} key={`weekDayLesson${i}`}/>
  );

  return (
    <View>
      {lessonsItems}
    </View>
  );
};