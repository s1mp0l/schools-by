import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {CustomColors} from "../../../shared/lib/constants";
import ProgressYearMarksList from "./ProgressYearMarksList";
import {useAppDispatch} from "../../../app/hooks";
import {setSelectedSubject} from "../../../features/progress/store/progress-store";
import {StackNavigationProp} from "@react-navigation/stack";
import {ProgressTabParamList} from "../../../processes/progress/ProgressNavigator";
import {CompositeScreenProps, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp, BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

interface Props {
  subject: SubjectWithYearMarks;
  onRowPress: (subject: SubjectData) => void;
}


export const ProgressYearRow = ({subject, onRowPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onRowPress(subject)}>
      <View style={styles.rowContainer}>
        <View style={{flex: 3}}>
          <CustomText text={subject?.title} type={'subTitle'} />
        </View>
        <View style={{flex: 5}}>
          <ProgressYearMarksList data={subject} markSize={30}/>
        </View>
      </View>
    </TouchableOpacity>
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