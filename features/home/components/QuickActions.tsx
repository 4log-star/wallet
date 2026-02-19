import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text } from "react-native";


type IconName = keyof typeof Ionicons.glyphMap;

export function QuickActions() {
    const { colors, spacing, radius, typography } = useTheme();
    const actions: { action: string, id: string, icon: IconName }[] = [
        {
            id: "1",
            icon: "cash-outline",
            action: "Fund"
        },
        {
            id: "2",
            icon: "sync-circle-outline",
            action: "Swap"
        },
        {
            id: "3",
            icon: "send-outline",
            action: "Send"
        },
        {
            id: "4",
            icon: "arrow-down-left-box-outline",
            action: "Receive"
        },
    ]

    return (
        <Box style={[styles.container, { padding: spacing.lg, marginTop: spacing.md }]}>
            {
                actions.map((action) =>
                    <Pressable key={action.id} style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: "rgba(255,255,255,0.04)",
                            borderRadius: radius.md,
                            borderWidth: 1,
                            borderColor: "rgba(255,255,255,0.08)",
                            opacity: pressed ? 0.7 : 1,
                        },
                    ]}>
                        <Ionicons name={action.icon} color={colors.primary} size={24} />
                        <Text style={[{ color: colors.textPrimary, fontSize: typography.button.fontSize, }]}>{action.action}</Text>
                    </Pressable>
                )
            }
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 14
    },
    button: {
        flex: 1,
        height: 88,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 8

    }
})