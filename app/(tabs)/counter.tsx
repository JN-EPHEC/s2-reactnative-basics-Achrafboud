import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Button } from "@react-navigation/elements"; // on garde ce Button

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((c) => c + 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <Button onPress={incrementCount}>
        Increment
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});