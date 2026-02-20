import { ScreenContainer } from "@/components/layouts/ScreenContainer";
import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddWallet } from "./components/AddWallet";
import { WalletSection } from "./components/WalletSection";

export function WalletScreen() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <ScreenContainer>
                <Box style={styles.header}>
                    <Pressable onPress={()=>router.back()}>
                        <Ionicons name="arrow-back" color={colors.textMuted} size={26} />
                    </Pressable>
                    <Text style={{ color: colors.textPrimary, fontSize: typography.h2.fontSize }}>Wallets</Text>
                    <View style={styles.rightSection}>
                        <Pressable>
                            <Ionicons name="notifications" color={colors.textMuted} size={24} />
                        </Pressable>
                        <Pressable>
                            <Ionicons name="settings" color={colors.textMuted} size={24} />
                        </Pressable>
                    </View>
                </Box>
                <WalletSection />
            </ScreenContainer>

            <AddWallet />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rightSection: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    }
})