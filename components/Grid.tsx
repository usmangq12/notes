import React, { useContext } from "react";
import { Surface, Text } from "@react-native-material/core";
import { View } from "react-native";
import { NoteContext } from "../App";

const note =
  "What is your name. Where do you live. I live in Pakistan based in multan. I eat Pizzaz sometimes to get healthier.";
const date = new Date();
export const Grid = ({ navigation }: any) => {
  const splicedNote = note.slice(0, 50);
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
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingLeft: 20,
        paddingRight: 20,
        height: "auto",
      }}
    >
      {notes.map(({ title, note }: any) => (
        <Surface
          style={{
            width: "48%",
            padding: 10,
            marginTop: 12,
            borderRadius: 5,
            height: "auto",
          }}
        >
          <Text variant="body1">{title}</Text>
          <Text variant="body2" color="#8F8F8F">
            {note}...
          </Text>
        </Surface>
      ))}
    </View>
  );
};
