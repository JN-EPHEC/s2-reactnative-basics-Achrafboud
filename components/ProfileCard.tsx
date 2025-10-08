import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

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
      {/* Image du profil */}
      <Image source={{ uri: imageUrl }} style={styles.image} />

      {/* Bloc texte */}
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
    padding: 20,
    margin: 16,
    flexDirection: "row", // image + texte côte à côte
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContainer: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 16,
    color: "gray",
  },
});

export default ProfileCard;
