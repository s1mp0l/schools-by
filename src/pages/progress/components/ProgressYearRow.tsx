import {StyleSheet, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {CustomColors} from "../../../shared/lib/constants";

interface Props {
  subject: any;
}

export const ProgressYearRow = ({subject}: Props) => {
  const markSize = 30;

  return (
    <View style={styles.rowContainer}>
      <View style={{flex: 4}}>
        <CustomText text={subject?.title} type={'subTitle'} />
      </View>
      <View style={{flex: 1}}>
        <MarkCircle mark={1} size={markSize} />
      </View>
      <View style={{flex: 1}}>
        <MarkCircle mark={9} size={markSize} />
      </View>
      <View style={{flex: 1}}>
        <MarkCircle mark={4} size={markSize} />
      </View>
      <View style={{flex: 1}}>
        <MarkCircle mark={7} size={markSize} />
      </View>
      <View style={{flex: 1}}>
        <MarkCircle mark={5} size={markSize} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    borderRadius: 10,
    borderColor: CustomColors.primary,
    borderWidth: 1
  }
})