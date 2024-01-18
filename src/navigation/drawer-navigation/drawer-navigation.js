import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabBar} from 'navigation/curvedtabs';
import React from 'react';
import {mvs, width} from 'config/metrices';
import CustomDrawerContent from './drawer-content';
import HomeTab from 'screens/home-tab';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width - 100,
          borderTopRightRadius: mvs(60),
          borderBottomRightRadius: mvs(60),
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeTab" component={HomeTab} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
