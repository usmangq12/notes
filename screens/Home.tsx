import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { FAB, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { List, Grid } from "../components";
import { NoteContext } from "../App";

export const Home = ({ navigation }: any) => {
  const {
    notes,
    setMode,
    setSelectedNoteId,
    searchKeywords,
    setNote,
    setTitle,
    backGroundColor,
    setBackGroundColor,
    viewType,
  } = useContext<any>(NoteContext);

  return (
    <View style={styles.container}>
      {notes.length ? (
        viewType === "list" ? (
          <List key={backGroundColor} navigation={navigation} />
        ) : (
          <Grid key={backGroundColor} navigation={navigation} />
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
          setBackGroundColor("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  fabBtn: { position: "absolute", right: 15, bottom: 20 },
});
