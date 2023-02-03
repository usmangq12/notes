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
  const [notes, setNotes] = useState([]);
  const [mode, setMode] = useState("Home");
  const [selectedNoteId, setSelectedNoteId] = useState("");
  const [searchKeywords, setSearchKeywords] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [backGroundColor, setBackGroundColor] = useState("");
  const [viewType, setViewType] = useState("list");

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
          searchKeywords,
          setSearchKeywords,
          selectedNoteId,
          setSelectedNoteId,
          modalVisible,
          setModalVisible,
          backGroundColor,
          setBackGroundColor,
          viewType,
          setViewType,
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
