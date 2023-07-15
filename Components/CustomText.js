import { View, Text } from "react-native";
import React from "react";

export default function CustomText({ children, ...props }) {
  return (
    <Text {...props} style={{ fontFamily: "Helvetica", ...props.style }}>
      {children}
    </Text>
  );
}
