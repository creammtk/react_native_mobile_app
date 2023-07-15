import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ToDoCard from "./ToDoCard";

export default function ToDoList({ toDoList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <ScrollView
        style={{ padding: 20 }}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        {toDoList.map((todo, i) => (
          <ToDoCard key={i} todo={todo}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: "100%",
  },
  header: {
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 10,
  },
});
