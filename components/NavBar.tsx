import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext } from "../App";
import { useNavigation } from "@react-navigation/native";

export const NavBar = () => {
  const { note, title, notes, mode, setNotes, setNote, setTitle } =
    useContext<any>(NoteContext);
  const navigation = useNavigation();

  console.log("mode", mode);
  const SubmitNotes = () => {
    if (note === "") {
      return console.log("Please add something to-do");
    }
    setNotes([{ title, note }, ...notes]);
    setNote("");
    setTitle("");
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <AppBar
        title="Notes"
        trailing={(props) => (
          <HStack>
            <IconButton
              icon={(props) => <Icon name="magnify" {...props} />}
              {...props}
            />
            {mode === "AddNote" ? (
              <IconButton
                icon={(props) => (
                  <Icon name="check" {...props} onPress={() => SubmitNotes()} />
                )}
                {...props}
              />
            ) : (
              <IconButton
                icon={(props) => <Icon name="dots-vertical" {...props} />}
                {...props}
              />
            )}
          </HStack>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
