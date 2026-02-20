import { useTheme } from "@/theme/ThemeProvider";
import { View } from "react-native";

export function ScreenContainer({
    children,
    noPadding,
}: {
    children: React.ReactNode;
    noPadding?: boolean;
}) {
    const { spacing } = useTheme();

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: noPadding ? 0 : spacing.md,
                paddingVertical : noPadding ? 0 : spacing.sm
            }}
        >
            {children}
        </View>
    );
}