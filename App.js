import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Productos from './src/components/Productos';
import Perfil from './src/components/Perfil';
import { Button } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState("login");

  const renderScreen = () => {
    switch(screen) {
      case "perfil": return <Perfil></Perfil>;
      case "productos": return <Productos></Productos>; 
      default: return <Login></Login>
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Button title='Login' onPress={() => setScreen("login")}></Button>
        <Button title='Perfil' onPress={() => setScreen("perfil")}></Button>
        <Button title='Catálogo' onPress={() => setScreen("productos")}></Button>
      </View>
      <View style={styles.content}>
        {renderScreen()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  content: {
    flex: 1
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
    elevation: 2
  }
});
