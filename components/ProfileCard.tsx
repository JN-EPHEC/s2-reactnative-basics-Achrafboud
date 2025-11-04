import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";

// Define the props interface for type safety
interface ProfileCardProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

// The component receives 'props' as an argument.
// We use destructuring to get the values we need directly.
const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  jobTitle,
  imageUrl,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
    borderLeftWidth: 6,
    borderLeftColor: Colors.light.tint,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  textContainer: {
    marginLeft: 14,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text,
  },
  jobTitle: {
    fontSize: 16,
    color: Colors.light.icon,
  },
});

export default ProfileCard;
