import {ProgressYearTable} from "../components/ProgressYearTable";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {setSelectedSubject} from "../../../features/progress/store/progress-store";
import {useAppDispatch} from "../../../app/hooks";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {ProgressTabParamList} from "../../../processes/progress/ProgressNavigator";

type ProgressTabNavigationProp = BottomTabScreenProps<ProgressTabParamList, 'Year'>

export const ProgressYearPage = ({navigation}: ProgressTabNavigationProp) => {
  const dispatch = useAppDispatch();

  const onRowPress = (subject: SubjectData) => {
    dispatch(setSelectedSubject(subject));
    navigation.navigate('Current', { screen: 'SubjectDetail', initial: false});
  };

  return (
    <PageLayout>
      <ProgressYearTable onRowPress={onRowPress}/>
    </PageLayout>
  );
};