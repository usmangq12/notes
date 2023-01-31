import React, { useContext, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { NoteContext } from "../App";

export const ColorModal = () => {
  const { modalVisible, setModalVisible } = useContext<any>(NoteContext);
  return (
    <View style={styles.centeredView}>
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
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginRight: 4,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
