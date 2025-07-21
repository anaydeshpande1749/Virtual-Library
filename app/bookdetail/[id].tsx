// app/book-detail.jsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const books = [
  {
    id: 1,
    title: "The Art of Programming",
    category: "Non-Fiction",
    image: require('@/assets/images/img1.jpg'),
    description: "A deep dive into programming principles.",
    pdfUri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    category: "Non-Fiction",
    image: require('@/assets/images/img2.jpg'),
    description: "Master data structures and algorithm techniques.",
    pdfUri: "https://www.africau.edu/images/default/sample.pdf"
  },
  {
    id: 3,
    title: "Whispers of the Night",
    category: "Fiction",
    image: require('@/assets/images/img3.jpg'),
    description: "A mysterious journey through dreams and shadows.",
    pdfUri: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
  },
  {
    id: 4,
    title: "Clean Code Essentials",
    category: "Non-Fiction",
    image: require('@/assets/images/img4.jpg'),
    description: "Writing maintainable and scalable code.",
    pdfUri: "https://file-examples.com/storage/fe6d8f33b77580be3460543/2017/10/file-sample_150kB.pdf"
  },
  {
    id: 5,
    title: "Realm of the Forgotten",
    category: "Fiction",
    image: require('@/assets/images/img5.jpg'),
    description: "An epic tale of forgotten magic and lost kingdoms.",
    pdfUri: "https://file-examples.com/storage/fe6d8f33b77580be3460543/2017/10/file-sample_150kB.pdf"
  },
  {
    id: 6,
    title: "Introduction to AI",
    category: "Non-Fiction",
    image: require('@/assets/images/img6.jpg'),
    description: "Discover the fundamentals of artificial intelligence.",
    pdfUri: "https://www.orimi.com/pdf-test.pdf"
  }
];


const BookDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Not Found</Text>
      </View>
    );
  }

  const handleReadNow = () => {
    router.push({
      pathname: '/pdf-viewer',
      params: { pdfUri: book.pdfUri },
    });
  };

  return (
    <View style={styles.container}>
      <Image source={book.image} style={styles.bookImage} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.category}>{book.category}</Text>
      <Text style={styles.description}>{book.description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleReadNow}>
        <Text style={styles.buttonText}>Read Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  bookImage: { width: 200, height: 300, borderRadius: 10, marginBottom: 20, resizeMode: "cover" },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 },
  category: { fontSize: 16, color: 'gray', marginBottom: 10 },
  description: { fontSize: 14, textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default BookDetail;
