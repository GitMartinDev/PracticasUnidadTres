import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Details');
      }}>
        <Text>Ir a DetailsScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('EmergencyScreen');
      }}>
        <Text>Ir  llamada </Text>
      </TouchableOpacity>

    </View>
  );
}

export default HomeScreen;
