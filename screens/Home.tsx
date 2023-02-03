import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { FAB, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { List } from "../components";
import { NoteContext } from "../App";

export const Home = ({ navigation }: any) => {
  const { notes, setMode, setSelectedId, searchKeywords, setNote, setTitle } =
    useContext<any>(NoteContext);

  return (
    <View style={styles.container}>
      {notes.length ? (
        <List navigation={navigation} />
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
          setSelectedId("");
          setNote("");
          setTitle("");
          setMode("AddNote");
          navigation.navigate("AddNote");
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
