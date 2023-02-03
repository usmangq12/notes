import React, { useContext, useEffect } from "react";
import { Text, IconButton } from "@react-native-material/core";
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext } from "../App";

export const List = ({ navigation }: any) => {
  const {
    notes,
    setNotes,
    setTitle,
    setNote,
    setSelectedNoteId,
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
    setSelectedNoteId(id);
    setMode("AddNote");
    setBackGroundColor(background);
    navigation.navigate("AddNote");
  };

  const list = notes.filter(({ title }: any) =>
    title.toLowerCase().includes(searchKeywords.toLowerCase())
  );
  console.log({ list });
  return (
    <>
      <ScrollView>
        {list.map((note: any, i: number) => (
          <View
            key={i}
            style={{ ...styles.container, backgroundColor: note.background }}
          >
            <Text
              onPress={() => onView(note)}
              variant="body1"
              style={{ width: "86%" }}
            >
              {note.title}
            </Text>
            <IconButton
              icon={(props) => (
                <Icon name="delete" {...props} onPress={() => onDelete(note)} />
              )}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 17,
    paddingRight: 6,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },
  // item: {
  //   backgroundColor: "green",
  // },
});
