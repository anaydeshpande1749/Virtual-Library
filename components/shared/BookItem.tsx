import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface Book {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface BookItemProps {
  book: Book;
  onPress: () => void;
}

const router = useRouter();

const BookItem: React.FC<BookItemProps> = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.bookBox} onPress={() => router.push('/')}>
      <Image 
        source={typeof book.image === "string" ? { uri: book.image } : book.image} 
        style={styles.bookImage} 
        resizeMode="contain"
      />

      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text style={styles.bookDescription}>{book.description}</Text>
      <TouchableOpacity style={styles.readButton} onPress={onPress}>
        <Text style={styles.readButtonText}>Read Now</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookBox: {
    width: "45%", // Ensures two items per row
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  bookImage: {
    width: 120,  // Try a fixed width
    height: 180, // Try a fixed height
    borderRadius: 10,
    backgroundColor: 'lightgray' // Helps check if the image is missing
  },
  
  bookTitle: { marginTop: 8, fontSize: 16, fontWeight: "bold", textAlign: "center" },
  bookDescription: { marginTop: 5, fontSize: 12, textAlign: "center", color: "#666" },
  readButton: { marginTop: 10, backgroundColor: "#8A2BE2", paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5 },
  readButtonText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
});

export default BookItem;
