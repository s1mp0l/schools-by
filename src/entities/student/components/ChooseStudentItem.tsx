import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {AbsenceCheckbox} from "../../../pages/diary/components/AbsenceCheckbox";


interface Props {
  student: StudentData;
  onPressHandler: (s: StudentData, mark?: MarkData) => void;
  mark?: MarkData;
  absence?: AbsenceData;
  withAddMark?: boolean;
  forAbsence?: boolean;
}

export const ChooseStudentItem = ({student, onPressHandler, mark, withAddMark, forAbsence, absence}: Props) => {
  const studentFullName = `${student.user.lastName} ${student.user.firstName} `;

  return (
    <TouchableOpacity onPress={() => onPressHandler(student, mark)}>
      <View style={styles.container}>
        <CustomText text={studentFullName} type={'subTitle'} />
        {mark || withAddMark ?
          <MarkCircle mark={mark?.value || 0} size={40} isAddMark={!mark && withAddMark} /> :
          <></>}
        {forAbsence ? <AbsenceCheckbox value={!!absence?.absence}/> : <></>}
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})