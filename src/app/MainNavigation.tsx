import React from "react";
import {ProgressNavigator, ProgressTabParamList} from "../processes/progress/ProgressNavigator";
import {DiaryNavigator, DiaryTabParamList} from "../processes/diary/DiaryNavigator";
import {ProfileNavigator, ProfileStackParamList} from "../processes/profile/ProfileNavigator";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DiarySvg from "../../assets/icons/book.svg";
import MarksSvg from "../../assets/icons/trending-up.svg";
import ProfileSvg from "../../assets/icons/user.svg";
import DiarySvgActive from "../../assets/icons/book-active.svg";
import MarksSvgActive from "../../assets/icons/trending-up-active.svg";
import ProfileSvgActive from "../../assets/icons/user-active.svg";
import {CustomColors} from "../shared/lib/constants";
import {ProgressTeacherNavigator, TeacherNavigatorParamList} from "../processes/progress/ProgressTeacherNavigator";
import {useAppSelector} from "./hooks";
import {RootState} from "./store";
import {NavigatorScreenParams} from "@react-navigation/native";

export type RootTabParamList = {
  DiaryStack: NavigatorScreenParams<DiaryTabParamList>,
  ProgressStack: NavigatorScreenParams<TeacherNavigatorParamList | ProgressTabParamList>,
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export function MainNavigation() {
  const {data} = useAppSelector((state: RootState) => state.user);
  const isTeacher = data?.user?.userType === 'teacher';

  return (
      <Tab.Navigator
        initialRouteName={'ProfileStack'}
        screenOptions={{
          tabBarStyle: {
            paddingVertical: 5,
            backgroundColor: CustomColors.secondary,
          },
          tabBarLabelStyle: {
            paddingBottom: 5
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: CustomColors.primary,
          headerShown: false,
          // tabBarShowLabel: false
        }}
      >
        <Tab.Screen
          name="DiaryStack"
          component={DiaryNavigator}
          options={{
            tabBarLabel: "Дневник",
            tabBarIcon: ({focused}) => focused ?
              <DiarySvgActive width={30} height={30}/> :
              <DiarySvg width={30} height={30}/>
          }}
        />
        <Tab.Screen
          name="ProgressStack"
          component={isTeacher ? ProgressTeacherNavigator : ProgressNavigator}
          options={{
            tabBarLabel: "Успеваемость",
            tabBarIcon: ({focused}) => focused ?
              <MarksSvgActive width={30} height={30}/> :
              <MarksSvg width={30} height={30}/>
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileNavigator}
          options={{
            tabBarLabel: "Профиль",
            tabBarIcon: ({focused}) => focused ?
              <ProfileSvgActive width={30} height={30}/> :
              <ProfileSvg width={30} height={30}/>
          }}
        />
      </Tab.Navigator>
  );
}