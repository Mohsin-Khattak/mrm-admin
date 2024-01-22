// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LanguageScreen from 'screens/language-screen';
import LocationSetup from 'screens/location-setup';
import LoginScreen from 'screens/login-screen';
import Me from 'screens/me';
import Notifications from 'screens/notifications';
import Onboarding from 'screens/on-boarding';
import Search from 'screens/search';
import Signup from 'screens/signup';
import Splash from 'screens/splash';
import {horizontalAnimation} from '../utils';
import DrawerNavigation from './drawer-navigation/drawer-navigation';
import HomeTab from 'screens/home-tab';
import Customers from 'screens/customers';
import AddCustomer from 'screens/add-customers';
import Recovery from 'screens/recovery';
import RecoveryDetail from 'screens/recovery-details';
import Orders from 'screens/orders';
import OrderDetails from 'screens/order-details';
import SalesMen from 'screens/salesmen';
import AddSaleman from 'screens/add-saleman';
import SalemanDetails from 'screens/saleman-details';
import Products from 'screens/products';
import AddProduct from 'screens/add-product';
const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={horizontalAnimation}>
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="HomeTab" component={HomeTab} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Me" component={Me} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Customers" component={Customers} />
          <Stack.Screen name="AddCustomer" component={AddCustomer} />
          <Stack.Screen name="Recovery" component={Recovery} />
          <Stack.Screen name="RecoveryDetail" component={RecoveryDetail} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="SalesMen" component={SalesMen} />
          <Stack.Screen name="AddSaleman" component={AddSaleman} />
          <Stack.Screen name="SalemanDetails" component={SalemanDetails} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
        </Stack.Group>
        {/* location group */}
        <Stack.Group>
          <Stack.Screen name="LocationSetup" component={LocationSetup} />
        </Stack.Group>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
