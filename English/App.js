/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import Tabbar from './components/tabbar';
import Reading from './components/ReadingComponent';
// import Listenning from './components/ListenningComponent';



const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {
  
  return (
    <View>
      <HeaderComponent headerText={'New TOEIC Test 2020'}/>
      <Home />
    </View>
  );
  
};

export default App;
