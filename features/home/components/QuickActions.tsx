import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Href, router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";



type actionProp = {
    id: string;
    icon: keyof typeof Ionicons.glyphMap;
    action: string;
    route: Href;
};

export function QuickActions() {
    const { colors, spacing, radius, typography } = useTheme();
    const actions: actionProp[] = [
        {
            id: "1",
            icon: "cash-outline",
            action: "Fund",
            route: "/fund"
        },
        {
            id: "2",
            icon: "sync-circle-outline",
            action: "Swap",
            route: "/swap"
        },
        {
            id: "3",
            icon: "send-outline",
            action: "Send",
            route: "/send"
        },
        {
            id: "4",
            icon: "arrow-down-left-box-outline",
            action: "Receive",
            route: "/receive"
        },
    ] as const;

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
                    ]} onPress={() => router.push(action.route)} >
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