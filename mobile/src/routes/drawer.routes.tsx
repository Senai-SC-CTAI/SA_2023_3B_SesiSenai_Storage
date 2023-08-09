import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

const { Screen, Navigator} = createDrawerNavigator();

import { Login } from '../screens/Login/login';
import { Register } from '../screens/Register/register';
import { Forgetpassword} from '../screens/Forgetpassword/forgetpassword';
import { Sendemail} from '../screens/Sendemail/sendemail';
import { Home} from '../screens/Home/home';
import { Profile } from '../screens/Profile/profile';
import { Environments  } from '../screens/Environments /environments ';
import { Environmentsprofile } from '../screens/Environmentsprofile/environmentsprofile';
import { Product  } from '../screens/Product /product ';
import { Productdetails  } from '../screens/Productdetails /productdetails ';
import { Productprofile  } from '../screens/Productprofile /productprofile ';


export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='home'
                component={Login }
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
                name='register'
                component={Register }
                options={{
                    drawerLabel: 'Tela B',
                    drawerIcon: () => 
                    <FontAwesome5 name="box" size={24} color="black" />
                }}
            />
            <Screen
                name='forgetpassword '
                component={Forgetpassword }
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
                name='sendemail '
                component={Sendemail }
                
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
                name='home '
                component={Home }
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
                name='profile '
                component={Profile }
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
                name='environments '
                component={Environments}
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
                name='environmentsprofile '
                component={Environmentsprofile }
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
                name='product '
                component={Product}
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
                name='productdetails '
                component={Productdetails }
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
                name='productprofile '
                component={Productprofile }
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