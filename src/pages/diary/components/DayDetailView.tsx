import {View} from "react-native";
import {DayLesson} from "./DayLesson";

export const DayDetailView = () => {
  const lessonsLength = 8;

  const lessons = [
    {subject: 'Математика', mark: 8, hometask: 'Упр. 10, 12, 21: стр. 22', classroom: '123'},
    {subject: 'Англ. яз', mark: null, hometask: 'Упр. 5 стр. 22', classroom: '200'},
    {subject: 'Руск. яз', mark: null, hometask: null},
    null,
    null,
    null,
    null,
    null
  ];

  const lessonsItems = [...Array(lessonsLength).keys()].map((i) =>
    <DayLesson lesson={lessons[i]} key={`weekDayLesson${i}`}/>
  );

  return (
    <View>
      {lessonsItems}
    </View>
  );
};