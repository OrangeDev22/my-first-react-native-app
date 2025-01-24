import { Slot, Stack } from "expo-router";
import { Fragment } from "react";
import { Text } from "react-native";
// Import your global CSS file
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
