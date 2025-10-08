import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import TodoItem from "../../components/TodoItem"; // on remplace ProfileCard par TodoItem

// On garde la même structure, mais avec des tâches au lieu des utilisateurs
const TODOS_DATA = [
  { id: "1", text: "Learn React Native" },
  { id: "2", text: "Build a static UI" },
  { id: "3", text: "Practice with StyleSheet" },
  { id: "4", text: "Commit my homework" },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Titre principal */}
      <Text style={styles.title}>My Todo List</Text>

      {/* Même logique map() que ta base, mais adaptée aux todos */}
      {TODOS_DATA.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20, // padding principal demandé par le devoir
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  // on garde tes anciens styles intacts (pour respecter la base)
  item: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  nom: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
