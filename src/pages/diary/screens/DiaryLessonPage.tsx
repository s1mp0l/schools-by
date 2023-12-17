import {DiaryLayout} from "../components/DiaryLayout";
import {DayDetailView} from "../components/DayDetailView";
import {StackNavigationProp} from "@react-navigation/stack";
import {DiaryDayNavigatorParamList} from "../../../processes/diary/DiaryDayNavigator";
import {View} from "react-native";
import {CustomText} from "../../../shared/ui/CustomText";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {CustomColors} from "../../../shared/lib/constants";
import {useAppSelector} from "../../../app/hooks";


type Props = NativeStackScreenProps<DiaryDayNavigatorParamList, 'Lesson'>;

export const DiaryLessonPage = ({navigation, route}: Props) => {
  const {isTeacher} = useAppSelector(state => state.user)
  const {selectedLesson} = useAppSelector(state => state.diary)

  const lesson = isTeacher ? selectedLesson : route.params.lesson;
  return (
    <DiaryLayout>
      <View style={{padding: 10}}>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View>
            <CustomText text={lesson.subject} type={'main'} />
            <CustomText text={lesson.nclass|| ''} type={'title'} />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <CustomText text={lesson.time?.substring(0, 5) || ''} type={'main'} />
            <CustomText text={`каб. ${lesson.classroom || 'не указан'}`} type={'title'} />
          </View>
        </View>
        <View style={{alignItems: 'center', padding: 30}}>
          {isTeacher ? <></> : <MarkCircle mark={(lesson as LessonWithMark).mark || 0} size={100} /> }
        </View>
        <View style={{gap: 20}}>
          <CustomText text={'Домашнее задание'} type={'main'} styles={{alignSelf: 'center'}}/>
          <View style={{
            backgroundColor: CustomColors.baseGray,
            borderRadius: 20,
            padding: 20,
          }}>
            <CustomText text={lesson?.task?.trim() || 'Не задано'} type={'subTitle'} />
          </View>
        </View>
      </View>
    </DiaryLayout>
  );
};