import { StyleSheet, Text, View } from "react-native";
import React, { Component, useState } from "react";
import TagName from "./Components/ToDoList/TagName";
import SearchFilter from "./Components/ToDoList/SearchFilter";
import ToDoList from "./Components/ToDoList/ToDoList";
import todos from "./constants/todos";

export default function App() {

  const [toDoList, setToDoList] = useState(todos)

  return (
    <View style={styles.base}>
      <TagName />
      <SearchFilter />
      <ToDoList toDoList={toDoList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: "7%",
    paddingTop: "17%",
    backgroundColor: "#f6fafb",
    height: "100%",
  },
  text: {
    color: "white",
  },
});
