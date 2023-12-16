import {TouchableOpacity} from "react-native";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {CustomColors} from "../../../shared/lib/constants";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'SubjectDetail'
>;

export const AddMarkButton = () => {
  const navigation: TeacherNavigationProp = useNavigation();

  return (
    <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => navigation.navigate('ChooseLesson')}>
      <MarkCircle mark={0} size={40} isAddMark={true} color={CustomColors.baseGray}/>
    </TouchableOpacity>
  );
};

export default AddMarkButton;