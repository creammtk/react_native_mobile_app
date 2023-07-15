import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import avatar from "../../assets/man.png";

export default function TagName() {
  const name = "Franku";
  const pendingTaskNo = 10;

  return (
    <View style={styles.container}>
      <View>
        <CustomText style={styles.greetingText}>Hi! {name}</CustomText>
        <CustomText style={styles.pendingText}>
          {pendingTaskNo} Tasks pending
        </CustomText>
      </View>
      <View>
        <Image source={avatar} style={styles.avatarPic} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  greetingText: { fontSize: 25, fontWeight: "bold" },
  pendingText: { color: "#ff7461" },
  avatarPic: { width: 50, height: 50 },
});
