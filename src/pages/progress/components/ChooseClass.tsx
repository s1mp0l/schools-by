import {View} from "react-native";
import {ChooseClassItem} from "./ChooseClassItem";

export const ChooseClass = () => {
  const classes = [
    {grade: 11, letter: 'А', students: [{}, {}, {}]},
    {grade: 5, letter: 'Б', students: [{}, {}, {}]},
    {grade: 11, letter: 'В', students: [{}]},
    {grade: 11, letter: 'А', students: [{}, {}, {}, {}, {}, {}]},
    {grade: 11, letter: 'А', students: []},
    {grade: 11, letter: 'А', students: null},
  ];

  const classesItems = classes.map(c =>
    <ChooseClassItem classObject={c} />
  );

  return (
    <View style={{gap: 20}}>
      {classesItems}
    </View>
  );
};