import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AddNote } from "./screens";

const Stack = createNativeStackNavigator();

export const NoteContext = React.createContext(null);

export default function App() {
  const [notes, setNotes] = React.useState([]);

  return (
    <NoteContext.Provider value={{ notes, setNotes } as any}>
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
    </NoteContext.Provider>
  );
}
