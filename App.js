import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import NewPasswordScreen from './src/screens/NewPasswordScreen'
import Navigation from './src/Navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/HomeScreen/DetailsScreen';
import DrawerNavigationScreen from './src/screens/DrawerNavigationScreen/DrawerNavigationScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
    
    {/* <HomeScreen/> */}

    <Navigation/>

    {/* <DrawerNavigationScreen/> */}
    {/*  */}

      {/* <StatusBar /> */}
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFC',
    
  },


});

export default App;