import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";


export function BalanceCard() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <Box style={{ padding: spacing.lg, marginTop: spacing.md }}>
            <View style={[styles.container, { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, padding: spacing.md, borderRadius: radius.lg }]}>
                <LinearGradient colors={[
                    "rgba(139,92,246,0.12)",
                    "rgba(139,92,246,0.05)",
                    "transparent",
                ]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{
                        position: "absolute",
                        width: 250,
                        height: 250,
                        borderRadius: 200,
                        top: -20,
                    }} />
                <Text style={{ color: colors.textPrimary, fontSize: typography.h1.fontSize, fontFamily: typography.h1.fontFamily }}>$0.00</Text>
                <Text style={{ color: colors.textSecondary, fontSize: typography.body.fontSize }}>$0.00 (0.00%)</Text>
            </View>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})