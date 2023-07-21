import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList({ toDoList }) {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalShown}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsModalShown(false);
        }}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setIsModalShown((prev) => !prev)}
        >
          <View style={styles.modal}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
            </View>
            <Text>hiadf;asd;fl;dlf;dlf;dd</Text>
          </View>
        </TouchableOpacity>
      </Modal>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>To-Do List</Text>
          <TouchableOpacity onPress={() => setIsModalShown((prev) => !prev)}>
            <View style={styles.imageContainer}>
              <Text style={styles.header}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{ padding: 20 }}
          contentContainerStyle={{ paddingBottom: 200 }}
        >
          {toDoList.map((todo, i) => (
            <ToDoCard key={i} todo={todo} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: 900,
  },
  image: { width: 20, height: 20 },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#BE82FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 5,
  },
  modal: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 40,
    paddingHorizontal: 30,
    marginTop: "50%",
    height: "40%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: "25%",
    opacity: 1,
  },
  modalBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
});
