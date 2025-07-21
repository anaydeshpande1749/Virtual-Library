// // Shop.tsx
// import React from 'react';
// import { View, StyleSheet, Linking, Pressable, ScrollView, Text } from 'react-native';
// import { ThemedView } from '@/components/ThemedView';
// import { ThemedText } from '@/components/ThemedText';
// import { AntDesign } from '@expo/vector-icons';

// // List of online book stores
// const bookStores = [
//   { name: 'Amazon Books', url: 'https://www.amazon.in/books-used-books-textbooks/b?ie=UTF8&node=976389031' },
//   { name: 'Flipkart Books', url: 'https://www.flipkart.com/books-store' },
//   //{ name: 'Book Depository', url: 'https://www.bookdepository.com/' },
//   { name: 'Snapdeal Books', url: 'https://www.snapdeal.com/products/books' },
//   { name: 'Wordery', url: 'https://wordery.com/' },
//   { name: 'Project Gutenberg (Free eBooks)', url: 'https://www.gutenberg.org/' },
//   { name: 'Google Books', url: 'https://books.google.com/' },
//   { name: 'Open Library', url: 'https://openlibrary.org/' },
// ];

// export default function ShopScreen() {
//   const openLink = async (url: string) => {
//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//       await Linking.openURL(url);
//     }
//   };

//   return (
//     <ThemedView style={styles.container}>
//       <ThemedText type="title" style={styles.header}>
//         🛒 Buy Books Online
//       </ThemedText>

//       <ScrollView contentContainerStyle={styles.list}>
//         {bookStores.map((store, index) => (
//           <Pressable
//             key={index}
//             style={({ pressed }) => [
//               styles.card,
//               { opacity: pressed ? 0.7 : 1 },
//             ]}
//             onPress={() => openLink(store.url)}
//           >
//             <View style={styles.row}>
//               <AntDesign name="shoppingcart" size={20} color="#8A2BE2" />
//               <Text style={styles.linkText}>{store.name}</Text>
//             </View>
//           </Pressable>
//         ))}
//       </ScrollView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#F5F3FF',
//   },
//   header: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#4B0082',
//   },
//   list: {
//     gap: 15,
//     paddingBottom: 30,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//   },
//   linkText: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#4B0082',
//   },
// });

import React, { useState } from 'react';
import { View, StyleSheet, Pressable, ScrollView, Text, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

// List of online book stores
const bookStores = [
  { name: 'Amazon Books', url: 'https://www.amazon.in/books-used-books-textbooks/b?ie=UTF8&node=976389031' },
  { name: 'Flipkart Books', url: 'https://www.flipkart.com/books-store' },
  { name: 'Snapdeal Books', url: 'https://www.snapdeal.com/products/books' },
  { name: 'Wordery', url: 'https://wordery.com/' },
  { name: 'Project Gutenberg (Free eBooks)', url: 'https://www.gutenberg.org/' },
  { name: 'Google Books', url: 'https://books.google.com/' },
  { name: 'Open Library', url: 'https://openlibrary.org/' },
];

export default function ShopScreen() {
  const [webViewUrl, setWebViewUrl] = useState<string | null>(null);

  const openInWebView = (url: string) => {
    setWebViewUrl(url);
  };

  const closeWebView = () => {
    setWebViewUrl(null);
  };

  if (webViewUrl) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.webviewHeader}>
          <TouchableOpacity onPress={closeWebView} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <WebView source={{ uri: webViewUrl }} style={{ flex: 1 }} />
      </View>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        🛒 Buy Books Online
      </ThemedText>

      <ScrollView contentContainerStyle={styles.list}>
        {bookStores.map((store, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.card,
              { opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={() => openInWebView(store.url)}
          >
            <View style={styles.row}>
              <AntDesign name="shoppingcart" size={20} color="#8A2BE2" />
              <Text style={styles.linkText}>{store.name}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F3FF',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4B0082',
  },
  list: {
    gap: 15,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  linkText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4B0082',
  },
  webviewHeader: {
    backgroundColor: '#4B0082',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
  },
});
