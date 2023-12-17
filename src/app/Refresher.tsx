import {ReactNode, useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "./hooks";
import {RefreshControl, SafeAreaView, ScrollView} from "react-native";
import {fetchAllStudentMarks} from "../features/progress/store/progress-thunks";
import { LogBox } from 'react-native';
import {CustomColors} from "../shared/lib/constants";

interface Props {
  children: ReactNode
}

export const Refresher = ({children}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const {selectedStudent} =
    useAppSelector(state => state.progress);

  const {isTeacher, data} = useAppSelector(state => state.user)

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const studentId = isTeacher ? selectedStudent.id : (data as StudentData).id;
    console.log(studentId);
    if (studentId) {
      dispatch(fetchAllStudentMarks(studentId));
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [selectedStudent, data]);

  return (
    <SafeAreaView style={{
      flex: 1,
      height: '100%',
      backgroundColor: CustomColors.secondary
    }}>
      <ScrollView
        style={{backgroundColor: CustomColors.secondaryLight}}
        contentContainerStyle={{
          flex: 1,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};