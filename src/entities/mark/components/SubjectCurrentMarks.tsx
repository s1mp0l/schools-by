import {FlatList, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkListItem} from "./MarkListItem";
import {useAppSelector} from "../../../app/hooks";

interface Props {
  marks: MarkData[]
}

export const SubjectCurrentMarks = ({marks}: Props) => {
  const {isTeacher} = useAppSelector(state => state.user);


  const marksItems: MarkListItemProps[] = marks.map(m => ({
    value: m.value,
    text: m.lessonDate,
  }));
  if (isTeacher) marksItems.push({value: 0, text: '', isAddButton: true});

  return (
    <View style={{
      backgroundColor: CustomColors.secondaryLight,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap: 10,
    }}>
      <CustomText text={'Текущие оценки'} type={'title'}/>
      { marksItems?.length ? <FlatList
        data={marksItems}
        numColumns={5}
        renderItem={({item}) => <MarkListItem item={item}/>}
        keyExtractor={(item, index) => `mark${item.text}${index}`}
      /> : <CustomText text={'Нет оценок'} type={'paragraph'} />}
    </View>
  )
}