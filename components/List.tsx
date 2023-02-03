import React, { useContext } from "react";
import { ListItem, Box, Text, IconButton } from "@react-native-material/core";
import { View, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext } from "../App";

export const List = ({ navigation }: any) => {
  const {
    notes,
    setNotes,
    setTitle,
    setNote,
    setSelectedId,
    setMode,
    searchKeywords,
    setBackGroundColor,
  } = useContext<any>(NoteContext);

  const onDelete = (note: any) => {
    const filteredNotes = notes.filter(({ id }: any) => id !== note.id);
    setNotes(filteredNotes);
  };

  const onView = ({ title, note, id, background }: any) => {
    setTitle(title);
    setNote(note);
    setSelectedId(id);
    setMode("AddNote");
    setBackGroundColor(background);
    navigation.navigate("AddNote");
  };

  const searchedNotes = notes.filter(({ title }: any) =>
    title.toLowerCase().includes(searchKeywords.toLowerCase())
  );
  console.log("searchedNotes: ", searchedNotes);
  return (
    <>
      {searchedNotes.map((note: any, i: number) => (
        <View
          style={{
            backgroundColor: `${note.background}`,
            display: "flex",
            flexDirection: "row",
            paddingBottom: 10,
            paddingTop: 10,
            paddingLeft: 17,
            paddingRight: 6,
            marginBottom: 5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text key={i} onPress={() => onView(note)} variant="body1">
            {note.title}
          </Text>

          <IconButton
            icon={(props) => (
              <Icon name="delete" {...props} onPress={() => onDelete(note)} />
            )}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  Listcontainer: {
    display: "flex",
    flexDirection: "row",
  },
  Item: {
    backgroundColor: "green",
  },
});
