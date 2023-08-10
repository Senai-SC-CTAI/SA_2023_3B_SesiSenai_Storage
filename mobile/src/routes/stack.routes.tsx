import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { Login } from '../screens/ScreenLogin/Login';
import { ForgetPassword } from '../screens/ScreenForgetPassword/ForgetPassword';
import { Home } from '../screens/ScreenHome/Home';
import { Register } from  '../screens/ScreenRegister/Register';
import { SendEmail } from  '../screens/ScreenSEmail/SendEmail';
import { Profile } from  '../screens/ScreenProfile/Profile';
import { Environments } from '../screens/ScreenEnvironments/Environments';
import { Environmentsprofile } from  '../screens/ScreenEnvironmentsprofile/Environmentsprofile';
import { product } from '../screens/ScreenProduct/product';
import { Productdetails } from '../screens/ScreenProductdetails/Productdetails';
import { ScreenK } from '../screens/ScreenProductprofile/productprofile';

export function StackRoutes(){
    return(
            <Screen
                name='Login'
                options={{
                    title: 'Login',
                    headerShown: false
                }}
                component={Login}
            />
            <Screen
                name='ForgetPassword'
                options={{
                    title: 'ForgetPasswordB',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={ForgetPassword}
            />

<Screen
                name='Home'
                options={{
                    title: 'Home',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Home}
            />

<Screen
                name='Register'
                options={{
                    title: 'Screen Register',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Register}
            />
<Screen
                name='SendEmail'
                options={{
                    title: 'SendEmail',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={SendEmail}
            />
<Screen
                name='Profile'
                options={{
                    title: 'Profile',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Profile}
            />
<Screen
                name='Environments'
                options={{
                    title: 'Environments',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Environments}
            />
<Screen
                name='Environmentsprofile'
                options={{
                    title: 'Environmentsprofile',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Environmentsprofile}
            />
<Screen
                name='product'
                options={{
                    title: 'product',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={product}
            />
<Screen
                name='Productdetails'
                options={{
                    title: 'Productdetails',
                    headerTitleAlign: 'left',
                    headerStyle: {
                        backgroundColor: 'navy'
                    },
                    headerTintColor: '#fff'
                }}
                component={Productdetails}
            />











        </Navigator>
    )
}