import { useTheme } from "@/theme/ThemeProvider";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function TrendingScreen() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <SafeAreaView style={[style?.box, { backgroundColor: colors.background }]} >

        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    box: {
        width: "100%",
        height: "100%",
    }
})