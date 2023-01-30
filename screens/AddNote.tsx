import React, { useContext, useEffect } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { TextArea } from "../shared";
import { NoteContext } from "../App";

export const AddNote = () => {
  const { title, note, setTitle, setNote, setMode } =
    useContext<any>(NoteContext);

  useEffect(() => {
    return () => {
      setNote("");
      setTitle("");
      setMode("Home");
    };
  }, []);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  titleStyle: { paddingLeft: 5, paddingRight: 5, paddingTop: 10 },
  noteStyle: { height: 50, paddingTop: 5, paddingLeft: 5, paddingRight: 5 },
});
