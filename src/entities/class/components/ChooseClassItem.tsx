import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  classObject: ClassData;
  onPressHandler: (s: ClassData) => void;
}

export const ChooseClassItem = ({classObject, onPressHandler}: Props) => {
  const students = new Array(10);

  return (
    <TouchableOpacity onPress={() => onPressHandler(classObject)}>
      <View style={styles.container}>
        <CustomText text={`${classObject.grade} "${classObject.letter}"`} type={'subTitle'} />
        <CustomText text={`${students?.length} учеников`} type={'paragraph'} />
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