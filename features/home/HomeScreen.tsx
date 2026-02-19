import { useTheme } from "@/theme/ThemeProvider";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BalanceCard } from "./components/BalanceCard";
import { HomeHeader } from "./components/HomeHeader";
import { HomeTabs } from "./components/HomeTabs";
import { QuickActions } from "./components/QuickActions";





export const HomeScreen = () => {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <SafeAreaView style={[style?.box, { backgroundColor: colors.background }]} >
            <HomeHeader />
            <BalanceCard />
            <QuickActions />
            <HomeTabs />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    box: {
        width: "100%",
        height: "100%",
    }
})

