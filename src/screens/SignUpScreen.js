import React, { useState } from "react";
import {CheckIcon, Select, Center, Box, Heading, VStack, FormControl, Input, Button, Text, Link} from "native-base";

const SignUp = ({ navigation }) => {
  
  
  const handleLogin = () => {
  navigation.navigate("Login");
  };

  const [firstName, setfirstName] = useState(""); // Con use state puedes mantener el valor a lo largo del ciclo de vida del componente
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRole, setuserRole]=useState("");

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontWeight="semibold">
          Create Your Account
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{ color: "warmGray.200" }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input 
              borderRadius="2xl"
              placeholder="First Name"
              type="text" 
              value={firstName}
              onChangeText={(text) => setfirstName(text)} 
            >
            </Input>
          </FormControl>
          <FormControl>
            <Input
              borderRadius="2xl"
              placeholder="Last Name"
              type="text" 
              value={lastName}
                onChangeText={(text) => setlastName(text)} 
            >
            </Input>
          </FormControl>
          <FormControl>
            <Input
              borderRadius="2xl"
              placeholder="Email"
              type="text" 
              value={email}
              onChangeText={(text) => setEmail(text)} 
            >
            </Input>
          </FormControl>
          <FormControl>
            <Input
              borderRadius="2xl"
              placeholder="Password"
              type="password" 
              value={password}
              onChange={(text)=>setPassword(text)}
            >
            </Input>
          </FormControl>
           <FormControl>
            <Input
              borderRadius="2xl"
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(text)=>setConfirmPassword(text)}
            >
            </Input>
          </FormControl>
           <FormControl>
            <Select
              borderRadius="2xl"
              selectedValue={userRole}
              minWidth="200"
              accessibilityLabel="Choose Role"
              placeholder="Choose Role"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt="1"
              onValueChange={(value)=>setuserRole(value)}
            >
              <Select.Item label="Senior" value="ux" />
              <Select.Item label="Family Member" value="ux" />
              <Select.Item label="Doctor" value="web" />
              
           </Select>
          </FormControl>
          <Button mt="2" backgroundColor="#00728B" borderRadius="2xl">
            Create Acount
          </Button>
          <Text>Already have an account?</Text><Link onPress={handleLogin}>Log in here</Link>
    
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUp;

