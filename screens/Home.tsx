import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { FAB, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { List, Grid } from "../components";
import { INote, NoteContext } from "../context/AppContext";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type RootStackParamList = {
//   Home: navigation | undefined;
//   AddNote: undefined;
// };

// type INavigation = NativeStackScreenProps<
//   RootStackParamList,
//   "Home",
//   "AddNote"
// >;
export const Home = ({ navigation }: any) => {
  const {
    notes,
    setNotes,
    setMode,
    setSelectedNoteId,
    searchKeywords,
    setNote,
    setTitle,
    background,
    setBackground,
    viewType,
  } = useContext<any>(NoteContext);

  const onDelete = ({ id }: INote) => {
    const filteredNotes = notes.filter((note: INote) => note.id !== id);
    setNotes(filteredNotes);
  };

  const onView = ({ title, note, id, background }: INote) => {
    setTitle(title);
    setNote(note);
    setSelectedNoteId(id);
    setMode("AddNote");
    setBackground(background);
    navigation.navigate("AddNote");
  };

  return (
    <View style={styles.container}>
      {notes.length ? (
        viewType === "list" ? (
          <List key={background} onView={onView} onDelete={onDelete} />
        ) : (
          <Grid key={background} onView={onView} onDelete={onDelete} />
        )
      ) : (
        searchKeywords && (
          <View>
            <Text variant="h6">There is no search data</Text>
          </View>
        )
      )}
      <FAB
        style={styles.fabBtn}
        icon={(props) => <Icon name="plus" {...props} color="white" />}
        onPress={() => {
          setSelectedNoteId("");
          setNote("");
          setTitle("");
          setMode("AddNote");
          navigation.navigate("AddNote");
          setBackground("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  fabBtn: {
    position: "absolute",
    right: 15,
    bottom: 30,
    background: "#0E86D4",
  },
});
