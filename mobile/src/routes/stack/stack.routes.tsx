import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Drawer
import { DrawerRoutes } from '../drawer/drawer.routes';
//Telas
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

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Login">
       <Screen
        name="DrawerRoutes"
        options={{
          title: "DrawerRoutes",
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Screen
        name="Login"
        options={{
          title: "Login",
          headerShown: false,
        }}
        component={Login}
      />
      <Screen
        name="ForgetPassword"
        options={{
          title: "ForgetPassword",
          headerShown: false,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={ForgetPassword}
      />

      <Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Home}
      />

      <Screen
        name="Register"
        options={{
          headerShown: false,
          title: "Screen Register",
        }}
        component={Register}
      />
      <Screen
        name="SendEmail"
        options={{
          title: "SendEmail",
          headerShown: false,
        }}
        component={SendEmail}
      />
      <Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
        component={Profile}
      />
      <Screen
        name="Environments"
        options={{
          title: "Environments",
          headerShown: false,
        }}
        component={Environments}
      />
      <Screen
        name="Environmentsprofile"
        options={{
          title: "Environmentsprofile",
          headerShown: false,
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Environmentsprofile}
      />
      <Screen
        name="product"
        options={{
          headerShown: false,
          title: "product",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={product}
      />
      <Screen
        name="Productdetails"
        options={{
          headerShown: false,
          title: "Productdetails",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Productdetails}
      />

      <Screen
        name="productprofile"
        options={{
          headerShown: false,
          title: "productprofile",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={productprofile}
      />
    </Navigator>
  );
}
