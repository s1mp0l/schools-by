import {DayDetailView} from "../components/DayDetailView";
import {DiaryLayout} from "../components/DiaryLayout";
import {StackNavigationProp} from "@react-navigation/stack";
import {DiaryTabParamList} from "../../../processes/diary/DiaryNavigator";

type DiaryTabNavigationProp = StackNavigationProp<
  DiaryTabParamList,
  'Day'
>;

interface Props {
  navigation: DiaryTabNavigationProp;
}

export const DiaryDayPage = () => {
  return (
    <DiaryLayout>
      <DayDetailView />
    </DiaryLayout>
  );
};