import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from './drawer.routes';

export function drawer() {
  return (
    <NavigationContainer>
    <DrawerRoutes/>
    </NavigationContainer>

  );
}