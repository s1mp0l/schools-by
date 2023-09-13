import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import BackSvg from '../../../assets/icons/arrow-left.svg'
import SettingsSvg from '../../../assets/icons/settings.svg'
import {IconButton} from "../../shared/ui/IconButton";

export const TopStatusBar = () => {
    return (
        <View style={styles.topStatusBar}>
            <IconButton>
                <BackSvg width={40} height={40} color={'black'}/>
            </IconButton>
            <Text style={styles.titleText}>Авторизация</Text>
            <IconButton>
                <SettingsSvg width={40} height={40}/>
            </IconButton>
        </View>
    );
};

const styles = StyleSheet.create({
    topStatusBar: {
        flexDirection: 'row',
        paddingTop: 35,
        height: 90,
        width: '100%',
        backgroundColor: '#8EC4FF',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})