import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Abbra from 'react-native-vector-icons/MaterialCommunityIcons';
import Spoopy from 'react-native-vector-icons/SimpleLineIcons';


import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" component={Home} 
          options={{
            title: ' Lista de atividades',
            headerStyle:{
              backgroundColor: '#FF9A00',
            },
            headerTintColor: '#000000',
            //headerShown: false,
            headerTitleStyle: {
              fontSize: 25,
            },
            headerLeft: () => <Abbra
              name='halloween'
              size={76}
              color='#fe6600'
            />,
            headerRight: () => <Spoopy
            name='ghost'
            size={55}
            color='#e5e5e5'
            />
          }}
          header
        /> 
        <Stack.Screen name="Sobre" component={Sobre} 
          options={{title: 'Sobre a empresa'}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}