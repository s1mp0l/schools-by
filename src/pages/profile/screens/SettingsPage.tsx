import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View
} from "react-native";
import {useAppSelector} from "../../../app/hooks";
import {CustomText} from "../../../shared/ui/CustomText";
import {PageLayout} from "../../../shared/ui/PageLayout";
import {CustomColors} from "../../../shared/lib/constants";
import {userTypeNameMap} from "../../../features/user/lib/constants";
import {IconButton} from "../../../shared/ui/IconButton";
import GlobeSvg from '../../../../assets/icons/globe.svg';
import SunSvg from '../../../../assets/icons/sun.svg';
import MoonSvg from '../../../../assets/icons/moon.svg';
import TypeSvg from '../../../../assets/icons/type.svg';
import BellSvg from '../../../../assets/icons/bell.svg';
import MessageSvg from '../../../../assets/icons/message-circle.svg';
import VolumeSvg from '../../../../assets/icons/volume-2.svg';
import PhoneSvg from '../../../../assets/icons/smartphone.svg';
import {useState} from "react";
import {callNumber} from "../../../shared/lib/utils";
import {CallPhone} from "../../../shared/ui/CallPhone";

export const SettingsPage = () => {
  const {data, isParent, parentData} = useAppSelector(state => state.user);
  const user = isParent ? parentData.user : data.user;

  const [lang, setLang] = useState( 'системный');
  const [darkTheme, setDarkTheme] = useState(false);
  const [font, setFont] = useState( 'системный');
  const [noteOn, setNoteOn] = useState(true);
  const [pushOn, setPushOn] = useState(false);
  const [volOn, setVolOn] = useState(true);
  const [vibOn, setVibOn] = useState(false);

  const userType: UserType = user.userType.trim() as UserType;
  const imageSrc: Record<UserType, any> = {
    'teacher': require(`../../../../assets/teacherAvatarLarge.png`),
    'student': require(`../../../../assets/studentAvatarLarge.png`),
    'parent': require(`../../../../assets/parentAvatarLarge1.png`)
  }

  return (
    <ScrollView style={{width: '100%'}}>
      <ImageBackground source={imageSrc[userType]} style={{width: '100%', height: 200}}>
        <View style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: 200,
        }}/>
        <View style={{
          position: 'absolute',
          left: 10, bottom: 20,
        }}>
          <CustomText text={`${user?.firstName} ${user?.lastName}`} type={'main'} color={'white'}/>
        </View>
      </ImageBackground>
      <PageLayout>
        <View>
          <CustomText text={'Аккаунт'} type={'main'} />
          <View style={{
            paddingVertical: 10,
            gap: 5,
            borderBottomWidth: 1,
            borderBottomColor: 'black'
          }}>
            <CustomText text={'Номер телефона'} type={'title'} />
            <CallPhone phoneNumber={user?.phoneNumber}/>
          </View>
          <View style={{
            paddingVertical: 10,
            gap: 5,
            borderBottomWidth: 1,
            borderBottomColor: 'black'
          }}>
            <CustomText text={'О себе'} type={'title'}/>
            <CustomText text={userTypeNameMap.get(userType) || ''} type={'subTitle'} color={CustomColors.darkGray}/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomText text={'Язык и перевод'} type={'main'} />
          <View>
            <View style={styles.buttonInner}>
              <IconButton>
                <GlobeSvg width={40} height={40} />
                <View>
                  <CustomText text={'Язык'} type={'title'} color={CustomColors.baseGray}/>
                  <CustomText text={lang} type={'paragraph'} color={CustomColors.baseGray}/>
                </View>
              </IconButton>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomText text={'Оформление'} type={'main'} />
          <View style={styles.buttonInner}>
            <IconButton>
              {darkTheme ?
                <MoonSvg width={40} height={40} /> :
                <SunSvg width={40} height={40} />}
              <View>
                <CustomText text={'Тема'} type={'title'} color={CustomColors.baseGray}/>
                <CustomText text={darkTheme ? 'темная' : 'светлая'} type={'paragraph'} color={CustomColors.baseGray}/>
              </View>
            </IconButton>
            <Switch disabled={true} value={!darkTheme} onChange={() => setDarkTheme(prevState => !prevState)}/>
          </View>
          <View style={styles.buttonInner}>
            <IconButton>
              <TypeSvg width={40} height={40} />
              <View>
                <CustomText text={'Шрифт'} type={'title'} color={CustomColors.baseGray}/>
                <CustomText text={font} type={'paragraph'} color={CustomColors.baseGray}/>
              </View>
            </IconButton>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomText text={'Уведомления и звуки'} type={'main'} />
          <View style={styles.buttonInner}>
            <IconButton>
              <BellSvg width={40} height={40}/>
              <View>
                <CustomText text={'Уведомления'} type={'title'} />
              </View>
            </IconButton>
            <Switch value={noteOn} onChange={() => setNoteOn(prevState => !prevState)}/>
          </View>
          <View style={styles.buttonInner}>
            <IconButton>
              <MessageSvg width={40} height={40}/>
              <View>
                <CustomText text={'Push-уведомления'} type={'title'} />
              </View>
            </IconButton>
            <Switch value={pushOn} onChange={() => setPushOn(prevState => !prevState)}/>
          </View>
          <View style={styles.buttonInner}>
            <IconButton>
              <VolumeSvg width={40} height={40}/>
              <View>
                <CustomText text={'Звуки'} type={'title'} />
              </View>
            </IconButton>
            <Switch value={volOn} onChange={() => setVolOn(prevState => !prevState)}/>
          </View>
          <View style={styles.buttonInner}>
            <IconButton>
              <PhoneSvg width={40} height={40}/>
              <View>
                <CustomText text={'Вибрация'} type={'title'} />
              </View>
            </IconButton>
            <Switch value={vibOn} onChange={() => setVibOn(prevState => !prevState)}/>
          </View>
        </View>
      </PageLayout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    gap: 10,
  },
  buttonInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})