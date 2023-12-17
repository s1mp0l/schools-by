import {ReactNode} from 'react';
import {
    StyleSheet,
    TouchableOpacity, View, ViewStyle
} from "react-native";

interface Props {
    children: ReactNode;
    onPress?: () => void;
    styles?: ViewStyle;
}

export const IconButton = ({ children, onPress, styles }: Props) => {
    return (
        <TouchableOpacity onPress={() => {
            if(onPress) onPress();
        }}>
            <View style={{...styles1?.iconBtn, ...styles}}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const styles1 = StyleSheet.create({
    iconBtn: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
})