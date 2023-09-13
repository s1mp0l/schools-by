import React from "react";
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TopStatusBar} from "../features/top-status-bar/TopStatusBar";
import {BottomNavBar} from "../features/bottom-nav-bar/BottomNavBar";

export default function AppEntrance() {
    return (
        <View style={styles.container}>
            <TopStatusBar/>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
                <Text style={styles.text}>SCHOOLS.BY</Text>
            </ScrollView>
            <BottomNavBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: '700',
    },
});