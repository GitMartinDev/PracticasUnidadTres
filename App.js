import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import dateScreen from "./src/screens/dateScreen";
import EmergencyScreen from "./src/screens/btnEmergencia";
import LoginScreen from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SignUpScreen from "./src/screens/SignUpScreen";
import ProfileScreen from './src/screens/ProfileScreen';
import Registro from "./src/screens/PracticaHoy";
import Configuration from "./src/screens/configScreen";
import Competencias from "./src/screens/Competences";




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer>
          {isAuthenticated ? (
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Details" component={DetailsScreen} />
              <Drawer.Screen name="dateScreen" component={dateScreen} />
              <Drawer.Screen name="EmergencyScreen" component={EmergencyScreen} />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              <Drawer.Screen name="Practica01" component={Registro} />  
              <Drawer.Screen name="Login" component={LoginScreen} />
              <Drawer.Screen name="Configuration" component={Configuration} />
              <Drawer.Screen name="Competences" component={Competencias} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login">
                {(props) => ( ///permite pasar componenetes de un comoponete padre a uno hijo 
                  <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />
                )}
              </Stack.Screen>
              <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Practica" component={Registro} />
                <Stack.Screen name="Configuration" component={Configuration} /> 
                <Stack.Screen name="Competencias" component={Competencias} /> 
              
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
};

export default App;
