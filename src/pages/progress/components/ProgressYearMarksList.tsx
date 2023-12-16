import {CustomColors} from "../../../shared/lib/constants";
import {MarkListItem} from "../../../entities/mark/components/MarkListItem";
import {FlatList} from "react-native";

interface Props {
  data: SubjectWithYearMarks | undefined;
  markSize?: number;
}

export const ProgressYearMarksList = ({data, markSize}: Props) => {
  const marksItems: MarkListItemProps[] = [
    {value: 0, text: 'I'},
    {value: 0, text: 'II'},
    {value: 0, text: 'III'},
    {value: 0, text: 'IV'},
    {value: 0, text: 'Итог', color: CustomColors.baseGray},
  ];

  if(data?.semesterMarks) {
    let i = 0;
    data?.semesterMarks?.forEach((m) => {
      marksItems[i].value = m.value;
      i++;
    })
    marksItems[i].value = data?.currentSemesterMark;
    marksItems[i].color = CustomColors.baseGray
    marksItems[4].value = data?.yearMark;
  }

  return (
    <FlatList
      scrollEnabled={false}
      contentContainerStyle={{justifyContent: 'flex-start'}}
      data={marksItems}
      numColumns={5}
      renderItem={({item}) => <MarkListItem item={item} markSize={markSize || 40}/>}
      keyExtractor={(item, index) => `year mark${item.text}${index}`}
    />
  );
};

export default ProgressYearMarksList;