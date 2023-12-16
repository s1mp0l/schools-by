import {FlatList, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkListItem} from "./MarkListItem";
import {LightBlockContainer} from "../../../shared/ui/LightBlockContainer";
import ProgressYearMarksList from "../../../pages/progress/components/ProgressYearMarksList";

interface Props {
  data: SubjectWithYearMarks | undefined;
}

export const SubjectYearMarks = ({data}: Props) => {
  return (
    <LightBlockContainer>
      <CustomText text={'Итоговые оценки'} type={'title'}/>
      <View style={{
        justifyContent: 'center',
        gap: 10,
      }}>
        <ProgressYearMarksList data={data} />
      </View>
    </LightBlockContainer>
  )
}