import {StyleSheet, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkCircle} from "../../../shared/ui/MarkCircle";

interface WeekDayLessonProps {
  lesson: any
}

export const DayLesson = ({lesson}: WeekDayLessonProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>

      </View>
      <View style={styles.subjectContainer}>
        <CustomText text={lesson?.subject} type={'paragraph'} />
      </View>
      <View style={styles.classroomContainer}>
        <CustomText text={lesson?.classroom} type={'small'} />
      </View>
      <View style={styles.hometaskContainer}>
        {!!lesson?.hometask ? <View style={styles.hometaskIndicator}></View> : <></>}
      </View>
      <View style={styles.markContainer}>
        {lesson?.mark ? <MarkCircle mark={lesson?.mark} size={25} /> : <></>}
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
  timeContainer: {
    flex: 2,
    borderLeftWidth: 1,
    borderLeftColor: CustomColors.baseGray
  },
  subjectContainer: {
    flex: 4,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  classroomContainer: {
    flex: 2
  },
  markContainer: {
    flex: 2
  },
  hometaskContainer: {
    flex: 1
  },
  hometaskIndicator: {
    borderRadius: 10,
    backgroundColor: CustomColors.primary,
    width: 10,
    height: 10
  },
})