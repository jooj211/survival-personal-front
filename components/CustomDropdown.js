import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const options = [
  { label: "Atividade", value: "activity" },
  { label: "Disciplina", value: "discipline" },
];

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [modalVisible, setModalVisible] = useState(false);

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        setSelectedValue(item.value);
        setModalVisible(false);
      }}
    >
      <Text style={[styles.itemText, { color: "white" }]}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectedContainer}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.selectedTextContainer}>
          <Text style={styles.selectedText}>
            {options.find((option) => option.value === selectedValue).label}
          </Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => setModalVisible(false)}
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={(item) => item.value}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: "5px",
    borderWidth: 1,
    borderColor: "rgb(128, 128, 128)",
    marginTop: 5,
  },
  backButtonContainer: {
    padding: 12,
    alignSelf: "flex-start",
  },
  selectedContainer: {
    height: 40,
    width: "100%",
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedText: {
    fontSize: 18,
    color: "#fff",
    paddingRight: 8,
  },
  icon: {
    alignSelf: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  itemContainer: {
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
});

export default CustomDropdown;
