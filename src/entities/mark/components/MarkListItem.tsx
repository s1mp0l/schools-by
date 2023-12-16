import {MarkCircleWithText} from "../../../shared/ui/MarkCircleWithText";
import {View} from "react-native";
import AddMarkButton from "./AddMarkButton";

interface Props {
  item: MarkListItemProps;
  markSize?: number;
}

export const MarkListItem = ({item, markSize}: Props) => {
  return <View style={{flex: 1 / 5, marginVertical: 5}}>
    {item.isAddButton ? <AddMarkButton /> : <MarkCircleWithText
      mark={item.value}
      size={markSize || 40}
      text={item.text.substring(0, 5)}
      color={item.color}/>}
  </View>;

};