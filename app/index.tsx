import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text>Hola a todos!</Text>
      <StatusBar style="auto" />
      <Link
        href="/profile"
        style={{
          color: "blue",
          fontWeight: 600,
        }}
      >
        Go to profile
      </Link>
    </View>
  );
}
