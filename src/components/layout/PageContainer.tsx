import React from "react";

import { View, type ViewProps } from "@/tw";
import { cn } from "@/utils/cn";

interface PageContainerProps extends ViewProps {
  innerClassName?: string;
}

export const PageContainer = ({
  className,
  innerClassName,
  children,
  ...rest
}: PageContainerProps) => {
  return (
    <View
      {...rest}
      className={cn(
        "bg-background dark:bg-background-dark min-h-0 flex-1 pt-2",
        className,
      )}
    >
      <View
        className={cn(
          "web:max-w-[1120px] min-h-0 w-full flex-1 self-center",
          innerClassName,
        )}
      >
        {children}
      </View>
    </View>
  );
};
