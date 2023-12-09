import CalendarList from "react-native-calendars/src/calendar-list/new";
import {View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {DiaryLayout} from "../components/DiaryLayout";


export const DiaryMonthPage = () => {
  const getHeaderText = (info: any) => {
    const date = new Date(info.month);
    const monthName = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    const yearName = date.getFullYear().toString();
    const resultString = `${monthName} ${yearName}`
    return <View style={{alignItems: 'center', paddingVertical: 5}}>
      <CustomText text={resultString} type={'subTitle'} />
    </View>
  };

  return (
    <DiaryLayout>
      <CalendarList
        calendarProps={{
          customHeader: getHeaderText
        }}/>
    </DiaryLayout>
  );
};