import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  subject: SubjectData;
  onPressHandler: (s: SubjectData) => void;
}

export const ChooseSubjectItem = ({subject, onPressHandler}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(subject)}>
      <View style={styles.container}>
        <CustomText text={`${subject.title}`} type={'subTitle'} />
        {/*<CustomText text={`${classObject.students?.length} учеников`} type={'paragraph'} />*/}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: CustomColors.secondaryLight,
    borderRadius: 10,
    width: '100%'
  }
})