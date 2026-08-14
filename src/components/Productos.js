import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Product({name, price, imgUri}){
    const expensive = price > 100;
    return(
        <View style={styles.product}>
            <Image source={{uri: imgUri}} style={styles.productImg}></Image>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.price, expensive && {color: "red"}]}>
                ${price}
            </Text>
        </View>
    )
}

export default function Productos() {
    return(
        <View style={styles.container}>
            <Product
                name={"Producto 1"}
                price={80}
                imgUri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7yaX2GXkfyEvDNErxA9qQwnR_JZzALM5ew&s"}
            >
            </Product>
            <Product
                name={"Producto 2"}
                price={120}
                imgUri={"https://hiraoka.com.pe/media/mageplaza/blog/post/l/o/logitech-mejores_accesorios_de_computo_y_gaming.jpg"}
            >
            </Product>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f4f6f8"
    },

    product: {
        alignItems: "center",
        backgroundColor: "fff",
        padding: 12,
        borderRadius: 10,
        width: 140,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2}
    },

    productImg: {
        width: 100,
        height: 100,
        marginBottom: 8
    },

    name: {
        fontSize: 16,
        fontWeight: "bold"
    },

    price: {
        fontSize: 16,
        color: "green"
    }
})