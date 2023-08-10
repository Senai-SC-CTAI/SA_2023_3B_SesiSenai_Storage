import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Login } from '../../screens/ScreenLogin/Login';   // Screen A
import { ForgetPassword } from '../../screens/ScreenForgetPassword/ForgetPassword';    // Screen B
import { Home } from '../../screens/ScreenHome/Home';  // Screen C
import { Register } from '../../screens/ScreenRegister/Register';  // Screen D
import { SendEmail } from '../../screens/ScreenSEmail/SendEmail';  // Screen E
import { Profile } from '../../screens/ScreenProfile/Profile';   // Screen F
import { Environments } from '../../screens/ScreenEnvironments/Environments';   // Screen G
import { Environmentsprofile } from '../../screens/ScreenEnvironmentsprofile/Environmentsprofile';   // Screen H
import { product } from '../../screens/ScreenProduct/product';   // Screen I
import { Productdetails } from '../../screens/ScreenProductdetails/Productdetails';   // Screen J
import { productprofile } from '../../screens/ScreenProductprofile/productprofile';   // Screen K

const { Screen, Navigator} = createDrawerNavigator();

export function DrawerRoutes(){
    return(
        <Navigator
        >
            <Screen
                name='Login'
                component={Login}
                options={{
                    drawerLabel: 'Login',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="person" 
                            size={22}
                        />
                }}
            />
            <Screen
                name='ForgetPassword'
                component={ForgetPassword}
                options={{
                    drawerLabel: 'ForgetPassword',
                    drawerIcon: () => 
                    <FontAwesome5 name="box" size={24} color="black" />
                }}
            />
            <Screen
                name='Home'
                component={Home}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => 
                    <MaterialIcons 
                    name="location-pin" 
                    size={22}
                    />
                }}
            />


            <Screen
                name='Register'
                component={Register}
                
                options={{
                    drawerLabel: 'Register',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />



                <Screen
                name='SendEmail'
                component={SendEmail}
                options={{
                    drawerLabel: 'SendEmail',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            
            <Screen
                name='Profile'
                component={Profile}
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />


               <Screen
                name='Environments'
                component={Environments}
                options={{
                    drawerLabel: 'Environments',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='Environmentsprofile'
                component={Environmentsprofile}
                options={{
                    drawerLabel: 'Environmentsprofile',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='product'
                component={product}
                options={{
                    drawerLabel: 'product',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='Productdetails'
                component={Productdetails}
                options={{
                    drawerLabel: 'Productdetails',
                    drawerIcon: () => 
                        <MaterialIcons 
                            name="add" 
                            size={22}
                        />
                }}
            />
            

               <Screen
                name='productprofile'
                component={productprofile}
                options={{
                    drawerLabel: 'productprofile',
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