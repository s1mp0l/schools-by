import CalendarList from "react-native-calendars/src/calendar-list/new";
import {FlatList, SafeAreaView, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {DiaryLayout} from "../components/DiaryLayout";
import {DateData} from "react-native-calendars";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {setCurrentDay} from "../../../features/diary/store/diary-store";
import {StackNavigationProp} from "@react-navigation/stack";
import {DiaryTabParamList} from "../../../processes/diary/DiaryNavigator";
import {customDateFromValues, customDateToString, parseDateString} from "../../../shared/lib/utils";
import {weekDayNames} from "react-native-calendars/src/dateutils";
import {constWeekDayNames, constWeekDayNamesShortened, CustomColors} from "../../../shared/lib/constants";

type DiaryTabNavigationProp = StackNavigationProp<
  DiaryTabParamList,
  'Month'
>;

interface Props {
  navigation: DiaryTabNavigationProp;
}

export const DiaryMonthPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {currentDay} = useAppSelector(state => state.diary)

  const getHeaderText = (info: any) => {
    const date = new Date(info.month);
    const monthName = date.toLocaleString('default', { month: 'long' }).toUpperCase();
    const yearName = date.getFullYear().toString();
    const resultString = `${monthName} ${yearName}`
    return <View style={{
      alignItems: 'center',
      paddingVertical: 5,
      gap: 10,
      backgroundColor: CustomColors.secondaryLight
    }}>
      <CustomText text={resultString} type={'subTitle'} />
      <View style={{
        width: '100%',
        justifyContent: 'space-around',
        flexDirection: 'row',
      }}>
        {constWeekDayNamesShortened.map(d =>
          <CustomText text={d} type={'paragraph'} key={d} color={CustomColors.darkGray}/>
        )}
      </View>
    </View>
  };

  const onDayPress = (date: DateData) => {
    const customDate = customDateFromValues(date.day, date.month, date.year);
    dispatch(setCurrentDay(customDate));
    navigation.navigate('Day');
  }

  // const currentDayString = customDateToString(currentDay, 'yyyy-mm-dd');
  // const markedObject = {
  //   currentDayString: {selected: true, marked: true, selectedColor: 'blue'},
  // }

  return (
    <DiaryLayout>
      <CalendarList
        scrollRange={10}
        calendarProps={{
          // firstDay: 1,
          customHeader: getHeaderText,
          displayLoadingIndicator: true,
          onDayPress: onDayPress,
          // markedDates: markedObject
        }}
      />
    </DiaryLayout>
  );
};