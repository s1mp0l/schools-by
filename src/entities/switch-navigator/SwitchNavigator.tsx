import {View} from "react-native";
import {CustomColors} from "../../shared/lib/constants";
import SwitchSelector from "react-native-switch-selector";

type Props = {
  options: any[],
  onPressHandler?: (value: string) => void;
  value?: number;
}

export const SwitchNavigator = ({options, onPressHandler, value}: Props) => {
  return (
    <View style={{paddingHorizontal: options.length > 2 ? 20 : 60, marginVertical: 10}}>
      <SwitchSelector
        initial={value || 0}
        backgroundColor={CustomColors.primary}
        textColor={CustomColors.lightGray}
        selectedColor={'black'}
        buttonColor={'white'}
        hasPadding
        valuePadding={5}
        options={options}
        onPress={onPressHandler}
      />
    </View>
  );
};