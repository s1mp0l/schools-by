import {FlatList, StyleSheet, View} from "react-native";
import {CustomColors} from "../../../shared/lib/constants";
import {CustomText} from "../../../shared/ui/CustomText";
import ProgressYearMarksList from "./ProgressYearMarksList";
import {MarkListItem} from "../../../entities/mark/components/MarkListItem";

export const ProgressYearHeader = () => {
  const items: string[] = [
    'I',
    'II',
    'III',
    'IV',
    'Итог',
  ];

  return (
    <View style={styles.header}>
      <View style={styles.rowContainer}>
        <View style={{flex: 3}}>
          <CustomText text={'Предмет'} type={'title'} />
        </View>
        <View style={{flex: 5}}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{justifyContent: 'flex-start'}}
            data={items}
            numColumns={5}
            renderItem={({item}) => <CustomText styles={{flex: 1/5}} text={item} type={'subTitle'}/>}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    borderColor: CustomColors.darkGray,
    borderBottomWidth: 2
  },
  header: {
    gap: 10,
    padding: 15,
    paddingBottom: 0,
    backgroundColor: CustomColors.secondaryLight,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
})