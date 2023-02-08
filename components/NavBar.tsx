import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IAppContext, INote, NoteContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "./Menu";

export const NavBar = () => {
  const navigation = useNavigation();
  const [onSearch, setOnSearch] = useState(false);

  const {
    note,
    title,
    notes,
    mode,
    setNotes,
    selectedNoteId,
    setSearchKeywords,
    background,
    setBackground,
    viewType,
    setViewType,
    modalMenu,
    setModalMenu,
  } = useContext(NoteContext) as IAppContext;

  useEffect(() => {
    !background && setBackground("#ffffff");
    if (note === "" || title === "") {
      return console.log("Please add a Note");
    }
    if (selectedNoteId != "") {
      const updatedNotes = notes.map((n: INote) =>
        n.id.toString() === selectedNoteId.toString()
          ? { ...n, title: title, note: note, background: background }
          : n
      );
      setNotes(updatedNotes);
    } else {
      const id = Math.random();
      const newNotes = [{ id, title, note, background: background }, ...notes];
      setNotes(newNotes);
    }
  }, [mode === "Home"]);

  const submitNote = () => {
    !background && setBackground("#ffffff");
    navigation.goBack();
  };

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
        color="#00F4C4"
        title={
          mode === "Home" ? (
            "Notes"
          ) : (
            <Icon
              name="arrow-left"
              onPress={() => navigation.goBack()}
              color="black"
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
              <IconButton
                icon={(props) => (
                  <Icon name="check" {...props} onPress={() => submitNote()} />
                )}
                {...props}
              />
            )}
            {mode === "AddNote" ? (
              selectedNoteId !== "" ? (
                !modalMenu ? (
                  <IconButton
                    icon={(props) => (
                      <Icon
                        name="dots-vertical"
                        {...props}
                        onPress={() => setModalMenu(true)}
                      />
                    )}
                    {...props}
                  />
                ) : (
                  <Menu />
                )
              ) : (
                ""
              )
            ) : viewType === "list" ? (
              <IconButton
                icon={(props) => (
                  <Icon
                    name="view-grid-outline"
                    {...props}
                    onPress={() => setViewType("grid")}
                  />
                )}
                {...props}
              />
            ) : (
              <IconButton
                icon={(props) => (
                  <Icon
                    name="format-list-bulleted"
                    {...props}
                    onPress={() => setViewType("list")}
                  />
                )}
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
    background: "#055C9D",
    paddingTop: 30,
  },
  input: {
    height: 40,
    margin: 6,
    width: 150,
    padding: 10,
  },
});
