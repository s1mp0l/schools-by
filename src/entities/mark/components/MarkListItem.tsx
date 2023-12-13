import {MarkCircleWithText} from "../../../shared/ui/MarkCircleWithText";
import {View} from "react-native";
import AddMarkButton from "./AddMarkButton";

interface Props {
  item: MarkData
}

export const MarkListItem = ({ item }: Props) => {
  return <View style={{flex: 1, marginVertical: 5}}>
    {
      item.id ?
        <MarkCircleWithText mark={item.value} size={40} text={item.lessonDate.substring(0, 5)} /> :
        <AddMarkButton />
    }
  </View>;

};