import React from "react";
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
        }}
        component={Login}
      />
      <Screen
        name="ForgetPassword"
        options={{
          title: "ForgetPassword",
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
          title: "Screen Register",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Register}
      />
      <Screen
        name="SendEmail"
        options={{
          title: "SendEmail",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={SendEmail}
      />
      <Screen
        name="Profile"
        options={{
          title: "Profile",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Profile}
      />
      <Screen
        name="Environments"
        options={{
          title: "Environments",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "navy",
          },
          headerTintColor: "#fff",
        }}
        component={Environments}
      />
      <Screen
        name="Environmentsprofile"
        options={{
          title: "Environmentsprofile",
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
