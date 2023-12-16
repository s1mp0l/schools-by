import {ReactNode} from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    TouchableOpacity, ViewStyle
} from "react-native";

interface Props {
    children: ReactNode;
    onPress?: () => void;
    styles?: ViewStyle;
}

export const IconButton = ({ children, onPress, styles }: Props) => {
    return (
        <TouchableOpacity onPress={onPress ?? (()=>{})} style={{...styles1?.iconBtn, ...styles}}>
            {children}
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