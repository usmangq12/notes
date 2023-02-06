import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AddNote } from "./screens";
import { NavBar } from "./components";
import { AppContext } from "./context/appContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContext>
      <NavBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddNote" component={AddNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext>
  );
}
