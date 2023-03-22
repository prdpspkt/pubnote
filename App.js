import Home from "./screens/Home";
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Offices from "./screens/Offices";
import {NavigationContainer} from "@react-navigation/native";
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {PostPage, Category} from "./screens";

const client = new ApolloClient({
uri : "https://nefolee.com/graphql",
    cache: new InMemoryCache()
})

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Offices" component={Offices}/>
            <Drawer.Screen name="PostPage" options={{
                drawerItemStyle: {
                    display: 'none'
                }
            }} component={PostPage}/>
            <Drawer.Screen name="Category"
                           options={{
                               drawerItemStyle: {
                                   display: 'none'
                               }
                           }}
                           component={Category}/>
        </Drawer.Navigator>

    )
}

export default function App() {

    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </ApolloProvider>
    )

}