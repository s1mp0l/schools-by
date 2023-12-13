import {View} from "react-native";
import {WeekDayLesson} from "../../../entities/lesson/components/WeekDayLesson";
import {CustomText} from "../../../shared/ui/CustomText";

interface Props {
  title: string;
  lessons: any;
}

export const WeekDay = ({title}: Props) => {
  const lessonsLength = 8;

  const lessons = [
    {time: new Date(Date.now()), subject: 'Математика', mark: 8, hometask: 'Упр. 10, 12, 21: стр. 22', classroom: '123'},
    {subject: 'Англ. яз', mark: null, hometask: 'Упр. 5 стр. 22', classroom: '200'},
    {time: new Date(Date.now()), subject: 'Руск. яз', mark: null, hometask: null},
    {time: new Date(Date.now()), subject: 'Математика', mark: 3, hometask: 'Упр. 10, 12, 21: стр. 22', classroom: '123'},
    {subject: 'Англ. яз', mark: null, hometask: 'Упр. 5 стр. 22', classroom: '200'},
    {time: new Date(Date.now()), subject: 'Руск. яз', mark: 5, hometask: null},
    null,
    null
  ];

  const lessonsItems = [...Array(lessonsLength).keys()].map((i) =>
    <WeekDayLesson lesson={lessons[i]} key={`weekDayLesson${i}`}/>
  );

  return (
    <View style={{width: '45%', alignItems: 'center', gap: 10}}>
      <CustomText text={title} type={'title'} />
      <View>
        {lessonsItems}
      </View>
    </View>
  );
};