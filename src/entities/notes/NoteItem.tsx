import {StyleSheet, TouchableOpacity, View} from "react-native";
import {useAppDispatch} from "../../app/hooks";
import {updateNoteSeenStatus} from "../../features/user/store/user-thunks";
import {CustomText} from "../../shared/ui/CustomText";
import {CustomColors} from "../../shared/lib/constants";


export const NoteItem = ({ note }: { note: NoteData }) => {
  const dispatch = useAppDispatch();

  const handlePress = () => {
    if (!note.seenStatus) dispatch(updateNoteSeenStatus(note.id))
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        ...styles.container,
        opacity: note.seenStatus ? 0.5 : 1
    }}>
        <View style={styles.textContainer}>
          <CustomText text={note.title} type={'subTitle'} />
          <CustomText text={note.text} type={'paragraph'} />
        </View>
        <View style={{
          ...styles.indicatorCircle,
          backgroundColor: note.seenStatus ? CustomColors.secondary : CustomColors.primary
        }}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    flex: 1,
    gap: 20,
    flexDirection: 'row',
    backgroundColor: CustomColors.baseGray,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 5
  },
  indicatorCircle: {
    width: 10,
    height: 10,
    borderRadius: 20,
  }
});