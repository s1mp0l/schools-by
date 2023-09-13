import React, {ReactNode} from 'react';
import {Pressable, StyleSheet} from "react-native";

export const IconButton = ({ children }: { children: ReactNode }) => {
    return (
        <Pressable style={styles.iconBtn}>
            {children}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    iconBtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})