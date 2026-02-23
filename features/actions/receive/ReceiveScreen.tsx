import { TransactinLayout } from "@/components/layouts/TransactionLayout";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, View } from "react-native";


export function ReceiveScreen() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <TransactinLayout title="Receive">
            <View style={[styles.container, { backgroundColor: colors.card, borderRadius: radius.lg, paddingHorizontal: spacing.md, marginTop: spacing.md }]}>
                <Ionicons name="search" style={{ color: colors.textMuted }} size={20} />
                <TextInput style={[styles.input, { color: colors.textPrimary }]} placeholderTextColor={colors.textMuted} placeholder="Search" />
            </View>
        </TransactinLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
    },
    input: {
        width: "100%",
        outline: "none",
        flex: 1
    }
})