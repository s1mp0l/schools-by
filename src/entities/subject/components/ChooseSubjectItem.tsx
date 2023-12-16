import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";
import {MarkCircle} from "../../../shared/ui/MarkCircle";

interface Props {
  subject: SubjectWithYearMarks;
  onPressHandler: (s: SubjectData) => void;
}

export const ChooseSubjectItem = ({subject, onPressHandler}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPressHandler(subject)}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <CustomText text={`${subject.title}`} type={'subTitle'} />
          <CustomText text={`${subject.marks?.length || 'Нет'} оценок`} type={'paragraph'} />
        </View>
        <MarkCircle mark={subject.currentSemesterMark} size={40}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: CustomColors.secondaryLight,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerContainer: {
    gap: 5
  }
})