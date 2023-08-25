import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

// Telas
import { Home } from "../../screens/ScreenHome"; 
import { Profile } from "../../screens/ScreenProfile";
import { Environments } from "../../screens/ScreenEnvironments"; 
import { product } from "../../screens/ScreenProduct"; 
import { Productdetails } from "../../screens/ScreenProductdetails"; 

//Header
import  Header  from '../../components/Header'

import { createDrawerNavigator } from "@react-navigation/drawer";

const { Screen, Navigator } = createDrawerNavigator();

const CustomHeader = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
};
return (
  <TouchableOpacity onPress={() => toggleDrawer()} activeOpacity={1}>
    <Header />
  </TouchableOpacity>
);
};

export function DrawerRoutes() {
  return (
    <Navigator
     screenOptions={{
      drawerStyle: {
      backgroundColor: '#70B6E4',
    },
    header: (props) => <CustomHeader {...props} />
  }} 
  >
        <Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={25} color={'blue'}/>,
          headerTitleStyle: {
            color: '#002AA0', 
          },
       }
        }
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: () => <MaterialIcons name="person" size={25} />,
          header: () => <Header/>
        }}
      />

      <Screen
        name="Environments"
        component={Environments}
        options={{
          drawerLabel: "Ambientes",
          drawerIcon: () => <MaterialIcons name="location-pin" size={25} />,
          header: () => <Header/>
        }}
      />

      {/* <Screen
        name="Environmentsprofile"
        component={Environmentsprofile}
        options={{
          drawerLabel: "Environmentsprofile",
          drawerIcon: () => <MaterialIcons name="add" size={25} />,
        }}
      /> */}

      <Screen
        name="product"
        component={product}
        options={{
          drawerLabel: "Produtos",
          drawerIcon: () => <FontAwesome name="archive" size={25} />,
          header: () => <Header/>
        }}
      />

      <Screen
        name="Productdetails"
        component={Productdetails}
        options={{
          drawerLabel: "Detalhe dos Produtos",
          drawerIcon: () => <MaterialIcons name="info" size={25} />,
        }}
      />

      {/* <Screen
        name="productprofile"
        component={productprofile}
        options={{
          drawerLabel: "Perfil do Produtos",
          drawerIcon: () => <MaterialIcons name="add" size={25} />,
        }}
      /> */}
    </Navigator>
  );
}
