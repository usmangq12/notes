import React, { useContext } from "react";
import { Text, IconButton } from "@react-native-material/core";
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext, INote, IAppContext } from "../context/AppContext";

type IList = {
  onDelete: (note: INote) => void;
  onView: (note: INote) => void;
};

export const List = ({ onDelete, onView }: IList) => {
  const { notes, searchKeywords } = useContext(NoteContext) as IAppContext;

  const list = notes.filter(({ title }: INote) =>
    title.toLowerCase().includes(searchKeywords.toLowerCase())
  );

  return (
    <ScrollView>
      {list.map((note: INote, i: number) => (
        <View
          key={i}
          style={{ ...styles.container, backgroundColor: note.background }}
        >
          <Text
            onPress={() => onView(note)}
            variant="body1"
            style={{ width: "86%", color: "#000000" }}
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
});
