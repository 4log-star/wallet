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
                    <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="trending" options={{
                title: 'Trending', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'trending-up' : 'trending-up-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="trade" options={{
                title: 'Trade', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="rewards" options={{
                title: 'Rewards', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'gift' : 'gift-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name="discover" options={{
                title: 'Discover', tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'compass' : 'compass-outline'} color={color} size={24} />
                )
            }} />
        </Tabs>
    )
}