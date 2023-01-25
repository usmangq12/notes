import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { List, NavBar } from "../components";
import { NoteContext } from "../App";

export const Home = ({ navigation }: any) => {
  const { notes } = useContext<any>(NoteContext);
  return (
    <View style={styles.container}>
      <NavBar />
      <List notes={notes} />
      <FAB
        style={styles.fabBtn}
        icon={(props) => <Icon name="plus" {...props} />}
        onPress={() => navigation.navigate("AddNote")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  fabBtn: { position: "absolute", right: 10, top: 50, marginTop: 50 },
});
