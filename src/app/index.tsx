import React from "react";
import {Provider} from "react-redux";
import {store} from "./store";
import {Navigation} from "./Navigation";

export default function AppEntrance() {
    return (
      <Provider store={store}>
          <Navigation />
      </Provider>
    );
}