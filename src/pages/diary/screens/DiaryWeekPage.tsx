import {ScrollView, View} from "react-native";
import {WeekDay} from "../components/WeekDay";
import {DiaryLayout} from "../components/DiaryLayout";


export const DiaryWeekPage = () => {
  const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

  const weekDaysItems = weekDays.map((t, i) =>
    <WeekDay key={`weekDay${i}`} title={t} lessons={[]}/>
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