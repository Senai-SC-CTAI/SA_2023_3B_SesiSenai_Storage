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
                name='login '
                options={{
                    title: 'Login',
                    headerShown: false
                }}
                component={ScreenA}
            />
            <Screen
                name='register'
                options={{
                    title: 'Register ',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ScreenB}
            />

<Screen
                name='sendemail '
                options={{
                    title: 'Sendemail',
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