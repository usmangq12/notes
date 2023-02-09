import React, { useContext } from "react";
import { Modal, StyleSheet, Pressable, View, Text } from "react-native";
import { IAppContext, NoteContext } from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";

export const Menu = () => {
  const navigation = useNavigation();
  const { modalMenu, setModalMenu, selectedNoteId, notes, setNotes } =
    useContext(NoteContext) as IAppContext;

  const Delete = ({ selectedNoteId }: any) => {
    const filteredNotes = notes.filter((note) => note.id !== selectedNoteId);
    console.log("filteredNotes", selectedNoteId);
    setNotes(filteredNotes);
    navigation.goBack();
  };

  return (
    <View onTouchEnd={() => setModalMenu(false)}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalMenu}
        style={styles.container}
        onRequestClose={() => {
          setModalMenu(!modalMenu);
        }}
      >
        <View style={styles.view}>
          <Pressable
            style={{ ...styles.pressable }}
            onPress={() => Delete({ selectedNoteId })}
          >
            <Text>Delete</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: "lightgray",
    borderRadius: 2,
    padding: 5,
    flexDirection: "row",
    marginLeft: "50%",
    marginTop: 8,
  },
  pressable: {
    padding: 4,
  },
});
