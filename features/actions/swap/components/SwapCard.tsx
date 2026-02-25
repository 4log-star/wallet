import { useTheme } from "@/theme/ThemeProvider";
import { Screen } from "react-native-screens";
import { SwapDirectionButton } from "./SwapDirectionButton";
import { SwapSection } from "./SwapSection";


export function SwapCard() {
    const { colors, spacing, radius, typography } = useTheme();
    return (
        <Screen style={{ marginTop: spacing.md, }}>
            <SwapSection type={"From"} />
            <SwapDirectionButton/>
            <SwapSection type={"To"}/>
        </Screen>
    )
}