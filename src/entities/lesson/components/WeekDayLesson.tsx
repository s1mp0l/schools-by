import {StyleSheet, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkCircle} from "../../../shared/ui/MarkCircle";

interface WeekDayLessonProps {
  lesson: any
}

export const WeekDayLesson = ({lesson}: WeekDayLessonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.subjectContainer}>
        <CustomText text={lesson?.subject} type={'small'} />
        {!!lesson?.hometask ? <View style={styles.hometaskIndicator}></View> : <></>}
      </View>
      <View style={styles.markContainer}>
        {lesson?.mark ? <MarkCircle mark={lesson?.mark} isRectangle={true} size={25} /> : <></>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderColor: CustomColors.baseGray,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  subjectContainer: {
    flex: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hometaskIndicator: {
    borderRadius: 10,
    backgroundColor: CustomColors.primary,
    width: 10,
    height: 10
  },
  markContainer: {
    height: '100%',
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: CustomColors.baseGray
  }
})