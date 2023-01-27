import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AddNote } from "./screens";
import { NavBar } from "./components";

const Stack = createNativeStackNavigator();

export const NoteContext = React.createContext(null);

export default function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState();

  return (
    <NoteContext.Provider
      value={
        {
          title,
          setTitle,
          note,
          setNote,
          notes,
          setNotes,
          mode,
          setMode,
        } as any
      }
    >
      <NavigationContainer>
        <NavBar />
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
