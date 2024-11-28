// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'; // Asegúrate de importar todos los componentes necesarios

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Emergency')}
      >
        <Text>Go to Emergency Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
