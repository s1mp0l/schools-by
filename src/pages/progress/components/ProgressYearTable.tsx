import {ScrollView, View} from "react-native";
import {ProgressYearRow} from "./ProgressYearRow";
import {CustomColors} from "../../../shared/lib/constants";
import {useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {ProgressYearHeader} from "./ProgressYearHeader";

interface Props {
  onRowPress: (subject: SubjectData) => void;
}

export const ProgressYearTable = ({onRowPress}:Props) => {
  const {studentSubjects} = useAppSelector((state: RootState) => state.progress);

  const rows = studentSubjects.map((s, i) =>
    <ProgressYearRow subject={s} key={`${s.title}+${i}`} onRowPress={onRowPress}/>
  )

  return (
    <View style={{
      paddingVertical: 20
    }}>
      <ProgressYearHeader />
      <ScrollView>
        <View style={{
          gap: 10,
          padding: 15,
          paddingBottom: 50,
          backgroundColor: CustomColors.secondaryLight,
          borderRadius: 20,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}>
          {rows}
        </View>
      </ScrollView>
    </View>
  );
};