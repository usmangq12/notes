import React, { useContext, useState, useEffect } from "react";
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
    selectedId,
    setActualNotes,
    setSearchKeywords,
    backGroundColor,
    setBackGroundColor,
  } = useContext<any>(NoteContext);

  const submitNote = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (note === "" || title === "") {
      setBackGroundColor("");
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
      const newNotes = [
        { id, title, note, background: backGroundColor },
        ...notes,
      ];
      setNotes(newNotes);
      setActualNotes(newNotes);
    }
    setBackGroundColor("");
  }, [mode === "Home"]);

  const cancleSearch = () => {
    setOnSearch(false);
    setSearchKeywords("");
  };

  const searchNotes = (text: string) => {
    setSearchKeywords(text);
  };

  return (
    <View style={styles.container}>
      <AppBar
        color="teal"
        title={
          mode === "Home" ? (
            "Notes"
          ) : (
            <Icon
              name="arrow-left"
              onPress={() => navigation.goBack()}
              color="white"
              size={25}
            />
          )
        }
        trailing={(props) => (
          <HStack>
            {mode === "Home" ? (
              onSearch == true ? (
                <>
                  <TextInput
                    style={styles.input}
                    autoFocus={true}
                    placeholder={"Search"}
                    onChangeText={(text) => searchNotes(text)}
                  />

                  <IconButton
                    icon={(props) => (
                      <Icon
                        name={"cancel"}
                        {...props}
                        onPress={() => cancleSearch()}
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
              )
            ) : (
              ""
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
