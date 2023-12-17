import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {EntranceNavigator} from "../processes/entrance/EntranceNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {Refresher} from "./Refresher";

export default function AppEntrance() {
    return (
      <Provider store={store}>
        <Refresher>
          <NavigationContainer>
            <EntranceNavigator />
          </NavigationContainer>
        </Refresher>
      </Provider>
    );
}