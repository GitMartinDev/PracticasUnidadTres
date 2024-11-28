import React, { useState } from "react";
import { Alert } from "react-native";
import { NativeBaseProvider, Box, Button, Center, FormControl, Heading, Input, Link, VStack, Text, HStack } from "native-base";

const LoginScreen = ({ setIsAuthenticated, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSignUp = () => {
    navigation.navigate("SignUp"); // Navega a la pantalla SignUp
  };



  const Practica01 = () => {
    navigation.navigate("Practica"); // Navega a la pantalla SignUp
  };




  
  const handleLogin = () => {
    if (email && password) {
      Alert.alert("Login Successful", "Bienvenido!"); 
      setIsAuthenticated(true); 
      navigation.navigate("Home"); 
    } else {
      Alert.alert("Erro", "Porfavor llena los campos");
    }
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
           <FormControl>
              <Input 
                borderRadius="2xl"
                placeholder="Email"
                value={email} 
                onChangeText={(text) => setEmail(text)} 
              />
            </FormControl>

            <FormControl>
              <Input
                borderRadius="2xl"
                placeholder="Password"
                type="password"
                value={password}
                onChangeText={(text)=>setPassword(text)}
              /></FormControl>
            <Button mt="2" backgroundColor="#00728B" borderRadius="2xl" onPress={handleLogin}>
              Sign in
            </Button>
            <Link
                _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                Dont´t have an account?.{" "}
              </Text>
              <Link
                _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }}
                onPress={handleSignUp} // Función para abrir SignUp.js
              >
                Sign Up
              </Link>
              <Link onPress={Practica01}>Practica Hoy</Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
