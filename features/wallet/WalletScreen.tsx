import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function WalletScreen() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <Box>
                <Pressable>
                    <Ionicons name="arrow-back" color={colors.textPrimary} />
                </Pressable>
                <Text>Wallets</Text>
                <View>
                    <Pressable>
                        <Ionicons name="notifications" />
                    </Pressable>
                    <Pressable>
                        <Ionicons name="settings" />
                    </Pressable>
                </View>
            </Box>
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
    }
})