import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {SwitchNavigator} from "./SwitchNavigator";

type SwitchNavigatorBarProps = BottomTabBarProps;

export const SwitchNavigatorBar = ({ state, descriptors, navigation }: SwitchNavigatorBarProps) => {
  // const value = state.routes[state.index].key;
  const onPress = (value: string) => {
    const index = state.routes.findIndex(r =>
      r.key === value
    );
    if (index === -1) return;
    const route = state.routes[index];

    const isFocused = state.index === index;

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  const options = state.routes.map((route) => {
    const { options } = descriptors[route.key];
    const label = options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
        ? options.title
        : route.name;

    return {
      label,
      value: route.key
    }
  })

  return <SwitchNavigator options={options} onPressHandler={onPress} value={state.index}/>
}