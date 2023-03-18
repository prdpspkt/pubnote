import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './screens/Home';
import Offices from './screens/Offices';
import {NavigationContainer} from '@react-navigation/native';
import React from "react";

export default function App() {
    const client = new ApolloClient({
        uri: "https://nefolee.com/rawdata",
        cache: new InMemoryCache()
    })
    const Drawer = createDrawerNavigator();
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={{
                        drawerStyle: {
                            backgroundColor: "green",
                        },
                        headerStyle: {
                            backgroundColor: "green"
                        }
                    }}>
                    <Drawer.Screen name='Home' component={Home}/>
                    <Drawer.Screen name='Offices' component={Offices}/>
                </Drawer.Navigator>
            </NavigationContainer>
            <StatusBar/>
        </ApolloProvider>
    );
}