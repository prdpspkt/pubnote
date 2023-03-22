import React from "react";

export const homeScreenStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => (
                    <NavigationDrawerStructure navigationProps={navigation} />
                ),
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}>
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: 'Categories', //Set Header Title
                }}
            />
        </Stack.Navigator>
    );
};