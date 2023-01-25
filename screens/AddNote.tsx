import React, { useState, useContext } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import { TextArea } from "../shared";
import { NoteContext } from "../App";

export const AddNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { notes, setNotes } = useContext<any>(NoteContext);

  const SubmitNotes = () => {
    if (note == null) return;
    setNotes([...notes, { title, note }]);
    setNote("");
    setTitle("");
  };

  return (
    <View>
      <TextInput
        value={title}
        style={styles.titleStyle}
        autoFocus={true}
        placeholder={"Title"}
        onChangeText={(text) => setTitle(text)}
        numberOfLines={1}
      />
      <TextArea
        value={note}
        style={styles.noteStyle}
        placeholder={"Note"}
        onChangeText={(text: string) => setNote(text)}
        numberOfLines={10}
      />
      <Button
        title="Submit"
        onPress={() => {
          SubmitNotes();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: { height: 100, paddingTop: 50, paddingLeft: 10, paddingRight: 5 },
  noteStyle: { height: 500, paddingTop: 5, paddingLeft: 20, paddingRight: 20 },
});
