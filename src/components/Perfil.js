import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Perfil() {
    return(
        <View style={styles.card}>
            <Image source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} style={styles.avatar}></Image>
            <Text style={styles.name}>Juan Pérez</Text>
            <Text style={styles.job}>Ingeniero de Sistemas</Text>
            <Text style={styles.desc}>
                Desarrollador móvil con experiencia en React Native y en aplicaciones empresariales.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 24,
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#fff",
        alignItems: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: {width:0, height:2}
    },

    avatar: {
        width: 100,
        borderRadius: 50,
        marginBottom: 12
    },

    name: {
        fontSize: 20,
        fontWeight: "bold"
    },

    job: {
        fontSize: 16,
        color: "#777"
    },

    desc: {
        fontSize: 14,
        color: "#555",
        textAlign: "center",
        marginTop: 8
    }
})