import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export function WalletSection() {
    const { colors, spacing, radius, typography } = useTheme();

    return (
        <Box style={{ marginTop: spacing.md }}>
            <Text style={{ color: colors.textMuted }} >All Wallets</Text>
            <View style={[{ marginTop: spacing.md, padding: spacing.md, backgroundColor: colors.card, borderRadius: radius.md }, styles.walletBox]}>
                <View style={styles.wallet}>
                    <Ionicons name="wallet" style={{ color: colors.textMuted }} size={24} />
                    <Text style={{ color: colors.textPrimary, fontSize : typography.h2.fontSize }}>Wallet 1</Text>
                </View>
                <Ionicons name="ellipsis-vertical" style={{ color: colors.textMuted }} size={24} />
            </View>
        </Box>
    )
}

const styles = StyleSheet.create({
    walletBox: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    wallet: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    }
})