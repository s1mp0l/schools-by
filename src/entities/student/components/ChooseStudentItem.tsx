import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  student: StudentData;
  onPressHandler: (s: StudentData) => void;
}

export const ChooseStudentItem = ({student, onPressHandler}: Props) => {
  const studentFullName = `${student.user.lastName} ${student.user.firstName} `;

  return (
    <TouchableOpacity onPress={() => onPressHandler(student)}>
      <View style={styles.container}>
        <CustomText text={studentFullName} type={'subTitle'} />
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