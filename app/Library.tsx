

import { StyleSheet, Pressable, Alert, View, ImageBackground } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { useState } from 'react';
import { WebView } from 'react-native-webview'; // IMPORT WebView
import * as Linking from 'expo-linking'; // ADD THIS at top

export default function LibraryScreen() {
  const [openWebView, setOpenWebView] = useState(false); // For switching screen inside same component

  // const handleOpenWebsite = () => {
  //   setOpenWebView(true);
  // };

  const handleOpenWebsite = () => {
    Linking.openURL('https://chatapp-2aeb8.web.app/');
  };

  if (openWebView) {
    return (
      <View style={{ flex: 1 }}>
        {/* BACK button */}
        <Pressable
          style={styles.backButton}
          onPress={() => setOpenWebView(false)}
        >
          <ThemedText style={styles.backButtonText}>⬅ Back</ThemedText>
        </Pressable>

        {/* WebView that shows your chat app */}
        <WebView 
          source={{ uri: 'https://chatapp-2aeb8.web.app/' }} 
          style={{ flex: 1 }} 
          startInLoadingState
        />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('@/assets/images/Lib.png')} // Correct local image path
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>
            Virtual Library Portal
          </ThemedText>
          
          <ThemedText style={styles.description}>
            Access our full library Discussion Forum
          </ThemedText>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={handleOpenWebsite}
          >
            <ThemedText style={styles.buttonText}>
              Click to Enter Chat Discussion rooms
            </ThemedText>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.reviewButton,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={() => router.push('/Review')}
          >
            <ThemedText style={styles.buttonText}>
              Review Books
            </ThemedText>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.review1Button,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={() => router.push('/Info')}
          >
            <ThemedText style={styles.buttonText}>
              Book's Location Info
            </ThemedText>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.review2Button,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={() => router.push('/Shop')}
          >
            <ThemedText style={styles.buttonText}>
              Book Store
            </ThemedText>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.review3Button,
              { opacity: pressed ? 0.8 : 1 }
            ]}
            onPress={() => router.push('/Find')}
          >
            <ThemedText style={styles.buttonText}>
              Word Finder
            </ThemedText>
          </Pressable>

        </ThemedView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'navy',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  reviewButton: {
    backgroundColor: '#38a169',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  review1Button: {
    backgroundColor: '#2d3748',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  review2Button: {
    backgroundColor: '#8A2BE2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  review3Button: {
    backgroundColor: '#4169E1',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 10,
  },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
