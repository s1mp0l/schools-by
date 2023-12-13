import {FlatList, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkListItem} from "./MarkListItem";

interface Props {
  marks: MarkData[]
}

export const SubjectYearMarks = ({marks}: Props) => {

  const marksItems: MarkData[] = [
    {id: 20, value: 6, lessonDate: 'I'},
    {id: 28, value: 3, lessonDate: 'II'},
    {id: 16, value: 9, lessonDate: 'III'},
    {id: 18, value: 4, lessonDate: 'IV'},
    {id: 33, value: 7, lessonDate: 'Итог'},
  ];

  return (
    <View style={{
      backgroundColor: CustomColors.secondaryLight,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 10
    }}>
      <CustomText text={'Итоговые оценки'} type={'title'}/>
      <View style={{
        justifyContent: 'center',
        gap: 10,
      }}>
        <FlatList
          contentContainerStyle={{justifyContent: 'flex-start'}}
          data={marksItems}
          numColumns={5}
          renderItem={MarkListItem}
          keyExtractor={(item, index) => `year mark${item.id}${index}`}
        />
      </View>
    </View>
  )
}