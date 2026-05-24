import { PageContainer } from "@/components/layout/PageContainer";
import { SafeAreaView, Text, View } from "@/tw";

export default function HomeScreen() {
  return (
    <SafeAreaView
      className="bg-background dark:bg-background-dark flex-1"
      edges={["top", "right", "left"]}
    >
      <PageContainer>
        <View className="flex-1 items-center px-6 py-15">
          <View className="border-border dark:border-border-dark bg-card dark:bg-card-dark w-full max-w-[560px] gap-5 rounded-3xl border p-8 shadow-sm">
            <Text className="text-foreground dark:text-foreground-dark text-[30px] font-semibold tracking-tight">
              Expo Cross-Platform Template
            </Text>

            <Text className="text-muted-foreground dark:text-muted-foreground-dark text-base leading-relaxed">
              React Native + Expo + NativeWind で iOS / Android / Web
              をまとめて開発できる スターターテンプレートです。
            </Text>
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
}
