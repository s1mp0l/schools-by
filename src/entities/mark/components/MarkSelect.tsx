import {FlatList, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {MarkCircle} from "../../../shared/ui/MarkCircle";
import {CustomColors} from "../../../shared/lib/constants";
import {LightBlockContainer} from "../../../shared/ui/LightBlockContainer";

interface Props {
  selectedValue: number;
  onChangeValue: (m: number) => void;
}

export const MarkSelect = ({selectedValue, onChangeValue}: Props) => {
  const marks = [1,2,3,4,5,6,7,8,9,10];

  return (
    <LightBlockContainer>
      <FlatList
        numColumns={5}
        data={marks}
        renderItem={({item}) =>
          <TouchableOpacity
            onPress={() => onChangeValue(item)}
            style={{flex: 1, justifyContent: 'center', marginVertical: 5}}
          >
            <MarkCircle
              mark={item}
              size={40}
              color={selectedValue === item ? CustomColors.primary : CustomColors.baseGray}
            />
          </TouchableOpacity>
        }
      />
    </LightBlockContainer>
  );
};