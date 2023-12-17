import {View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState} from "../../../app/store";
import {SelectStudentItem} from "./SelectStudentItem";
import {setParentActiveStudent} from "../store/user-store";

export const SelectStudent = () => {
  const {
    parentStudents,
    selectedStudentIndex
  } = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const onPressHandler = (i: number) => {
    dispatch(setParentActiveStudent(i));
  }

  const studentItems = parentStudents.map((s, i) =>
    <SelectStudentItem
      student={s}
      onPress={() => onPressHandler(i)}
      selected={i === selectedStudentIndex} key={i}
      index={i}
    />
  )

  return (
    <View style={{gap: 15}}>
      {studentItems}
    </View>
  );
};