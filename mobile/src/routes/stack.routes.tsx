import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/PastaA/ScreenA';
import { ScreenB } from '../screens/PastaB/ScreenB';
import {ScreenC } from '../screens/PastaC/ScreenC';
import {ScreenD } from  '../screens/PastaD/ScreenD';
import {ScreenE } from  '../screens/PastaE/ScreenE';
import {ScreenF } from  '../screens/PastaF/ScreenF';
import {ScreenG } from '../screens/PastaG/ScreenG';
import {ScreenH } from  '../screens/PastaH/ScreenH';
import {ScreenI } from '../screens/PastaI/ScreenI';
import {ScreenJ } from '../screens/PastaJ/ScreenJ';
import {ScreenK } from '../screens/PastaK/ScreenK';

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