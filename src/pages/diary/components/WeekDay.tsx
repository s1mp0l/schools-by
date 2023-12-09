import {View} from "react-native";
import {WeekDayLesson} from "./WeekDayLesson";

export const WeekDay = () => {
  const lessonsLength = 8;

  const lessons = [
    {subject: 'Математика', mark: 8, hometask: 'Упр. 10, 12, 21: стр. 22'},
    {subject: 'Англ. яз', mark: null, hometask: 'Упр. 5 стр. 22'},
    {subject: 'Руск. яз', mark: null, hometask: null},
    null,
    null,
    null,
    null,
    null
  ];

  const lessonsItems = [...Array(lessonsLength).keys()].map((i) =>
    <WeekDayLesson lesson={lessons[i]} key={`weekDayLesson${i}`}/>
  );

  return (
    <View style={{width: '45%'}}>
      {lessonsItems}
    </View>
  );
};