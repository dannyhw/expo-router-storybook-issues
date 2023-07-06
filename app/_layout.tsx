import  { Slot } from "expo-router";
import Constants from "expo-constants";

const storybookEnabled = Constants.expoConfig?.extra?.STORYBOOK_ENABLED;

let RootApp = () => {
    return <Slot />
};

if (storybookEnabled) {
    RootApp = require("../.storybook").default;
}

export default RootApp;