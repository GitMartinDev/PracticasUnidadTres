import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Importar GestureHandlerRootView
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import dateScreen from "./src/screens/dateScreen";
import EmergencyScreen from "./src/screens/btnEmergencia";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="dateScreen" component={dateScreen} />
        <Stack.Screen name="EmergencyScreen" component={EmergencyScreen} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

