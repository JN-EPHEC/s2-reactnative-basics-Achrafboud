import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

type Props = {
  text: string;
};

const TodoItem: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderLeftWidth: 6,
    borderLeftColor: Colors.light.tint,
  },
  text: {
    fontSize: 16,
    color: Colors.light.text,
  },
});

export default TodoItem;
