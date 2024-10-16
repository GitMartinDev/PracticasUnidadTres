import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';



function DetailsScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
      <TouchableOpacity title="Go back" onPress={() => navigation.goBack()}>
        <Text>"Regresa a la pagina anterior"</Text>
      </TouchableOpacity>

      
     <TouchableOpacity onPress={() => {
        navigation.navigate('dateScreen');
      }}>
        <Text>Ir a dateScreen</Text>
     </TouchableOpacity>


    </View>
  );
  
}



export default DetailsScreen;