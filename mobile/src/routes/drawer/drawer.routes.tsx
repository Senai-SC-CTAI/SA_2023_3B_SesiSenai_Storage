import * as React from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// Telas
import { Login } from "../../screens/ScreenLogin";
import { ForgetPassword } from "../../screens/ScreenForgetPassword"; 
import { Home } from "../../screens/ScreenHome"; 
import { Register } from "../../screens/ScreenRegister";
import { SendEmail } from "../../screens/ScreenSEmail"; 
import { Profile } from "../../screens/ScreenProfile";
import { Environments } from "../../screens/ScreenEnvironments"; 
import { Environmentsprofile } from "../../screens/ScreenEnvironmentsprofile";
import { product } from "../../screens/ScreenProduct"; 
import { Productdetails } from "../../screens/ScreenProductdetails"; 
import { productprofile } from "../../screens/ScreenProductprofile";

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator initialRouteName='Home'>
        <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="location-pin" size={22} />,
        }}
      />

      <Screen
        name="Register"
        component={Register}
        options={{
          drawerLabel: "Register",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="SendEmail"
        component={SendEmail}
        options={{
          drawerLabel: "SendEmail",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="Environments"
        component={Environments}
        options={{
          drawerLabel: "Environments",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="Environmentsprofile"
        component={Environmentsprofile}
        options={{
          drawerLabel: "Environmentsprofile",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="product"
        component={product}
        options={{
          drawerLabel: "product",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="Productdetails"
        component={Productdetails}
        options={{
          drawerLabel: "Productdetails",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />

      <Screen
        name="productprofile"
        component={productprofile}
        options={{
          drawerLabel: "productprofile",
          drawerIcon: () => <MaterialIcons name="add" size={22} />,
        }}
      />
    </Navigator>
  );
}
