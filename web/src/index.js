import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { AppRegistry } from "react-native";
import Router from "common/Router";
import { createBrowserApp } from "@react-navigation/web";

AppRegistry.registerComponent("name", () => createBrowserApp(Router));
AppRegistry.runApplication("name", {
  rootTag: document.getElementById("root"),
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
