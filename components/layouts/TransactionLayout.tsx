import { useTheme } from "@/theme/ThemeProvider";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../ui/Box";
import { ScreenContainer } from "./ScreenContainer";

type Props = {
    title: string;
    children?: ReactNode
}

export function TransactinLayout({ title, children }: Props) {
    const { spacing, colors, typography } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <ScreenContainer>
                <Box style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                        <Ionicons name="arrow-back" color={colors.textMuted} size={26} />
                    </Pressable>
                    <Text style={{ color: colors.textPrimary, fontSize: typography.h2.fontSize }}>{title}</Text>
                    <View style={styles.rightSection}/>
                </Box>
                    {children}
            </ScreenContainer>
 
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