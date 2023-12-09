import {ReactNode} from 'react';
import {StyleSheet, View} from "react-native";

interface Props {
  children: ReactNode,
}

export const PageLayout = ({children}: Props) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    gap: 10,
  },
})