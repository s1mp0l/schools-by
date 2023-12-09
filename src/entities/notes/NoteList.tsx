import React from 'react';
import {FlatList, View} from "react-native";
import {NoteItem} from "./NoteItem";
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";

export const NoteList = () => {
  const notes = useAppSelector((state: RootState) => state.user.user.notes)

  return (
    <View style={{flex: 1, padding: 10}}>
      <FlatList contentContainerStyle={{ flexGrow: 1 }}
                data={notes}
                renderItem={({ item }) => <NoteItem note={item}/>}
      />
    </View>
  );
};