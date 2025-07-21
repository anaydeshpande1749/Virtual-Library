import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import BookItem from '@/components/shared/BookItem';

const books = [
  {
    id: 1,
    title: "1984",
    author: "Unknown",
    category: "Non-Fiction",
    image: require('@/assets/images/1984.jpg'),
    description: "A deep dive into programming principles.",
    pdfUri: "https://www.planetebook.com/free-ebooks/1984.pdf"
  },
  {
    id: 4,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    category: "Fiction",
    image: require('@/assets/images/crime.jpg'),
    description: "A psychological study of a young man's descent into guilt and redemption.",
    pdfUri: "https://www.planetebook.com/free-ebooks/crime-and-punishment.pdf"
  },
  {
    id: 3,
    title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "Fiction",
    image: require('@/assets/images/great.jpg'),
    description: "A critique of the American Dream set in the Roaring Twenties.",
    pdfUri: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf"
  },
  {
    id: 4,
    title: "Beyond Good and Evil by Friedrich Nietzsche",
    author: "Unknown",
    category: "Non-Fiction",
    image: require('@/assets/images/beyond.jpg'),
    description: "A philosophical work challenging traditional notions of morality and truth.",
    pdfUri: "https://www.planetebook.com/free-ebooks/beyond-good-and-evil.pdf"
  },

  // {
  //   id: 5,
  //   title: "Realm of the Forgotten",
  //   author: "Unknown",
  //   category: "Fiction",
  //   image: require('../../assets/images/img5.jpg'),
  //   description: "An epic tale of forgotten magic and lost kingdoms.",
  //   pdfUri: "https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
  // },
  // {
  //   id: 6,
  //   title: "Introduction to AI",
  //   author: "Unknown",
  //   category: "Non-Fiction",
  //   image: require('../../assets/images/img6.jpg'),
  //   description: "Discover the fundamentals of artificial intelligence.",
  //   pdfUri: "https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf"
  // },
  
  {
    id: 7,
    title: "Frankenstein by Mary Shelley",
    author: "Jane Austen",
    category: "Fiction",
    image: require('@/assets/images/frank.jpeg'),
    description: "A groundbreaking novel that tells the story of Victor Frankenstein, a scientist who creates a sentient creature, leading to tragic consequences.",
    pdfUri: "https://www.planetebook.com/free-ebooks/frankenstein.pdf"
  },
  {
    id: 2,
    title: "Pride and Prejudice by Jane Austen",
    author: "Jane Austen",
    category: "Fiction",
    image: require('@/assets/images/book1.jpg'),
    description: "A classic novel that explores love, class, and societal expectations through the story of Elizabeth Bennet and Mr. Darcy.",
    pdfUri: "https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf"
  }
];


const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const router = useRouter();

  const filteredBooks =
    selectedCategory === "All Books"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {["All Books", "Fiction", "Non-Fiction"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryPill, selectedCategory === category && styles.activePill]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && styles.activeText]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBooks}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookItem
            book={item}
            onPress={() => {
              if (Platform.OS === 'web') {
                window.open(item.pdfUri, '_blank');
              } else {
                router.push({ pathname: "/pdf-viewer", params: { pdfUri: item.pdfUri } }); // ✅ Changed key to pdfUri
              }
            }}
          />
        )}
        contentContainerStyle={styles.bookGrid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingBottom: 20 },
  categoryContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  categoryPill: { padding: 10, borderRadius: 20, marginHorizontal: 5, backgroundColor: '#e0e0e0' },
  activePill: { backgroundColor: '#8A2BE2' },
  categoryText: { color: '#333', fontSize: 14 },
  activeText: { color: '#fff' },
  bookGrid: { paddingHorizontal: 10, justifyContent: 'center' },
});

export default HomePage;
