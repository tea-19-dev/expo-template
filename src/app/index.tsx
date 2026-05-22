import { PageContainer } from "@/components/layout/PageContainer";
import { useTheme } from "@/providers/theme-provider";
import { Pressable, SafeAreaView, Text, View } from "@/tw";

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useTheme();
  const nextColorScheme = colorScheme === "dark" ? "light" : "dark";

  return (
    <SafeAreaView
      className="bg-background dark:bg-background-dark flex-1"
      edges={["top", "right", "bottom", "left"]}
    >
      <PageContainer>
        <View className="flex-1 items-center justify-center px-6 py-10">
          <View className="border-border dark:border-border-dark bg-card dark:bg-card-dark w-full max-w-[560px] gap-5 rounded-3xl border p-8 shadow-sm">
            <Text className="text-foreground dark:text-foreground-dark text-[30px] font-semibold tracking-tight">
              Expo Cross-Platform Template
            </Text>

            <Text className="text-muted-foreground dark:text-muted-foreground-dark text-base leading-relaxed">
              React Native + Expo + NativeWind で iOS / Android / Web
              をまとめて開発できる スターターテンプレートです。
            </Text>

            <View className="border-border dark:border-border-dark bg-background-secondary dark:bg-background-secondary-dark mt-3 flex-row items-center justify-between gap-4 rounded-2xl border p-4">
              <View className="min-w-0 flex-1 gap-1">
                <Text className="text-muted-foreground dark:text-muted-foreground-dark text-sm">
                  Current Theme
                </Text>
                <Text className="text-foreground dark:text-foreground-dark text-lg font-semibold capitalize">
                  {colorScheme}
                </Text>
              </View>

              <Pressable
                accessibilityRole="button"
                className="bg-primary dark:bg-primary-dark shrink-0 rounded-xl px-5 py-3 active:opacity-80"
                onPress={toggleColorScheme}
              >
                <Text className="text-primary-foreground dark:text-primary-foreground-dark text-sm font-semibold">
                  Switch to {nextColorScheme}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
}
