import {View} from "react-native";
import {ReactNode} from "react";
import {CustomText} from "../../../shared/ui/CustomText";
import {customDateToDayObj} from "../../../shared/lib/utils";
import {useAppSelector} from "../../../app/hooks";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  children: ReactNode,
}

export const DiaryLayout = ({children}: Props) => {
  const currentDay = useAppSelector(state => state.diary.currentDay);
  const monthName = customDateToDayObj(currentDay)
    .toLocaleString('default', {month: 'long'}).toUpperCase();

  const currentDayString = `${currentDay.weekDayShortName}, ${currentDay.day}.${monthName}`;

  return (
    <View style={{flex: 1}}>
      <View style={{
        borderBottomColor: CustomColors.baseGray,
        borderBottomWidth: 2
      }}>
        <CustomText
          styles={{padding: 10,}}
          text={currentDayString}
          type={'title'}/>
      </View>
      {children}
    </View>
  );
};