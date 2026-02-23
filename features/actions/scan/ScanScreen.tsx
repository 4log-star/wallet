import { ScreenContainer } from '@/components/layouts/ScreenContainer';
import { Box } from '@/components/ui/Box';
import { useTheme } from '@/theme/ThemeProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export function ScanScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const { spacing, colors, typography } = useTheme();

    useEffect(() => {
        if (!permission) {
            requestPermission();
        }
    }, [])

    const handleBarcodeScanned = ({ data }: { data: string }) => {
        setScanned(true);
        console.log("Scanned:", data);
        router.replace({
            pathname: '/send',
            params: { address: data }
        })
    }

    if (!permission) return null;

    if (!permission.granted) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Camera permission required</Text>
                <Pressable onPress={requestPermission}>
                    <Text>Allow Camera</Text>
                </Pressable>
            </View>
        )
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <ScreenContainer>
                <Box style={styles.header}>
                    <Pressable onPress={() => router.back()}>
                        <Ionicons name="arrow-back" color={colors.textMuted} size={26} />
                    </Pressable>
                    <Text style={{ color: colors.textPrimary, fontSize: typography.h2.fontSize }}>Scan QR code</Text>
                    <View style={styles.rightSection} />
                </Box>
                <View style={{ flex: 1 }}>
                    <CameraView
                        style={{ height : 300}}
                        barcodeScannerSettings={{
                            barcodeTypes: ["qr"],
                        }}
                        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
                    />



                </View>
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