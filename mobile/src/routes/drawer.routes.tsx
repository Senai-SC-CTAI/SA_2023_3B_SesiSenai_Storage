import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

const { Screen, Navigator} = createDrawerNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';
import { ScreenD } from '../screens/ScreenD';
import { ScreenF } from '../screens/ScreenF';
import { ScreenE } from '../screens/ScreenE';
import { ScreenG } from '../screens/ScreenG';
import { ScreenH } from '../screens/ScreenH';
import { ScreenI } from '../screens/ScreenI';
import { ScreenJ } from '../screens/ScreenJ';
import { ScreenK } from '../screens/ScreenK';

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="person" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    drawerLabel: 'Tela B',
                    drawerIcon: () => 
                    <FontAwesome5 name="box" size={24} color="black" />
                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    drawerLabel: 'Tela C',
                    drawerIcon: () => 
                    <MaterialIcons 
                    name="location-pin" 
                    size={22}
                    />
                }}
            />


            <Screen
                name='screenD'
                component={ScreenD}
                
                options={{
                    drawerLabel: 'Tela D',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />



                <Screen
                name='screenE'
                component={ScreenE}
                options={{
                    drawerLabel: 'Tela E',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            
            <Screen
                name='screenF'
                component={ScreenF}
                options={{
                    drawerLabel: 'Tela F',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />


               <Screen
                name='screenG'
                component={ScreenG}
                options={{
                    drawerLabel: 'Tela G',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='screenH'
                component={ScreenH}
                options={{
                    drawerLabel: 'Tela H',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='screenI'
                component={ScreenI}
                options={{
                    drawerLabel: 'Tela I',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='screenJ'
                component={ScreenJ}
                options={{
                    drawerLabel: 'Tela J',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='screenK'
                component={ScreenK}
                options={{
                    drawerLabel: 'Tela K',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            



















        </Navigator>
    )
}