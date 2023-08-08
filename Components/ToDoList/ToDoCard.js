import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ToDoCard({ todo }) {
  return (
    <View
      style={{
        ...styles.cardContainer,
        ...(todo.completed && { backgroundColor: "#D5CABD" }),
      }}
    >
      <Text
        style={{
          ...styles.textHeader,
          ...(todo.completed && { color: "grey" }),
        }}
      >
        {todo.title}
      </Text>
      <Text></Text>
      <Text
        style={{
          ...(todo.completed && { color: "grey" }),
        }}
      >
        {todo.detail}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 1,
  },
  textHeader: { fontSize: 18, fontWeight: "700" },
});
