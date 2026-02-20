import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import { Pressable, Text } from "react-native";

export function AddWallet() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <Box style={{borderTopColor : colors.card, borderWidth :1,  padding : spacing.md}}>
        <Pressable style={{ backgroundColor: colors.card, padding: spacing.md, borderRadius: radius.md }}>
            <Text style={{ color: colors.textPrimary,fontSize :typography.body.fontSize, fontFamily : typography.h2.fontFamily, textAlign : "center" }}>Add Wallet</Text>
        </Pressable>
        </Box>

    )
}