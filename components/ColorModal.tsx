import React, { useContext, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { NoteContext } from "../App";

export const ColorModal = () => {
  const { modalVisible, setModalVisible, backGroundColor, setBackGroundColor } =
    useContext<any>(NoteContext);

  const colors = [
    "#2795ba",
    "#e1c8c3",
    "#d8edee",
    "#eab676",
    "#76b5c5",
    "#b5ae93",
  ];

  const addColor = (color: any) => {
    setBackGroundColor(color);
    setModalVisible(!modalVisible);
  };

  return (
    // <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView horizontal={true}>
            {colors.map((color: any) => (
              <Pressable
                style={{
                  borderRadius: 25,
                  padding: 25,
                  marginRight: 4,
                  backgroundColor: color,
                }}
                onPress={() => addColor(color)}
              ></Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 35,
    flexDirection: "row",
  },
});
