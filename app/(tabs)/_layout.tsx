import { darkColors } from "@/theme/colors/dark";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerStyle: { backgroundColor: darkColors.background }, headerShadowVisible: false }}>
            <Tabs.Screen name="home" options={{
                title: "Home", tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }}>
            </Tabs.Screen>
            <Tabs.Screen name="trending" options={{
                title: "Trending", tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'trending-up' : 'trending-up-outline'} color={color} size={24} />
                )
            }}>
            </Tabs.Screen>
            <Tabs.Screen name="trade" options={{
                title: "Trade", tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'} color={color} size={24} />
                )
            }}>
            </Tabs.Screen>

        </Tabs>
    )
}