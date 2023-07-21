import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import ToDoCard from "./ToDoCard";
import CustomModal from "../CustomModal";
import CustomTextInput from "../CustomTextInput";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderWidth: 0.2,
          padding: 20,
          paddingHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function ToDoList({ toDoList, setToDoList }) {
  const [isModalShown, setIsModalShown] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = () => {
    const newTodo = {
      title,
      detail,
      completed: false,
    };
    setToDoList((prev) => [...prev, newTodo]);
    setTitle("");
    setDetail("");
    setIsModalShown(false);
  };

  return (
    <>
      <CustomModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Add To-Do</Text>
        <CustomTextInput value={title} setValue={setTitle} title="Title" />
        <CustomTextInput value={detail} setValue={setDetail} title="detail" />
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            marginTop: 30,
            gap: 10,
          }}
        >
          <CustomButton title="cancel" onPress={() => setIsModalShown(false)} />
          <CustomButton title="submit" onPress={() => handleSubmit()} />
        </View>
      </CustomModal>
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
