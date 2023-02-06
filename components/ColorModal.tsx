import React, { useContext } from "react";
import { Alert, Modal, StyleSheet, Pressable, View } from "react-native";
import { IAppContext, NoteContext } from "../context/AppContext";

const colors = [
  "#BFD7ED",
  "#F9F1F0",
  "#F6EEE0",
  "#ECFDF1",
  "#F2F1F0",
  "#EEEDE7",
];

export const ColorModal = () => {
  const { modalVisible, setModalVisible, setBackground } = useContext(
    NoteContext
  ) as IAppContext;

  const addColor = (color: string) => {
    setBackground(color);
    setModalVisible(!modalVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      style={styles.container}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.view}>
        {colors.map((color: string) => (
          <Pressable
            style={{ ...styles.pressableColor, backgroundColor: color }}
            onPress={() => addColor(color)}
          ></Pressable>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  view: {
    background: "lightgray",
    borderRadius: 20,
    padding: 35,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  pressableColor: {
    borderRadius: 25,
    padding: 25,
    marginRight: 4,
  },
});
