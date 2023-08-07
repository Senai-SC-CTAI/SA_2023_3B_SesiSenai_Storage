import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import {ScreenC } from '../screens/ScreenC';
import {ScreenD } from  '../screens/ScreenD';
import {ScreenE } from  '../screens/ScreenE';
import {ScreenF } from  '../screens/ScreenF';
import {ScreenG } from '../screens/ScreenG';
import {ScreenH } from  '../screens/ScreenH';
import {ScreenI } from '../screens/ScreenI';
import {ScreenJ } from '../screens/ScreenJ';
import {ScreenK } from '../screens/ScreenK';

export function StackRoutes(){
    return(
        <Navigator
            /*screenOptions={{
                headerShown: false
            }}*/
        >
            <Screen
                name='screenA'
                options={{
                    title: 'Tela A',
                    headerShown: false
                }}
                component={ScreenA}
            />
            <Screen
                name='screenB'
                options={{
                    title: 'Tela B',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenB}
            />

<Screen
                name='screenD'
                options={{
                    title: 'Tela D',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenD}
            />










        </Navigator>
    )
}