import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './screens/Home';
import Offices from './screens/Offices';
import {NavigationContainer} from '@react-navigation/native';
import React from "react";
import {COLORS} from "./theme/colors";
import {Text} from "react-native";
import {color} from "react-native-reanimated";


export default function App() {
    const client = new ApolloClient({
        uri: "https://nefolee.com/rawdata",
        cache: new InMemoryCache()
    })
    const CreateName = function (name) {
        return (
            <Text style={{
                color: COLORS.light,
                fontWeight: "bold",
                fontSize: 14
            }}>

            </Text>
        )
    }
    const Drawer = createDrawerNavigator();
    return (
        <ApolloProvider client={client}>
            <StatusBar
                animated={true}
                backgroundColor={COLORS.dark}
                BarStyle="light-content"
            />
            <NavigationContainer>
                <Drawer.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: COLORS.primary,
                            height: 100
                        },
                        drawerStyle: {
                            color: "white",
                            width: 200
                        },
                        drawerType: "slide",
                    }}
                >
                    <Drawer.Screen  style={{clor:"red"}} name="Home" component={Home}/>
                    <Drawer.Screen name='Offices' component={Offices}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}
