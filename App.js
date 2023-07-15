import { StyleSheet, Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import TagName from "./Components/ToDoList/TagName";
import SearchFilter from "./Components/ToDoList/SearchFilter";
import ToDoList from "./Components/ToDoList/ToDoList";
import todos from "./constants/todos";

export default function App() {
  const [toDoList, setToDoList] = useState(todos);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (!filter) {
      setToDoList(todos)
      return
    };
    setToDoList((prev) =>
      prev.filter(
        (todo) =>
          todo.title.toLowerCase().includes(filter.toLowerCase()) ||
          todo.detail.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter]);

  return (
    <View style={styles.base}>
      <TagName />
      <SearchFilter filter={filter} setFilter={setFilter} />
      <ToDoList toDoList={toDoList} />
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
