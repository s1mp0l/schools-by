import {ReactNode} from 'react';
import {GestureResponderEvent, StyleSheet, TouchableOpacity} from "react-native";

interface Props {
    children: ReactNode,
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export const IconButton = ({ children, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress ?? (()=>{})} style={styles.iconBtn}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconBtn: {
        justifyContent: 'center',
    },
})