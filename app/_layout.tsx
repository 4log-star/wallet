import { useFonts } from 'expo-font';
import { Stack } from "expo-router";


// SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    "SatoshiRegular": require('../assets/fonts/Satoshi-Regular.otf'),
    "SatoshiMedium": require('../assets/fonts/Satoshi-Medium.otf'),
    "SatoshiBold": require('../assets/fonts/Satoshi-Bold.otf'),
  });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
