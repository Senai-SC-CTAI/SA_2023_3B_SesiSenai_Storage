import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './drawer.routes';

export function Drawer() {
  return (
    <NavigationContainer>
    <DrawerRoutes/>
    </NavigationContainer>

  );
}