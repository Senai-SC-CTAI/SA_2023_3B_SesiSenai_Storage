import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

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