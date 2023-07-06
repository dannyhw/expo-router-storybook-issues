import Constants from "expo-constants";
import { View } from "react-native";

export default () => {
  const StorybookUI = require("../.storybook").default;
  const storybookEnabled = Constants.expoConfig?.extra?.STORYBOOK_ENABLED;

  if (storybookEnabled) {
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  }

  return <></>;
};
