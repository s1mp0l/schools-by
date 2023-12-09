import {View} from "react-native";
import {MarkCircleWithText} from "../../../shared/ui/MarkCircleWithText";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {PageLayout} from "../../../shared/ui/PageLayout";

export const ProgressCurrentPage = () => {
  return (
    <View>
      <PageLayout>
        <SubjectYearMarks />
      </PageLayout>
    </View>

  );
};

const SubjectYearMarks = () => {
  const marks = [
    {mark: 6, text: 'I'},
    {mark: 3, text: 'II'},
    {mark: 9, text: 'III'},
    {mark: 4, text: 'IV'},
    {mark: 7, text: 'Итог'},
  ];

  const marksComponents = marks.map(m =>
    <MarkCircleWithText mark={m.mark} size={40} text={m.text} key={m.text}/>
  )

  return (
    <View style={{
      backgroundColor: CustomColors.secondaryLight,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 10
    }}>
      <CustomText text={'Итоги'} type={'title'}/>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
      }}>
        {marksComponents}
      </View>
    </View>
  )
}