import React, { useContext } from "react";
import { Surface, Text } from "@react-native-material/core";
import { View } from "react-native";
import { INote, NoteContext } from "../context/AppContext";
import { IAppContext } from "../context/AppContext";

const note =
  "What is your name. Where do you live. I live in Pakistan based in multan. I eat Pizzaz sometimes to get healthier.";
const date = new Date();
export const Grid = ({ navigation }: any) => {
  const { notes } = useContext(NoteContext) as IAppContext;
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
      {notes.map(({ title, note }: INote) => (
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
