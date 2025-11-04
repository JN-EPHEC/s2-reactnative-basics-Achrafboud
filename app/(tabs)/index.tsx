import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import TodoItem from "../../components/TodoItem";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <Text style={styles.subtitle}>Hi Achraf — here's your list. (Personalized)</Text>

      {/* ProfileCard usage as part of the screen (exercise 1) */}
      <ProfileCard
        name="Alice"
        jobTitle="React Native Developer"
        imageUrl="https://picsum.photos/200/200"
      />

      {/* Simple hard-coded todo list (homework) */}
      <View style={styles.todoContainer}>
        <TodoItem text="Learn React Native" />
        <TodoItem text="Build a static UI" />
        <TodoItem text="Practice with StyleSheet" />
        <TodoItem text="Try components and props" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  todoContainer: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});
