import {TouchableOpacity, View} from "react-native";
import {WeekDayLesson} from "../../../entities/lesson/components/WeekDayLesson";
import {CustomText} from "../../../shared/ui/CustomText";
import {numberToFixedLength} from "../../../shared/lib/utils";
import {useAppSelector} from "../../../app/hooks";

interface Props {
  title: string;
  lessons: LessonData[];
  dayIndex: number;
  date?: CustomDate;
  onPressHandler: (dayIndex: number) => void;
}

export const WeekDay = ({title, dayIndex, onPressHandler, date, lessons}: Props) => {
  const lessonsLength = 8;
  const {studentSubjects} = useAppSelector(state => state.progress)

  const dayLessonsWithMarks: LessonWithMark[] = lessons.map(l => ({
    ...l,
    mark: studentSubjects.find(s => s.title === l.subject)
      ?.marks?.find(m => m.lesson === l.id)?.value || null
  }))

  const lessonsItems = [...Array(lessonsLength).keys()].map((i) =>
    <WeekDayLesson lesson={dayLessonsWithMarks[i]} key={`weekDayLesson${i}`}/>
  );

  const dateText = date ?
    `${numberToFixedLength(date.day, 2)}.${numberToFixedLength(date.month, 2)}`
    : '';

  return (
    <TouchableOpacity
      style={{width: '45%', alignItems: 'center', gap: 10}}
      onPress={() => onPressHandler(dayIndex)}
    >
      <View style={{alignItems: 'center'}}>
        <CustomText text={title} type={'title'} />
        {date ? <CustomText text={dateText} type={'title'} /> : <></>}
      </View>
      <View>
        {lessonsItems}
      </View>
    </TouchableOpacity>
  );
};