import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function CustomTextInput({ value, setValue, title }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
      }}
    >
      <Text style={{ fontWeight: "500", fontSize: 16, color: "#9699a0" }}>
        {title.toUpperCase()}
      </Text>
      <TextInput
        placeholder=""
        style={styles.searchInput}
        value={value}
        onChange={(e) => {
          const value = e.nativeEvent.text;
          setValue(value);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 15,
    borderColor: "#9699a0",
    borderWidth: 0.2,
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: "80%",
    backgroundColor: "white",
  },
});
