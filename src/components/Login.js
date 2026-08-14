import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Login() {
    return(
        <View style={styles.container}>
            <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png"}} style={styles.logo}></Image>
            <Text style={styles.title}>Iniciar sesión</Text>
            <Text style={styles.subtitle}>Bienvenido, ingresa tus datos</Text>

            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems:"center", 
        backgroundColor: "#f0f0f0"
    },

    logo: {
        width: 100, 
        height:100, 
        marginBottom: 20,
    },

    title: {
        fontSize: 24, 
        fontWeight: "bold", 
        marginBottom: 10
    },

    subtitle: {
        fontSize: 16, 
        color: "#555", 
        marginBottom: 20, 
        textAlign: "center", 
        paddingHorizontal: 20
    },

    button: {
        backgroundColor: "blue", 
        paddingVertical: 12, 
        paddingHorizontal: 18, 
        borderRadius: 8, 
        minWidth: 160, 
        alignItems: "center"
    },

    buttonText: {
        color: "#fff", 
        fontWeight: "bold"
    }
})