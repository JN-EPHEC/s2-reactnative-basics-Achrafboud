import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen() {
  // Initialize state for the counter with an initial value of 0.
  const [count, setCount] = useState(0);

  // Function to increment the count.
  const incrementCount = () => {
    setCount((c) => c + 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={{ width: 160 }}>
        <Button title="Increment" onPress={incrementCount} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
  },
});
