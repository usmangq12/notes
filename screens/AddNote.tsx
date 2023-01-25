import React, { useState, useContext } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import { TextArea } from "../shared";
import { NoteContext } from "../App";

export const AddNote = ({ navigation: { goBack } }: any) => {
  const { title, note, notes, setNotes, setTitle, setNote } =
    useContext<any>(NoteContext);

  const SubmitNotes = () => {
    if (note == null) return;
    setNotes([{ title, note }, ...notes]);
    setNote("");
    setTitle("");
    goBack();
  };

  return (
    <View>
      <TextInput
        value={title}
        style={styles.titleStyle}
        autoFocus={true}
        placeholder={"Title"}
        onChangeText={(text) => setTitle(text)}
      />
      <TextArea
        value={note}
        style={styles.noteStyle}
        placeholder={"Note"}
        onChangeText={(text: string) => setNote(text)}
        numberOfLines={10}
      />
      <Button title="Submit" onPress={() => SubmitNotes()} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: { paddingTop: 50, paddingLeft: 5, paddingRight: 5 },
  noteStyle: { height: 50, paddingTop: 5, paddingLeft: 5, paddingRight: 5 },
});
