import { Box } from '@/components/ui/Box';
import { radius } from '@/theme/radius';
import { useTheme } from '@/theme/ThemeProvider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from "expo-image-picker";
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export function ScanScreen() {
    const [flashOn, setFlashOn] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const { spacing, colors, typography } = useTheme();

    const glowAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(glowAnim, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true,
                }),
                Animated.timing(glowAnim, {
                    toValue: 0,
                    duration: 1200,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const glowOpacity = glowAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 1],
    });

    const glowScale = glowAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.05],
    });

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

    const pickImageAndScan = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            const scanned = await Camera.scanFromURLAsync(uri, ["qr"]);
            if (scanned.length > 0) {
                console.log("success")
            }
            else {
                alert("No qr code found")
            }
        }
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
        <View style={{ flex: 1 }}>
            {/* Camera */}
            <CameraView
                enableTorch={flashOn}
                style={StyleSheet.absoluteFillObject}
                barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                onBarcodeScanned={handleBarcodeScanned}
            />
            <Box style={[styles.header, { padding: spacing.md, marginTop: spacing.md }]}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="arrow-back" color={colors.textMuted} size={26} />
                </Pressable>
                <Text style={{ color: colors.textPrimary, fontSize: typography.h2.fontSize }}>Scan QR code</Text>
                <View style={styles.rightSection} >
                    <Pressable onPress={() => setFlashOn(prev => !prev)}>
                        <Ionicons color={flashOn ? colors.textPrimary : colors.textMuted} size={22} name={flashOn ? 'flash' : 'flash-off'} />
                    </Pressable>
                </View>
            </Box>
            {/* Mask Overlay */}
            <View style={StyleSheet.absoluteFillObject}>

                {/* TOP */}
                <View style={styles.topOverlay} />

                {/* MIDDLE */}
                <View style={styles.middleRow}>
                    <View style={styles.sideOverlay} />
                    <View style={[styles.scanBox,]} >
                        <View style={styles.cornerTopLeftHorizontal} />
                        <View style={styles.cornerTopLeftVertical} />

                        <View style={styles.cornerTopRightHorizontal} />
                        <View style={styles.cornerTopRightVertical} />

                        <View style={styles.cornerBottomLeftHorizontal} />
                        <View style={styles.cornerBottomLeftVertical} />

                        <View style={styles.cornerBottomRightHorizontal} />
                        <View style={styles.cornerBottomRightVertical} />
                    </View>
                    <View style={styles.sideOverlay} />
                </View>

                {/* BOTTOM */}
                <View style={styles.bottomOverlay} >
                    <View style={{ marginTop: spacing.md, flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                        <Pressable style={[styles.gallery, { backgroundColor: colors.textPrimary, paddingVertical: spacing.sm, borderRadius: radius.md }]} onPress={pickImageAndScan}>
                            <Ionicons name='image' color={colors.textMuted} size={20} />
                            <Text style={{ fontFamily: typography.button.fontFamily, color: colors.background }}> Upload from gallery</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

        </View>


    )
}

const CORNER_LENGTH = 40;
const CORNER_THICKNESS = 4;
const CORNER_COLOR = "#7C3AED";
const styles = StyleSheet.create({

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10
    },
    rightSection: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },

    gallery: {
        width: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    topOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    middleRow: {
        flexDirection: "row",
        height: 260,
    },

    sideOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    bottomOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    scanBox: {
        width: 260,
        height: 260,
        overflow: "hidden",
    },

    scanLine: {
        position: "absolute",
        width: "100%",
        height: 3,
        backgroundColor: "#00FFAA",
    },

    cornerTopLeftHorizontal: {
        position: "absolute",
        top: 0,
        left: 0,
        width: CORNER_LENGTH,
        height: CORNER_THICKNESS,
        backgroundColor: CORNER_COLOR,
        borderTopLeftRadius: 24,
    },

    cornerTopLeftVertical: {
        position: "absolute",
        top: 0,
        left: 0,
        width: CORNER_THICKNESS,
        height: CORNER_LENGTH,
        backgroundColor: CORNER_COLOR,
        borderTopLeftRadius: 24,
    },

    cornerTopRightHorizontal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: CORNER_LENGTH,
        height: CORNER_THICKNESS,
        backgroundColor: CORNER_COLOR,
    },

    cornerTopRightVertical: {
        position: "absolute",
        top: 0,
        right: 0,
        width: CORNER_THICKNESS,
        height: CORNER_LENGTH,
        backgroundColor: CORNER_COLOR,
    },

    cornerBottomLeftHorizontal: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: CORNER_LENGTH,
        height: CORNER_THICKNESS,
        backgroundColor: CORNER_COLOR,
    },

    cornerBottomLeftVertical: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: CORNER_THICKNESS,
        height: CORNER_LENGTH,
        backgroundColor: CORNER_COLOR,
    },

    cornerBottomRightHorizontal: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: CORNER_LENGTH,
        height: CORNER_THICKNESS,
        backgroundColor: CORNER_COLOR,
    },

    cornerBottomRightVertical: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: CORNER_THICKNESS,
        height: CORNER_LENGTH,
        backgroundColor: CORNER_COLOR,
    },
});