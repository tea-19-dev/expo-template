import "@/global.css";

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "@/providers/theme-provider";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
