import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";


export function SwapDirectionButton() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <View style={[styles.container, {paddingHorizontal: spacing.md}]}>
            <Pressable style={[styles.buttonContainer, { backgroundColor: colors.primaryDark }]}>
                <Ionicons name="swap-vertical" color={colors.textPrimary} size={26} />
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    buttonContainer: {
        position: 'absolute',
        top: 0,
        left: "50%",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        transform : [{translateY : -16}]
    }
})