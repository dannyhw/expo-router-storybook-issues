import { Link } from "expo-router";
import { View, Text } from "react-native";

import Constants from "expo-constants";
const storybookEnabled = Constants.expoConfig?.extra?.STORYBOOK_ENABLED;

export const Home = () => {
  return (
    <View style={{ paddingTop: 80, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20 }}>root page</Text>
      {storybookEnabled && <Link href="/storybook">Storybook</Link>}
    </View>
  );
};
