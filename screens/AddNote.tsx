import React, { useContext, useEffect } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { TextArea } from "../shared";
import { NoteContext } from "../App";
import { useNavigationState } from "@react-navigation/native";

export const AddNote = ({ navigation }: any) => {
  const { title, note, setTitle, setNote, setMode } =
    useContext<any>(NoteContext);

  const state = useNavigationState((state) => state);
  const routeName = state.routeNames[state.index];

  useEffect(() => {
    setMode(routeName);
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
