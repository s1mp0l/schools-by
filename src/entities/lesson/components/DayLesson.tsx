import {StyleSheet, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {addMinutes, numberToFixedLength} from "../../../shared/lib/utils";

interface WeekDayLessonProps {
  lesson: any
}

export const DayLesson = ({lesson}: WeekDayLessonProps) => {
  console.log(lesson?.time)

  const startTime = (lesson?.time ? (lesson.time as Date) : null);
  const endTime = startTime && addMinutes(startTime, 45);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        {startTime && endTime && <View>
          <View style={styles.timeItem}>
            <CustomText text={numberToFixedLength(startTime?.getHours(), 2) || ''} type={'paragraph'}/>
            <CustomText text={numberToFixedLength(startTime?.getMinutes(), 2) || ''} type={'small'}/>
          </View>
          <View style={styles.timeItem}>
            <CustomText text={numberToFixedLength(endTime?.getHours(), 2)  || ''} type={'paragraph'}/>
            <CustomText text={numberToFixedLength(endTime?.getMinutes(), 2) || ''} type={'small'}/>
          </View>
        </View>}
      </View>
      <View style={styles.subjectContainer}>
        <CustomText text={lesson?.subject} type={'title'} />
      </View>
      <View style={styles.classroomContainer}>
        <CustomText text={lesson?.classroom ? `каб. ${lesson.classroom}` : ''} type={'small'} />
      </View>
      <View style={styles.hometaskContainer}>
        {!!lesson?.hometask ? <View style={styles.hometaskIndicator}></View> : <></>}
      </View>
      <View style={styles.markContainer}>
        {lesson?.mark ? <MarkCircle mark={lesson?.mark} size={40} /> : <></>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: CustomColors.baseGray,
    borderBottomWidth: 2,
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
  timeItem: {
    flexDirection: 'row',
    gap: 2
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
    flex: 1
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