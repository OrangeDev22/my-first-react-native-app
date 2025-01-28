import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-4xl font-pblack">Hola a todos!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-600 font-semibold">
        Go to Home
      </Link>
    </View>
  );
}
