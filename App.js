import { StyleSheet, Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import TagName from "./Components/ToDoList/TagName";
import SearchFilter from "./Components/ToDoList/SearchFilter";
import ToDoList from "./Components/ToDoList/ToDoList";
import todos from "./constants/todos";

export default function App() {
  const [toDoList, setToDoList] = useState(todos);
  const [filteredList, setFilteredList] = useState(todos)
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilteredList(toDoList.filter(
      (todo) =>
        todo.title.toLowerCase().includes(filter.toLowerCase()) ||
        todo.detail.toLowerCase().includes(filter.toLowerCase())
    ).reverse());
  }, [filter, toDoList]);

  return (
    <View style={styles.base}>
      <TagName pendingTaskNo={filteredList.length} />
      <SearchFilter filter={filter} setFilter={setFilter} />
      <ToDoList toDoList={filteredList} setToDoList={setToDoList}/>
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
