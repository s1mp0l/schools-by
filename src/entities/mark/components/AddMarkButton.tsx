import {TouchableOpacity} from "react-native";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {CustomColors} from "../../../shared/lib/constants";

export const AddMarkButton = () => {
  return (
    <TouchableOpacity style={{alignSelf: 'center'}}>
      <MarkCircle mark={0} size={40} isAddMark={true} color={CustomColors.baseGray}/>
    </TouchableOpacity>
  );
};

export default AddMarkButton;