import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { List } from "../components";
import { NoteContext } from "../App";
import { useNavigationState } from "@react-navigation/native";

export const Home = ({ navigation }: any) => {
  const { setMode } = useContext<any>(NoteContext);

  const state = useNavigationState((state) => state);
  const routeName = state.routeNames[state.index];
  console.log("state", state);

  useEffect(() => {
    setMode(routeName);
  }, [routeName]);

  return (
    <View style={styles.container}>
      <List navigation={navigation} />
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
    height: "100%",
  },
  fabBtn: { position: "absolute", right: 15, bottom: 20 },
});
