import React, { useContext } from "react";
import { Text, IconButton } from "@react-native-material/core";
import { View, StyleSheet, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext, INote, IAppContext } from "../context/AppContext";

type IList = {
  list: INote[];
  onView: (note: INote) => void;
};

export const List = ({ list, onView }: IList) => {
  const { notes, searchKeywords } = useContext(NoteContext) as IAppContext;

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
            style={{ width: "100%", color: "#000000" }}
          >
            {note.title}
          </Text>
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
    height: 50,
    alignItems: "center",
    alignContent: "center",
  },
});
