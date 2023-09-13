import React from 'react';
import {StyleSheet, View} from "react-native";
import DiarySvg from "../../../assets/icons/book.svg";
import MarksSvg from "../../../assets/icons/trending-up.svg";
import ProfileSvg from "../../../assets/icons/user.svg";
import {IconButton} from "../../shared/ui/IconButton";

export const BottomNavBar = () => {

    return (
        <View style={styles.bottomNavBar}>
            <IconButton>
                <DiarySvg width={40} height={40}/>
            </IconButton>
            <IconButton>
                <MarksSvg width={40} height={40}/>
            </IconButton>
            <IconButton>
                <ProfileSvg width={40} height={40}/>
            </IconButton>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNavBar: {
        height: 60,
        paddingVertical: 5,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#8EC4FF',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})