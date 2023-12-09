import {StyleSheet, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  classObject: any
}

export const ChooseClassItem = ({classObject}: Props) => {
  return (
    <View style={styles.container}>
      <CustomText text={`${classObject.grade} "${classObject.letter}"`} type={'subTitle'} />
      <CustomText text={`${classObject.students?.length} учеников`} type={'paragraph'} />
    </View>
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