import { NativeTabs } from "expo-router/unstable-native-tabs";

import { useTheme } from "@/providers/theme-provider";

const tabMeta = {
  index: {
    label: "Home",
    sfIcon: {
      default: "house",
      selected: "house.fill",
    },
    mdIcon: "home",
  },
  settings: {
    label: "Settings",
    sfIcon: {
      default: "gearshape",
      selected: "gearshape.fill",
    },
    mdIcon: "settings",
  },
} as const;

export default function TabLayout() {
  const { colorScheme } = useTheme();
  const isDark = colorScheme === "dark";
  const tabColor = isDark ? "#38bdf8" : "#2563eb";
  const tabMutedColor = isDark ? "#94a3b8" : "#64748b";
  const tabIndicatorColor = isDark
    ? "rgba(56, 189, 248, 0.2)"
    : "rgba(37, 99, 235, 0.16)";
  const tabBarColor = isDark
    ? "rgba(15, 23, 42, 0.94)"
    : "rgba(255, 255, 255, 0.96)";

  return (
    <NativeTabs
      backgroundColor={tabBarColor}
      disableTransparentOnScrollEdge
      indicatorColor={tabIndicatorColor}
      iconColor={{
        default: tabMutedColor,
        selected: tabColor,
      }}
      labelStyle={{
        default: {
          color: tabMutedColor,
          fontSize: 11.5,
          fontWeight: "700",
        },
        selected: {
          color: tabColor,
          fontSize: 11.5,
          fontWeight: "700",
        },
      }}
      tintColor={tabColor}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon
          md={tabMeta.index.mdIcon}
          sf={{
            default: tabMeta.index.sfIcon.default,
            selected: tabMeta.index.sfIcon.selected,
          }}
        />
        <NativeTabs.Trigger.Label>
          {tabMeta.index.label}
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon
          md={tabMeta.settings.mdIcon}
          sf={{
            default: tabMeta.settings.sfIcon.default,
            selected: tabMeta.settings.sfIcon.selected,
          }}
        />
        <NativeTabs.Trigger.Label>
          {tabMeta.settings.label}
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
