import {FlatList, View} from "react-native";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {fetchAllTeachers} from "../../../features/user/store/user-thunks";
import {TeacherListItem} from "../components/TeacherListItem";

export const TeachersPage = () => {
  const dispatch = useAppDispatch();
  const {allTeachers} = useAppSelector(state => state.user)

  useEffect(() => {
    if (!allTeachers?.length) dispatch(fetchAllTeachers());
  }, [allTeachers]);

  const teacherItems = allTeachers.map(t => ({
    name: `${t.user.lastName} ${t.user.firstName} ${t.user.patronymic}`,
    status: `Учитель по: ${t.subjects.map(s => s.title.toLowerCase()).join(', ')}`
  }))

  return (
    <View>
      <FlatList
        data={teacherItems}
        extraData={allTeachers}
        renderItem={({item}) => <TeacherListItem {...item}/>}
      />
    </View>
  );
};