
import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function HomeHeader() {
    const { colors, spacing, radius, typography } = useTheme();


    return (
        <Box style={[styles.container, { marginTop: spacing.md }]} >
            <Pressable style={styles.section1} onPress={() => router.push("/wallet")}>
                <Text style={{
                    color: colors.textPrimary,
                    fontSize: typography.h2.fontSize,
                    fontFamily: typography.h1.fontFamily
                }}>Account 1</Text>
                {/* <Ionicons name="arrow-" color={"#ffff"} size={24} /> */}
            </Pressable>
            <View style={styles.section2}>
                <Pressable onPress={()=>router.push("/receive")}>
                    <Ionicons name="copy" color={colors.textSecondary} size={24} />
                </Pressable>
                <Pressable onPress={()=>router.push("/scan")}>
                    <Ionicons name="scan" color={colors.textSecondary} size={24} />
                </Pressable>
                <Pressable>
                    <Ionicons name="menu" color={colors.textSecondary} size={30} />
                </Pressable>
            </View>
        </Box>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    section1: {
        flexDirection: "row",
    },

    section2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    }
})
