import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, View } from "react-native";


type SwapSectionProps ={
    type : "From" | "To";
}

export function SwapSection({ type }: SwapSectionProps) {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <Box style={{ backgroundColor: colors.card, padding: spacing.md, marginTop: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md }}>
            <View style={styles.container}>
                <Text style={{ color: colors.textMuted }}>
                    {type}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                    <Ionicons name="wallet" color={colors.textMuted} size={15} />
                    <Text style={{ color: colors.textMuted }}>0</Text>
                </View>
            </View>
            <View style={[styles.container, { marginTop: spacing.sm }]}>
                <View style={styles.gapContainer}>
                    <Image source={require("../../../../assets/images/favicon.png")} style={styles.imageContainer} />
                    <View style={styles.container2}>
                        <View style={{ flexDirection: 'row', alignItems: "center", gap: 2 }}>
                            <Text style={{ color: colors.textPrimary, fontSize: typography.body.fontSize, fontFamily: typography.h2.fontFamily }}>BNB</Text>
                            <Ionicons name="chevron-down" color={colors.textMuted} size={18} />
                        </View>

                        <Text style={{ color: colors.textMuted }}>BNB Smart Chain</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    <TextInput value="0" style={{ color: colors.textMuted, fontSize: typography.h2.fontSize, fontFamily: typography.h1.fontFamily }} />
                    <Text style={{ color: colors.textMuted }}>$0</Text>
                </View>
            </View>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container2: {
        flexDirection: "column",
        justifyContent: 'space-between',
    },
    gapContainer :{
        flexDirection: "row",
        alignItems: 'center',
        gap : 10
    },
    imageContainer: {
        width: 36,
        height: 36,
        borderRadius: 18
    }
})