import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { NoteContext } from "../App";
import { useNavigation } from "@react-navigation/native";

export const NavBar = () => {
  const navigation = useNavigation();
  const [onSearch, setOnSearch] = useState(false);
  const {
    note,
    title,
    notes,
    mode,
    setNotes,
    setNote,
    setTitle,
    selectedId,
    actualNotes,
    setActualNotes,
    setSearchKeywords,
  } = useContext<any>(NoteContext);

  const submitNote = () => {
    if (note === "" || title === "") {
      return console.log("Please add a Note");
    }
    if (selectedId != "") {
      const updatedNotes = notes.map((n: any) =>
        n.id === selectedId ? { ...n, title: title, note: note } : n
      );
      setNotes(updatedNotes);
      setActualNotes(updatedNotes);
    } else {
      const id = Math.random();
      const newNotes = [{ id, title, note }, ...notes];
      setNotes(newNotes);
      setActualNotes(newNotes);
    }
    navigation.goBack();
  };

  const searchNotes = (text: string) => {
    setSearchKeywords(text);
    let filterdNotes = [];
    if (text !== "") {
      filterdNotes = notes.filter(({ title }: any) =>
        title.toLowerCase().includes(text.toLowerCase())
      );
    }
    setNotes(actualNotes);
  };

  return (
    <View style={styles.container}>
      <AppBar
        title="Notes"
        trailing={(props) => (
          <HStack>
            {onSearch === true && mode === "Home" ? (
              <>
                <TextInput
                  style={styles.input}
                  autoFocus={true}
                  placeholder={"Search"}
                  onChangeText={(text: string) => searchNotes(text)}
                />

                <IconButton
                  icon={(props) => (
                    <Icon
                      name={"cancel"}
                      {...props}
                      onPress={() => setOnSearch(false)}
                    />
                  )}
                  {...props}
                />
              </>
            ) : (
              <IconButton
                icon={(props) => (
                  <Icon
                    name={"magnify"}
                    {...props}
                    onPress={() => setOnSearch(true)}
                  />
                )}
                {...props}
              />
            )}

            {mode === "AddNote" ? (
              <IconButton
                icon={(props) => (
                  <Icon name="check" {...props} onPress={() => submitNote()} />
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
  input: {
    height: 40,
    margin: 6,
    width: 150,
    padding: 10,
  },
});
