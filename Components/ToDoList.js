import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AddContext, StyleContext } from "../Contexts/StyleContext";

export default function ToDoList() {
  const styles = useContext(StyleContext);
  const todo = useContext(AddContext);
  return (
    <View style={styles.ToDoList}>
      <Text>ToDoList</Text>
      {todo.map((e, i) => {
        return <Text key={i}>{e}</Text>
      })}
    </View>
  );
}
