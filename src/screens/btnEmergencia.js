import React from 'react';
import { View, Button, Alert, Linking } from 'react-native';

const EmergencyScreen = () => {
  const callDoctor = () => {
    const doctorNumber = 'tel:4492742157'; // Número del doctor
    Linking.openURL(doctorNumber).catch(() => {
      Alert.alert('Error', 'No se pudo realizar la llamada');
    });
  };

  const callFamily = () => {
    const familyNumber = 'tel:4492742157'; // Número del familiar
    Linking.openURL(familyNumber).catch(() => {
      Alert.alert('Error', 'No se pudo realizar la llamada');
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Llamar al Doctor" onPress={callDoctor} />
      <Button title="Llamar a un Familiar" onPress={callFamily} />
    </View>
  );
};

export default EmergencyScreen;
