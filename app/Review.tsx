import { View, StyleSheet, FlatList, TextInput, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import BookReviewCard from '@/components/BookReviewCard'; // You'll need to create this component

const reviewData = [
  { id: 1, title: "The Art of Programming", rating: 4.5, review: "Excellent book for beginners", date: "2025-03-10" },
  { id: 2, title: "Data Structures", rating: 5, review: "Must-read for CS students", date: "202-01-10" },
  { id: 3, title: "Clean Code", rating: 5, review: "Taught me how to write elegant and maintainable code.", date: "2024-01-10" },
  { id: 4, title: "Introduction to Algorithms", rating: 4, review: "A comprehensive book but can be dense at times.", date: "2024-02-05" },
  { id: 5, title: "The Pragmatic Programmer", rating: 4.8, review: "Practical insights every developer should know.", date: "2024-03-12" },
  { id: 6, title: "Design Patterns", rating: 4.2, review: "Great for understanding reusable software designs.", date: "2024-04-01" },
  { id: 7, title: "Python Crash Course", rating: 4.7, review: "A solid intro to Python with hands-on projects.", date: "2024-04-10" },
  { id: 8, title: "You Don’t Know JS", rating: 4.6, review: "Deep dive into JavaScript internals. A bit tough but worth it.", date: "2024-04-20" },
  { id: 9, title: "Head First Java", rating: 4.3, review: "Fun and engaging way to learn Java basics.", date: "2024-04-21" },
  { id: 10, title: "Artificial Intelligence: A Modern Approach", rating: 4.1, review: "Advanced concepts, perfect for academic AI learning.", date: "2024-04-22" },
];

export default function ReviewScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        Book Reviews
      </ThemedText>
      
      <FlatList
        data={reviewData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookReviewCard book={item} />}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    gap: 15,
    paddingBottom: 20,
  },
});