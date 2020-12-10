import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@styles/Colors";
import { StatusBar } from "expo-status-bar";

const Container = ({ noGradient, children, ...props }) => {
    return (
        <>
            {!noGradient ? (
                <LinearGradient
                    colors={[Colors.mainColor, Colors.gradientColor]}
                    style={[styles.main]}>
                    <StatusBar style={"light"} />
                    <SafeAreaView>
                        <View style={[styles.base]} {...props}>
                            {children}
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            ) : (
                <View style={[styles.base]} {...props}>
                    {children}
                </View>
            )}
        </>
    );
};

export default Container;

const FULL_HEIGHT = StyleSheet.absoluteFill;

const styles = StyleSheet.create({
    base: {
        paddingHorizontal: 30
    },
    main: {
        // ...FULL_HEIGHT,
        height: "100%"
    }
});
