import { Link as RouterLink } from "expo-router";
import React from "react";
import {
  Pressable as RNPressable,
  ScrollView as RNScrollView,
  StyleSheet,
  Text as RNText,
  TextInput as RNTextInput,
  TouchableHighlight as RNTouchableHighlight,
  View as RNView,
} from "react-native";
import {
  useCssElement,
  useNativeVariable as useFunctionalVariable,
} from "react-native-css";
import Animated from "react-native-reanimated";
import {
  SafeAreaView as RNSafeAreaView,
  type SafeAreaViewProps as RNSafeAreaViewProps,
} from "react-native-safe-area-context";

const useCssElementUnsafe = useCssElement as unknown as (
  component: unknown,
  props: unknown,
  mapping: unknown,
) => React.ReactElement;

// CSS-enabled Link
export const Link = (
  props: React.ComponentProps<typeof RouterLink> & { className?: string },
) => {
  return useCssElementUnsafe(RouterLink, props, {
    className: "style",
  });
};

Link.Trigger = RouterLink.Trigger;
Link.Menu = RouterLink.Menu;
Link.MenuAction = RouterLink.MenuAction;
Link.Preview = RouterLink.Preview;

// CSS Variable hook
export const useCSSVariable =
  process.env.EXPO_OS !== "web"
    ? useFunctionalVariable
    : (variable: string) => `var(${variable})`;

// View
export type ViewProps = React.ComponentProps<typeof RNView> & {
  className?: string;
};

export const View = (props: ViewProps) => {
  return useCssElementUnsafe(RNView, props, { className: "style" });
};
View.displayName = "CSS(View)";

// SafeAreaView
export const SafeAreaView = (
  props: RNSafeAreaViewProps & { className?: string },
) => {
  return useCssElementUnsafe(RNSafeAreaView, props, { className: "style" });
};
SafeAreaView.displayName = "CSS(SafeAreaView)";

// Text
export const Text = (
  props: React.ComponentProps<typeof RNText> & { className?: string },
) => {
  return useCssElementUnsafe(RNText, props, { className: "style" });
};
Text.displayName = "CSS(Text)";

// ScrollView
export const ScrollView = (
  props: React.ComponentProps<typeof RNScrollView> & {
    className?: string;
    contentContainerClassName?: string;
  },
) => {
  return useCssElementUnsafe(RNScrollView, props, {
    className: "style",
    contentContainerClassName: "contentContainerStyle",
  });
};
ScrollView.displayName = "CSS(ScrollView)";

// Pressable
export const Pressable = (
  props: React.ComponentProps<typeof RNPressable> & { className?: string },
) => {
  return useCssElementUnsafe(RNPressable, props, { className: "style" });
};
Pressable.displayName = "CSS(Pressable)";

// TextInput
export const TextInput = (
  props: React.ComponentProps<typeof RNTextInput> & { className?: string },
) => {
  return useCssElementUnsafe(RNTextInput, props, { className: "style" });
};
TextInput.displayName = "CSS(TextInput)";

// AnimatedScrollView
export const AnimatedScrollView = (
  props: React.ComponentProps<typeof Animated.ScrollView> & {
    className?: string;
    contentClassName?: string;
    contentContainerClassName?: string;
  },
) => {
  return useCssElementUnsafe(Animated.ScrollView, props, {
    className: "style",
    contentClassName: "contentContainerStyle",
    contentContainerClassName: "contentContainerStyle",
  });
};

// TouchableHighlight with underlayColor extraction
function XXTouchableHighlight(
  props: React.ComponentProps<typeof RNTouchableHighlight>,
) {
  const { underlayColor, ...style } =
    (StyleSheet.flatten(props.style) as any) || {};
  return (
    <RNTouchableHighlight
      underlayColor={underlayColor}
      {...props}
      style={style}
    />
  );
}

export const TouchableHighlight = (
  props: React.ComponentProps<typeof RNTouchableHighlight>,
) => {
  return useCssElementUnsafe(XXTouchableHighlight, props, {
    className: "style",
  });
};
TouchableHighlight.displayName = "CSS(TouchableHighlight)";
