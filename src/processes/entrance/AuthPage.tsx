import {Button, Image, View} from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import {CustomInputText} from "../../shared/ui/CustomInputText";
import {PageLayout} from "../../shared/ui/PageLayout";
import LogoImage from "../../../assets/DiaryLogoImage.png"
import {useEffect, useState} from "react";
import {fetchUser} from "../../features/user/store/user-thunks";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";
import {CustomColors} from "../../shared/lib/constants";
import {CustomText} from "../../shared/ui/CustomText";
import {EntranceStackParamList} from "./EntranceNavigation";
import {IconButton} from "../../shared/ui/IconButton";
import HideSvg from '../../../assets/icons/hide.svg';
import BlindSvg from '../../../assets/icons/blind.svg';

type EntranceNavigationProp = StackNavigationProp<
  EntranceStackParamList,
  'Auth'
>;

type Props = {
  navigation: EntranceNavigationProp;
};

export const AuthPage = ({ navigation }: Props) => {
  const userType = 'teacher'
  const loginPlaceholder = userType + 'Login1';
  const passwordPlaceholder = userType + 'Password1';

  const dispatch = useAppDispatch();
  const {data, loading, authError} = useAppSelector((state: RootState) => state.user);

  const [login, setLogin] = useState(loginPlaceholder);
  const [password, setPassword] = useState(passwordPlaceholder);

  const [errorMessage, setErrorMessage] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const authButtonHandler = () => {
    const loginData: LoginData = {
      login: login,
      password: password
    };
    dispatch(fetchUser(loginData));
  }

  useEffect(() => {
    if (authError) setErrorMessage(authError);
    if (!loading && data?.user?.id) navigation.navigate('App')
  }, [data, authError]);

  const onChangeLogin = (text: string) => {
    setLogin(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  }

  return (
    <PageLayout>
      <Image source={LogoImage} style={{alignSelf: 'center'}}/>
      <CustomInputText
        label={'Логин'}
        onChangeText={onChangeLogin}
        placeholder={loginPlaceholder}
      />
      <View style={{gap: 5}}>
        <CustomInputText
          label={'Пароль'}
          onChangeText={onChangePassword}
          placeholder={passwordPlaceholder}
          textContentType={'password'}
          hidePassword={hidePassword}
        />
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <IconButton onPress={() => setHidePassword(prevState => !prevState)}>
            {hidePassword ? <HideSvg width={30} height={30}/> : <BlindSvg width={30} height={30} /> }
            <CustomText text={`${hidePassword ? 'Показать' : 'Скрыть'} пароль`} type={'small'} color={CustomColors.darkGray}/>
          </IconButton>
        </View>
      </View>

      <CustomText text={errorMessage} type={'subTitle'} color={CustomColors.error}/>

      <Button title={'Войти'} onPress={authButtonHandler}/>
    </PageLayout>
  );
};