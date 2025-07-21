// BookReviewCard.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Define the props type
type BookProps = {
  book: {
    id: number;
    title: string;
    rating: number;
    review: string;
    date?: string; // optional
  };
};

export default function BookReviewCard({ book }: BookProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.rating}>Rating: {book.rating} ⭐</Text>
      <Text style={styles.review}>{book.review}</Text>
      {book.date && <Text style={styles.date}>Reviewed on: {book.date}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 5,
  },
  review: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
});


// import React from 'react';
// import {  Text } from 'react-native';
// import { View} from 'react-native'; // Add missing View import
// import { useState } from 'react';
// import { StyleSheet, FlatList, TextInput, Pressable } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import BookReviewCard from '@/components/BookReviewCard';
// import { AntDesign } from '@expo/vector-icons';

// type BookProps = {
//     book: {
//       id: number;
//       title: string;
//       rating: number;
//       review: string;
//       date?: string; // optional since Review.tsx doesn't pass it
//     };
//   };

//   export default function BookReviewCard({ book }: BookProps) {
//     return (
//       <View style={styles.card}>
//         <Text style={styles.title}>{book.title}</Text>
//         <Text style={styles.rating}>Rating: {book.rating} ⭐</Text>
//         <Text style={styles.review}>{book.review}</Text>
//         {book.date && <Text style={styles.date}>Reviewed on: {book.date}</Text>}
//       </View>
//     );
//   }

// export default function ReviewScreen() {
//   const [reviews, setReviews] = useState([
//     { id: 1, title: "The Art of Programming", rating: 4.5, review: "Excellent book for beginners", date: "2023-10-15" },
//     { id: 2, title: "Data Structures", rating: 5, review: "Must-read for CS students", date: "2023-11-02" },
//   ]);
  
//   const [newReview, setNewReview] = useState({
//     title: '',
//     rating: 0,
//     review: '',
//   });

//   const handleAddReview = () => {
//     if (newReview.title && newReview.review && newReview.rating > 0) {
//       setReviews([
//         ...reviews,
//         {
//           id: reviews.length + 1,
//           title: newReview.title,
//           rating: newReview.rating,
//           review: newReview.review,
//           date: new Date().toISOString().split('T')[0],
//         },
//       ]);
//       setNewReview({ title: '', rating: 0, review: '' });
//     }
//   };

//   return (
//     <ThemedView style={styles.container}>
//       <ThemedText type="title" style={styles.header}>
//         Book Reviews
//       </ThemedText>
      
//       {/* Review Input Form */}
//       <ThemedView style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Book Title"
//           value={newReview.title}
//           onChangeText={(text) => setNewReview({ ...newReview, title: text })}
//         />
        
//         <View style={styles.ratingInput}>
//           <ThemedText style={styles.label}>Rating:</ThemedText>
//           {[...Array(5)].map((_, i) => (
//             <Pressable
//               key={i}
//               onPress={() => setNewReview({ ...newReview, rating: i + 1 })}
//             >
//               <AntDesign
//                 name={i < newReview.rating ? 'star' : 'staro'}
//                 size={24}
//                 color={i < newReview.rating ? '#FFD700' : '#ccc'}
//               />
//             </Pressable>
//           ))}
//         </View>
        
//         <TextInput
//           style={[styles.input, styles.multilineInput]}
//           placeholder="Your Review"
//           multiline
//           numberOfLines={4}
//           value={newReview.review}
//           onChangeText={(text) => setNewReview({ ...newReview, review: text })}
//         />
        
//         <Pressable
//           style={({ pressed }) => [
//             styles.submitButton,
//             { opacity: pressed ? 0.8 : 1 }
//           ]}
//           onPress={handleAddReview}
//         >
//           <ThemedText style={styles.buttonText}>Submit Review</ThemedText>
//         </Pressable>
//       </ThemedView>

//       {/* Reviews List */}
//       <FlatList
//         data={reviews}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <BookReviewCard book={item} />}
//         contentContainerStyle={styles.list}
//       />
//     </ThemedView>
//   );
// }

// // Add these styles to your existing StyleSheet
// const styles = StyleSheet.create({
//   form: {
//     marginBottom: 20,
//     padding: 15,
//     borderRadius: 10,
//     backgroundColor: '#f0f0f0',
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 10,
//     fontSize: 16,
//   },
//   multilineInput: {
//     minHeight: 100,
//     textAlignVertical: 'top',
//   },
//   ratingInput: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     marginBottom: 15,
//   },
//   label: {
//     fontSize: 16,
//     marginRight: 10,
//   },
//   submitButton: {
//     backgroundColor: '#8A2BE2',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });