import { TransactinLayout } from "@/components/layouts/TransactionLayout";
import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";


type optionProps = {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
}


export function FundScreen() {
    const { colors, spacing, radius, typography } = useTheme();

    const options: optionProps[] = [
        {
            icon: 'people',
            title: "P2P"
        },
        {
            icon: 'options',
            title: "All payment methods"
        },
        {
            icon: 'wallet',
            title: "Crypto wallet"
        },
    ]

    return (
        <TransactinLayout title="Fund your wallet">
            <Text style={{ color: colors.textMuted, fontFamily: typography.h1.fontFamily, marginTop: spacing.xl }} >All options</Text>
            <Box style={{ backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md, marginTop : spacing.md }}>
                {options?.map((opt) =>
                    <View key={opt.title} style={[styles.container, {marginVertical : spacing.md}]}>
                        <View style={styles.subContainer}>
                            <Ionicons name={opt.icon} style={{color : colors.primaryDark}} size={24} />
                            <Text style={{color : colors.textPrimary, fontFamily : typography.h1.fontFamily, fontSize : typography.body.fontSize}}>{opt.title}</Text>
                        </View>
                        <Ionicons style={{color : colors.textMuted}} name="chevron-forward" size={24} />
                    </View>
                )
                }
            </Box>
        </TransactinLayout>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        gap: 10
    }
})