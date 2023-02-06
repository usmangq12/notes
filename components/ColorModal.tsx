import React, { useContext } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { NoteContext } from "../App";

const colors = [
  "#2795ba",
  "#e1c8c3",
  "#d8edee",
  "#eab676",
  "#76b5c5",
  "#b5ae93",
];

export const ColorModal = () => {
  const { modalVisible, setModalVisible, setBackGroundColor } =
    useContext<any>(NoteContext);

  const addColor = (color: any) => {
    setBackGroundColor(color);
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
        {colors.map((color: any) => (
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
    backgroundColor: "lightgray",
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
