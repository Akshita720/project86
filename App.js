import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import DrawerNavigation from './navigation/DrawerNavigation'

export default function App() {
  return (
    
    <NavigationContainer>
    <DrawerNavigation />
    </NavigationContainer>
    
  );
}
