import {View} from "react-native";
import {ProgressYearRow} from "./ProgressYearRow";
import {CustomColors} from "../../../shared/lib/constants";

export const ProgressYearTable = () => {
  const subjects = [
    {title: 'Математика'},
    {title: 'Руск. яз.'},
    {title: 'Англ. яз.'},
    {title: 'Литература'},
    {title: 'Химия'},
  ];

  const rows = subjects.map((s, i) =>
    <ProgressYearRow subject={s} key={`${s.title}+${i}`}/>
  )

  return (
    <View style={{
      padding: 15,
      backgroundColor: CustomColors.secondaryLight,
      gap: 10,
      borderRadius: 20,
    }}>
      {rows}
    </View>
  );
};