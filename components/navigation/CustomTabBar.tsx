import { useTheme } from "@/theme/ThemeProvider";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { Pressable, StyleSheet, Text, View } from "react-native";

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { colors, radius, typography } = useTheme();

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            position: 'absolute',
            justifyContent: "center",
            alignItems: "center",
            bottom: 20,
            elevation: 5,
        },
        tabContainer: {

        },
        subcontainer: {
            width: "90%",
            backgroundColor: colors.card,
            borderRadius: 100,
            flexDirection: "row",
            marginHorizontal: "auto",
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: "space-around",
            alignItems: "center",


        },

        subTabContainer: {
            padding: 2,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 1,
            paddingHorizontal: 5,

        },
        text: {
            fontFamily: typography.button.fontFamily,
            fontSize: typography.button.fontSize
        }


    })

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const { options } = descriptors[route.key];

                        const label: any = options.tabBarLabel ?? options.title ?? route.name;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name)
                            }
                        }
                        return (
                            <Pressable key={route.key} onPress={onPress} style={[isFocused &&{ backgroundColor: colors.primary, borderRadius: radius.md }, styles.subTabContainer]}>

                                {
                                    options.tabBarIcon?.({
                                        focused: isFocused,

                                        color: isFocused ? colors.primaryDark : colors.textMuted,
                                        size: 24
                                    })
                                }
                                <Text style={[{ color: isFocused ? colors.textPrimary : colors.textMuted }, styles.text]}>

                                    {label}
                                </Text>

                            </Pressable>
                        )
                    })
                }

            </View>
        </View>

    )
}
