import React, { useContext } from "react";
import { ListItem } from "@react-native-material/core";
import { View, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext } from "../App";

export const List = ({ navigation }: any) => {
  const { notes, setNotes, setTitle, setNote } = useContext<any>(NoteContext);

  const onDelete = (note: any) => {
    const filteredNotes = notes.filter(
      ({ title }: any) => title !== note.title
    );
    setNotes(filteredNotes);
  };

  const onView = ({ title, note }: any) => {
    setTitle(title);
    setNote(note);
    navigation.navigate("AddNote");
  };

  return (
    <>
      {notes.map((note: any, i: number) => (
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
