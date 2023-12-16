import {TextInput, View} from "react-native";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {TeacherNavigatorParamList} from "../../../processes/progress/ProgressTeacherNavigator";
import {MarkSelect} from "./MarkSelect";
import {IconButton} from "../../../shared/ui/IconButton";
import {CustomText} from "../../../shared/ui/CustomText";
import {PrimaryButton} from "../../../shared/ui/PrimaryButton";
import {CustomColors} from "../../../shared/lib/constants";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {fetchAddStudentMark} from "../../../features/progress/store/progress-thunks";

type TeacherNavigationProp = StackNavigationProp<
  TeacherNavigatorParamList,
  'AddMark'
>;

export const AddMarkPage = () => {
  const navigation: TeacherNavigationProp = useNavigation();
  const [selectedValue, setSelectedValue] = useState(10);
  const [comment, setComment] = useState('');

  const dispatch = useAppDispatch();

  const {isTeacher, data} = useAppSelector(state => state.user)
  const {selectedLesson, selectedSubject, selectedStudent} =
    useAppSelector(state => state.progress)

  const studentId = selectedStudent.id;
  const lessonId = selectedLesson.id;

  const onSubmitHandler = () => {
    dispatch(fetchAddStudentMark({studentId, lessonId, value: selectedValue}));
    navigation.navigate('SubjectDetail');
  }

  if (!isTeacher) return <CustomText text={'Вы должны быть учителем чтобы добавлять оценку!'} type={'title'} />

  return (
    <PageLayout>
      <CustomText text={'Выберите оценку'} type={'title'} />
      <MarkSelect selectedValue={selectedValue} onChangeValue={(v) => setSelectedValue(v)}/>
      <CustomText text={'Комментарий'} type={'title'} />
      <TextInput
        style={{
          height: 100,
          padding: 20,
          backgroundColor: CustomColors.secondaryLight,
          borderRadius: 20
        }}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setComment(text)}
        value={comment}/>
      <PrimaryButton onPress={onSubmitHandler}>
        <CustomText text={'Добавить'} type={'subTitle'} color={'white'}/>
      </PrimaryButton>
    </PageLayout>
  );
};

export default AddMarkPage;