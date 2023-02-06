import React, { useContext } from "react";
import { INote, NoteContext } from "../context/AppContext";
import { IAppContext } from "../context/AppContext";
import { Text, Surface } from "@react-native-material/core";
import { View, TouchableWithoutFeedback } from "react-native";

type IGrid = {
  list: INote[];
  onView: (note: INote) => void;
};

export const Grid = ({ list, onView }: IGrid) => {
  const { notes } = useContext(NoteContext) as IAppContext;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingLeft: 20,
        paddingRight: 20,
        height: "auto",
      }}
    >
      {list.map((note: INote) => (
        <TouchableWithoutFeedback onPress={() => onView(note)}>
          <Surface
            style={{
              width: "48%",
              padding: 10,
              marginTop: 12,
              borderRadius: 5,
              height: "auto",
              backgroundColor: note.background,
            }}
          >
            <Text variant="body1">{note.title}</Text>
            {note.note.length > 70 ? (
              <Text variant="body2" color="#8F8F8F">
                {note.note.split(" ").slice(0, 20).join(" ")}
              </Text>
            ) : (
              <Text variant="body2" color="#8F8F8F">
                {note.note}
              </Text>
            )}
          </Surface>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};
