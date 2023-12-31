import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

export default function CustomModal({
  isModalShown,
  setIsModalShown,
  children,
}) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isModalShown}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setIsModalShown(false);
      }}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        onPress={() => setIsModalShown((prev) => !prev)}
      >
        <TouchableWithoutFeedback>
          <View style={styles.modal}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%",
              }}
            ></View>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
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
    paddingVertical: 30,
    paddingHorizontal: 30,
    marginTop: "50%",
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
