import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import FilterIcon from "../../assets/filter.png";
import CustomModal from "../CustomModal";
import Checkbox from "expo-checkbox";

const CustomCheckBox = ({ value, setValue, label }) => (
  <TouchableWithoutFeedback
    onPress={() => {
      setValue(label, !value);
    }}
  >
    <View style={{ flexDirection: "row", gap: 7 }}>
      <Checkbox
        value={value}
        onValueChange={(newValue) => {
          setValue(label, newValue);
        }}
        style={{ borderRadius: "5%", padding: 5 }}
      />
      <Text>{label}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const CustomButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderWidth: color ? 0 : 0.2,
          padding: 20,
          paddingHorizontal: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: color,
        }}
      >
        <Text style={{ color: color ? "white" : "black" }}>
          {title.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function SearchFilter({
  filter,
  setFilter,
  setFilteredList,
  toDoList,
}) {
  const [isModalShown, setIsModalShown] = useState(false);
  const [filterSelected, setFileterSelected] = useState({
    completed: {
      completed: true,
      incompleted: true,
    },
  });

  useEffect(() => {
    setFilteredList(() => {
      const temp = [...toDoList];
      const filtered = temp.filter((todo) => {
        if (todo.completed) return filterSelected.completed.completed;
        return filterSelected.completed.incompleted;
      });
      return filtered.reverse();
    });
  }, [filterSelected]);

  const handleCheckBoxChange = (field, value) => {
    setFileterSelected((prev) => {
      const result = prev.completed;

      return {
        completed: {
          ...result,
          [field]: value,
        },
      };
    });
  };

  return (
    <>
      <CustomModal
        isModalShown={isModalShown}
        setIsModalShown={setIsModalShown}
      >
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>Filter</Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 5,
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "400", fontSize: 20 }}>Completed?</Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CustomCheckBox
              label="completed"
              value={filterSelected.completed.completed}
              setValue={handleCheckBoxChange}
            />
            <CustomCheckBox
              label="incompleted"
              value={filterSelected.completed.incompleted}
              setValue={handleCheckBoxChange}
            />
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            <CustomButton title="Cancel" />
            <CustomButton title="apply" />
          </View> */}
        </View>
      </CustomModal>
      <View style={styles.container}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={filter}
          onChange={(e) => {
            const value = e.nativeEvent.text;
            setFilter(value);
          }}
        />
        <TouchableOpacity onPress={() => setIsModalShown(true)}>
          <View style={styles.imageContainer}>
            <Image source={FilterIcon} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
    </>
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
