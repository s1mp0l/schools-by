import React from 'react';
import {FlatList, View} from "react-native";
import {NoteItem} from "./NoteItem";
import {useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";
import {CustomText} from "../../shared/ui/CustomText";

export const NoteList = () => {
  const {
    data,
    parentData,
    isParent,
  } = useAppSelector((state: RootState) => state.user);

  const notes = isParent ? parentData.user.notes : data.user.notes;

  return (
    <View style={{flex: 1, padding: 10}}>
      {notes.length ? <FlatList contentContainerStyle={{flexGrow: 1}}
                 data={notes}
                 renderItem={({item}) => <NoteItem note={item}/>}
      /> : <CustomText text={'Нет уведомлений'} type={'subTitle'} />}
    </View>
  );
};