import {DiaryLayout} from "../components/DiaryLayout";
import {DayDetailView} from "../components/DayDetailView";

interface Props {

}

export const DiaryLessonPage = ({}: Props) => {
  return (
    <DiaryLayout>
      <DayDetailView />
    </DiaryLayout>
  );
};