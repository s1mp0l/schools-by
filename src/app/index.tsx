import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {EntranceNavigator} from "../processes/entrance/EntranceNavigation";
import {NavigationContainer} from "@react-navigation/native";

export default function AppEntrance() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <EntranceNavigator />
        </NavigationContainer>
      </Provider>
    );
}