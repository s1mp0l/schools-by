import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {useEffect} from "react";
import {fetchAllTeachers} from "../../../features/user/store/user-thunks";
import {FlatList, ScrollView, View} from "react-native";
import {TeacherListItem} from "../components/TeacherListItem";

export const AdministrationPage = () => {
  const dispatch = useAppDispatch();
  const {allTeachers} = useAppSelector(state => state.user)

  useEffect(() => {
    if (!allTeachers?.length) dispatch(fetchAllTeachers());
  }, [allTeachers]);

  const teacherItems = [];
  if (allTeachers?.length) {
    teacherItems[0] = ({
      name: `${allTeachers[5].user.lastName} ${allTeachers[5].user.firstName} ${allTeachers[5].user.patronymic}`,
      status: `Директор`
    })

    teacherItems[1] = ({
      name: `${allTeachers[6].user.lastName} ${allTeachers[5].user.firstName} ${allTeachers[5].user.patronymic}`,
      status: `Зам. директора`
    })

    teacherItems[2] = ({
      name: `${allTeachers[4].user.lastName} ${allTeachers[4].user.firstName} ${allTeachers[4].user.patronymic}`,
      status: `Завуч по УВР`
    })

    teacherItems[3] = ({
      name: `${allTeachers[2].user.lastName} ${allTeachers[2].user.firstName} ${allTeachers[2].user.patronymic}`,
      status: `Завуч по МР`
    })

    teacherItems[4] = ({
      name: `${allTeachers[3].user.lastName} ${allTeachers[3].user.firstName} ${allTeachers[3].user.patronymic}`,
      status: `Завуч по УВР`
    })

    teacherItems[5] = ({
      name: 'Борисевич Татьяна Викторовна',
      status: `Секретарь`
    })
  }

  const teacherComponents = teacherItems.map(t =>
    <TeacherListItem name={t.name} status={t.status} key={t.name}/>
  )

  return (
    <View>
      <ScrollView>
        <View style={{}}>
          {teacherComponents}
        </View>
      </ScrollView>
    </View>
  );
};