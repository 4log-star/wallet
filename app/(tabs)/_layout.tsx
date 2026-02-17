import { CustomTabBar } from '@/components/navigation/CustomTabBar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen name="home" options={{
                title: 'Home', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="trending" options={{
                title: 'trending', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'trending-up-sharp' : 'trending-up-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="trade" options={{
                title: 'trade', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'swap-horizontal-sharp' : 'swap-horizontal-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="rewards" options={{
                title: 'Rewards', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'gift-sharp' : 'gift-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="discover" options={{
                title: 'Discover', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'compass-sharp' : 'compass-outline'} color={color} size={24} />
                )
            }} />
        </Tabs>
    )
}