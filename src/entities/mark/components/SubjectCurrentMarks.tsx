import {FlatList, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkListItem} from "./MarkListItem";

interface Props {
  marks: MarkData[]
}

export const SubjectCurrentMarks = ({marks}: Props) => {

  const marksItems: MarkData[] = [
    {id: 1, value: 6, lessonDate: '19.02.2023'},
    {id: 23, value: 3, lessonDate: '20.02.2023'},
    {id: 20, value: 9, lessonDate: '21.02'},
    {id: 12, value: 4, lessonDate: '25.02'},
    {id: 3, value: 7, lessonDate: '04.03'},
    {id: 5, value: 6, lessonDate: '19.02'},
    {id: 11, value: 3, lessonDate: '20.02'},
    {id: 7, value: 9, lessonDate: '21.02'},
    {id: 9, value: 4, lessonDate: '25.02'},
    {id: 12, value: 7, lessonDate: '04.03'},
    {id: 25, value: 6, lessonDate: '19.02'},
    {id: 27, value: 3, lessonDate: '20.02'},
    {id: 30, value: 9, lessonDate: '21.02'},
    {id: 14, value: 4, lessonDate: '25.02'},
    {id: 17, value: 7, lessonDate: '04.03'},
    {id: 55, value: 3, lessonDate: '25.02'},
    {id: 19, value: 9, lessonDate: '04.03'},
    {id: 0, value: 0, lessonDate: ''}
  ];

  return (
    <View style={{
      backgroundColor: CustomColors.secondaryLight,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 10,
    }}>
      <CustomText text={'Текущие оценки'} type={'title'}/>
      <FlatList
        data={marksItems}
        numColumns={5}
        renderItem={MarkListItem}
        keyExtractor={(item, index) => `mark${item.id}${index}`}
      />
    </View>
  )
}