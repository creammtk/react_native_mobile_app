import React, { useContext } from "react";
import { Text, View } from "react-native";
import { StyleContext } from "../Contexts/StyleContext";
import ToDoList from "./ToDoList";

export default function ToDoListWrapper() {
  const styles = useContext(StyleContext);

  return (
    <View style={styles.ToDoListWrapper}>
      <ToDoList />
    </View>
  );
}
