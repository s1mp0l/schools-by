import {DiaryLayout} from "../components/DiaryLayout";
import {DayDetailView} from "../components/DayDetailView";
import {StackNavigationProp} from "@react-navigation/stack";
import {DiaryTabParamList} from "../../../processes/diary/DiaryNavigator";

type DiaryTabNavigationProp = StackNavigationProp<
  DiaryTabParamList,
  'Day'
>;

interface Props {
  navigation: DiaryTabNavigationProp;
}

export const DiaryLessonPage = ({}: Props) => {
  return (
    <DiaryLayout>
      <DayDetailView />
    </DiaryLayout>
  );
};