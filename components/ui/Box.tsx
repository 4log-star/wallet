
import { AppTheme } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";
import { View, ViewStyle } from "react-native";

type props = {
    padding?: keyof AppTheme["spacing"],
    background?: keyof AppTheme['colors'],
    radius?: keyof AppTheme["radius"],
    style?: ViewStyle | ViewStyle[],
    children?: React.ReactNode,
}

export const Box = ({
    padding,
    background,
    radius,
    style,
    children,

}: props) => {

    const { spacing, colors, radius: themeRadius } = useTheme();

    return (
        <View style={[
            padding && { padding: spacing[padding] },
            background && { backgroundColor: colors[background] },
            radius && {
                borderRadius: themeRadius[radius],
            },
            style,
        ]}>
            {children}
        </View>
    )
}