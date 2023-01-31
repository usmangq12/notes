import React, { useContext } from "react";
import { ListItem } from "@react-native-material/core";
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
  } = useContext<any>(NoteContext);

  const onDelete = (note: any) => {
    const filteredNotes = notes.filter(({ id }: any) => id !== note.id);
    setNotes(filteredNotes);
  };

  const onView = ({ title, note, id }: any) => {
    setTitle(title);
    setNote(note);
    setSelectedId(id);
    setMode("AddNote");
    navigation.navigate("AddNote");
  };

  const searchedNotes = notes.filter(({ title }: any) =>
    title.toLowerCase().includes(searchKeywords.toLowerCase())
  );

  return (
    <>
      {searchedNotes.map((note: any, i: number) => (
        <ListItem
          key={i}
          title={note.title}
          onPress={() => onView(note)}
          trailing={(props) => {
            return (
              <View style={styles.Listcontainer}>
                <Icon name="delete" {...props} onPress={() => onDelete(note)} />
              </View>
            );
          }}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  Listcontainer: {
    display: "flex",
    flexDirection: "row",
  },
});
