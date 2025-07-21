// Info.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// Sample book location data
const bookLocations = [
  { id: 1, title: "The Art of Programming", locker: "A1", section: "Computer Science", shelf: "Top" },
  { id: 2, title: "Data Structures", locker: "A2", section: "Computer Science", shelf: "Middle" },
  { id: 3, title: "Clean Code", locker: "B1", section: "Software Engineering", shelf: "Bottom" },
  { id: 4, title: "Introduction to Algorithms", locker: "B2", section: "Algorithms", shelf: "Top" },
  { id: 5, title: "The Pragmatic Programmer", locker: "C1", section: "Development", shelf: "Middle" },
  { id: 6, title: "Design Patterns", locker: "C2", section: "Architecture", shelf: "Bottom" },
  { id: 7, title: "Python Crash Course", locker: "D1", section: "Programming Languages", shelf: "Top" },
  { id: 8, title: "You Don’t Know JS", locker: "D2", section: "Web Development", shelf: "Middle" },
  { id: 9, title: "Head First Java", locker: "E1", section: "Java", shelf: "Bottom" },
  { id: 10, title: "Artificial Intelligence: A Modern Approach", locker: "F1", section: "AI & ML", shelf: "Top" },
];

export default function InfoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>📚 Book Location Info</ThemedText>

      <FlatList
        data={bookLocations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>Locker: {item.locker}</Text>
            <Text style={styles.details}>Section: {item.section}</Text>
            <Text style={styles.details}>Shelf: {item.shelf}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    gap: 15,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  details: {
    fontSize: 15,
    color: '#333',
  },
});
