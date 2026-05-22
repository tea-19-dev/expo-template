import React, {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Appearance,
  useColorScheme as useSystemColorScheme,
} from "react-native";

type ColorScheme = "light" | "dark";

const WEB_COLOR_TOKENS = [
  "foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "background",
  "background-secondary",
  "card",
  "card-foreground",
  "card-border",
  "popover",
  "popover-foreground",
  "text-primary",
  "text-secondary",
  "text-muted",
  "border",
  "input",
  "ring",
  "divider",
] as const;

interface ThemeContextValue {
  colorScheme: ColorScheme;
  setColorScheme: (nextColorScheme: ColorScheme) => void;
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function resolveSystemColorScheme(
  systemColorScheme: ReturnType<typeof useSystemColorScheme>,
) {
  return systemColorScheme === "dark" ? "dark" : "light";
}

interface ThemeProviderProps {
  children: ReactNode;
}

function applyWebColorTokens(colorScheme: ColorScheme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const themeSuffix = colorScheme === "dark" ? "-dark" : "";

  root.dataset.theme = colorScheme;
  root.style.setProperty("color-scheme", colorScheme);

  for (const token of WEB_COLOR_TOKENS) {
    const selectedValue = `var(--${token}${themeSuffix})`;
    root.style.setProperty(`--color-${token}`, selectedValue);
    root.style.setProperty(`--color-${token}-dark`, selectedValue);
  }
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useSystemColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() =>
    resolveSystemColorScheme(systemColorScheme),
  );

  useEffect(() => {
    if (typeof Appearance.setColorScheme === "function") {
      Appearance.setColorScheme(colorScheme);
    }

    applyWebColorTokens(colorScheme);
  }, [colorScheme]);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      colorScheme,
      setColorScheme,
      toggleColorScheme: () => {
        setColorScheme((currentColorScheme) =>
          currentColorScheme === "dark" ? "light" : "dark",
        );
      },
    }),
    [colorScheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
