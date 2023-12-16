import {StyleSheet, TouchableOpacity, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {addTimes, numberToFixedLength, secsToTime} from "../../../shared/lib/utils";

interface WeekDayLessonProps {
  lesson: LessonWithMark | null;
  onPressHandler?: (lesson: LessonData) => void;
  isTeacher?: boolean;
}

export const DayLesson = ({lesson, onPressHandler, isTeacher}: WeekDayLessonProps) => {
  const startTime = lesson?.time || '';
  const endTime = lesson?.time ? addTimes(lesson.time, secsToTime(45*60)) : '';
  const hasHomeTask = lesson?.task?.trim()?.length;

  return (
    <TouchableOpacity onPress={onPressHandler && lesson ? () => onPressHandler(lesson) : () => {}}>
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          {startTime && endTime && <View>
            <View style={styles.timeItem}>
              <CustomText text={startTime.substring(0, 2)} type={'paragraph'}/>
              <CustomText text={startTime.substring(3, 5)} type={'small'}/>
            </View>
            <View style={styles.timeItem}>
              <CustomText text={endTime.substring(0, 2)} type={'paragraph'}/>
              <CustomText text={endTime.substring(3, 5)} type={'small'}/>
            </View>
          </View>}
        </View>
        <View style={styles.subjectContainer}>
          <CustomText text={lesson?.subject?.toString() || ''} type={'title'} />
        </View>
        <View style={styles.classroomContainer}>
          <CustomText text={lesson?.classroom ? `каб. ${lesson.classroom}` : ''} type={'small'} />
        </View>
        <View style={styles.hometaskContainer}>
          {hasHomeTask ? <View style={styles.hometaskIndicator}></View> : <></>}
        </View>
        <View style={styles.markContainer}>
          {isTeacher ? <CustomText text={lesson?.nclass ? `"${lesson.nclass}"` : ''} type={'paragraph'}/> :
            lesson?.mark ? <MarkCircle mark={lesson?.mark || 0} size={40} /> : <></>}
        </View>
      </View>
    </TouchableOpacity>
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
    flex: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  classroomContainer: {
    flex: 2
  },
  markContainer: {
    flex: 1.5
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