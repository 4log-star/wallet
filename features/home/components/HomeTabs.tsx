import { Box } from "@/components/ui/Box";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    View
} from "react-native";

export function HomeTabs() {
    const { colors, spacing, typography } = useTheme();
    const [activeTab, setActiveTab] = useState("Crypto");

    const tabs = [
        "Crypto",
        "Prediction",
        "Watchlist",
        "NFTs",
        "Approvals",
        "Dapps",
    ];

    return (
        <Box style={{ marginTop: spacing.md, paddingHorizontal : spacing.md }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: spacing.lg,
                }}
            >
                {tabs.map((tab, index) => {
                    const isActive = activeTab === tab;

                    return (
                        <Pressable
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            style={{
                                marginRight:
                                    index !== tabs.length - 1 ? spacing.lg : 0,
                            }}
                        >
                            <View style={{ paddingBottom: 10 }}>
                                <Text
                                    style={{
                                        color: isActive
                                            ? colors.textPrimary
                                            : colors.textSecondary,
                                        fontSize: typography.body.fontSize,
                                        fontWeight: isActive ? "600" : "500",
                                    }}
                                >
                                    {tab}
                                </Text>

                                {/* Underline Indicator */}
                                {isActive && (
                                    <View
                                        style={{
                                            marginTop: 6,
                                            height: 4,
                                            borderRadius: 2,
                                            backgroundColor: colors.primary,
                                        }}
                                    />
                                )}
                            </View>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </Box>
    );
}
