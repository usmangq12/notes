import React, { useContext, useEffect } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { TextArea } from "../shared";
import { NoteContext } from "../App";
import { ColorModal } from "../components";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const AddNote = () => {
  const {
    title,
    note,
    notes,
    setNotes,
    setActualNotes,
    setTitle,
    setNote,
    selectedId,
    setSelectedId,
    setMode,
    modalVisible,
    setModalVisible,
  } = useContext<any>(NoteContext);

  useEffect(() => {
    return () => {
      setMode("Home");
    };
  }, []);

  return (
    <View style={styles.container}>
      <>
        <TextInput
          value={title}
          style={styles.titleStyle}
          placeholder={"Title"}
          onChangeText={(text) => setTitle(text)}
        />
        <TextArea
          value={note}
          style={styles.noteStyle}
          placeholder={"Note"}
          onChangeText={(text: string) => setNote(text)}
          numberOfLines={10}
        />

        <ColorModal />

        <IconButton
          icon={(props) => (
            <Icon
              name="invert-colors"
              {...props}
              onPress={() => setModalVisible(true)}
              color="black"
            />
          )}
        />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  titleStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
  },
  noteStyle: {
    flex: 1,
    textAlignVertical: "top",
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
  },
});
