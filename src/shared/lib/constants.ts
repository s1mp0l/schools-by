// export const baseApiUrl = 'http://localhost:8080'
export const baseApiUrl = 'http://192.168.0.115:8080'

export const constWeekDayNames = [
  'Воскресенье', 'Понедельник', 'Вторник',
  'Среда', 'Четверг', 'Пятница', 'Суббота'
];

export const constWeekDayNamesShortened = [
  'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
];


export const CustomColors = {
  primary: '#007AFF',
  secondary: '#8EC4FF',
  secondaryLight: '#CEE1F6',
  baseGray: '#D0D0D0',
  lightGray: '#F0F0F0',
  darkGray: '#676767',
  error: '#FA3C6A',
  success: '#00BA88',
  warn: '#E3C045',
}

export const navigatorScreenOptions = {
  headerStyle: {
    backgroundColor: CustomColors.secondary,
  },
  headerTintColor: 'white',
  headerBackTitleVisible: false,
  // headerTitle: (props) => {
  //   return <CustomText text={props.children} type={'main'} color={'white'} />;
  // }
}