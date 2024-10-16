import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';



function dateScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>dateScreen</Text>
          <TouchableOpacity onPress={() => {
              navigation.popToTop();
          }}><Text>Regresar a la pagina inicial</Text>
          </TouchableOpacity>

           <TouchableOpacity onPress={() => {
              navigation.goBack();
          }}><Text>Regresar a la pagina anterior</Text>
          </TouchableOpacity>

    </View>
  );
}


export default dateScreen;
