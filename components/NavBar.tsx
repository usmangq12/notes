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
    selectedNoteId,
    setSearchKeywords,
    backGroundColor,
    setBackGroundColor,
    viewType,
    setViewType,
  } = useContext<any>(NoteContext);

  useEffect(() => {
    !backGroundColor && setBackGroundColor("#ffffff");
    if (note === "" || title === "") {
      return console.log("Please add a Note");
    }
    if (selectedNoteId != "") {
      const updatedNotes = notes.map((n: any) =>
        n.id === selectedNoteId
          ? { ...n, title: title, note: note, background: backGroundColor }
          : n
      );
      setNotes(updatedNotes);
    } else {
      const id = Math.random();
      const newNotes = [
        { id, title, note, background: backGroundColor },
        ...notes,
      ];
      setNotes(newNotes);
    }
  }, [mode === "Home"]);

  console.log({ backGroundColor });
  const submitNote = () => {
    !backGroundColor && setBackGroundColor("#ffffff");
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
    marginTop: 30,
  },
  input: {
    height: 40,
    margin: 6,
    width: 150,
    padding: 10,
  },
});
