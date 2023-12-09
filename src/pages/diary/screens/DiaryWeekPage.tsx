import {ScrollView, View} from "react-native";
import {WeekDay} from "../components/WeekDay";
import {DiaryLayout} from "../components/DiaryLayout";


export const DiaryWeekPage = () => {
  const weekDaysLength = 5;

  const weekDaysItems = [...Array(weekDaysLength).keys()].map((i) =>
    <WeekDay key={`weekDay${i}`}/>
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