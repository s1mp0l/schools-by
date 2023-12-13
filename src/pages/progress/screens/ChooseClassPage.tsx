import {FlatList} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {setSelectedClass} from "../../../features/progress/store/progress-store";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {ChooseClassItem} from "../../../entities/class/components/ChooseClassItem";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'ChooseClass'
>;

type Props = {
  navigation: TeacherNavigationProp;
};

export const ChooseClassPage = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const {data} = useAppSelector((state: RootState) => state.user);
  const classes = (data as TeacherData).classes;

  const onPressHandler = (c: ClassData) => {
    dispatch(setSelectedClass(c));
    navigation.navigate('ChooseStudent');
  }

  return (
    <PageLayout>
      <FlatList
        contentContainerStyle={{gap: 20}}
        data={classes}
        renderItem={({item}) =>
          <ChooseClassItem classObject={item} onPressHandler={onPressHandler} key={`${item.id} ${item.letter}`}/>}
      />
    </PageLayout>
  );
};