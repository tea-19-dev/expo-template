import { PageContainer } from "@/components/layout/PageContainer";
import { useTheme } from "@/providers/theme-provider";
import { Pressable, SafeAreaView, Text, View } from "@/tw";

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useTheme();
  const nextColorScheme = colorScheme === "dark" ? "light" : "dark";

  return (
    <SafeAreaView
      className="bg-background dark:bg-background-dark flex-1"
      edges={["top", "right", "left"]}
    >
      <PageContainer>
        <View className="flex-1 px-6 py-15">
          <View className="border-border dark:border-border-dark bg-card dark:bg-card-dark w-full gap-4 rounded-3xl border p-6 shadow-sm">
            <View className="min-w-0 gap-1">
              <Text className="text-foreground/70 dark:text-foreground-dark/80 text-sm">
                Current Theme
              </Text>
              <Text className="text-foreground dark:text-foreground-dark text-lg font-semibold capitalize">
                {colorScheme}
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              className="bg-primary dark:bg-primary-dark items-center rounded-xl px-5 py-3 active:opacity-80"
              onPress={toggleColorScheme}
            >
              <Text className="text-primary-foreground dark:text-primary-foreground-dark text-sm font-semibold">
                Switch to {nextColorScheme}
              </Text>
            </Pressable>
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
}
