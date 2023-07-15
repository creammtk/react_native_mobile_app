import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FilterIcon from "../../assets/filter.png";

export default function SearchFilter() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.searchInput} />
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image source={FilterIcon} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchInput: {
    borderRadius: 25,
    borderColor: "black",
    // borderWidth: 3,
    padding: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: "80%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  image: { width: 20, height: 20 },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ff7461",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
});