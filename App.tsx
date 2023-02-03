import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AddNote } from "./screens";
import { NavBar } from "./components";

const Stack = createNativeStackNavigator();

export const NoteContext = React.createContext(null);

export default function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [actualNotes, setActualNotes] = useState([]);
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState("Home");
  const [selectedId, setSelectedId] = useState("");
  const [searchKeywords, setSearchKeywords] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState("");

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
          actualNotes,
          setActualNotes,
          mode,
          setMode,
          searchKeywords,
          setSearchKeywords,
          selectedId,
          setSelectedId,
          modalVisible,
          setModalVisible,
          backGroundColor,
          setBackGroundColor,
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
