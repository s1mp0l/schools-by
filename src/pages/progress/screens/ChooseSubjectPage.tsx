import {FlatList} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {ChooseSubjectItem} from "../../../entities/subject/components/ChooseSubjectItem";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {setSelectedSubject} from "../../../features/progress/store/progress-store";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseSubject'
>;

type Props = {
  navigation: TeacherNavigationProp;
};

export const ChooseSubjectPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {data} = useAppSelector((state: RootState) => state.user);
  const subjects = (data as TeacherData).subjects;

  const onPressHandler = (s: SubjectData) => {
    dispatch(setSelectedSubject(s));
    navigation.navigate('ChooseClass');
  }

  return (
    <PageLayout>
      <FlatList
        contentContainerStyle={{gap: 20}}
        data={subjects}
        renderItem={({item}) =>
          <ChooseSubjectItem subject={item} key={item.title} onPressHandler={onPressHandler} />}
      />
    </PageLayout>
  );
};