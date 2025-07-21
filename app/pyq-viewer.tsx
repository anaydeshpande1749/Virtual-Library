import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';

const PyqViewer = () => {
  const { url } = useLocalSearchParams();
  const router = useRouter();

  if (!url || typeof url !== 'string') {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>PDF not found</Text>
      </View>
    );
  }

  // Encode the URL safely
  const finalUrl =
    Platform.OS === 'web'
      ? url
      : `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(url)}`;

  return (
    <View style={{ flex: 1 }}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>PDF Viewer</Text>
      </View>

      <WebView
        source={{ uri: finalUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#8A2BE2" />
            <Text style={styles.loadingText}>Loading PDF...</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { fontSize: 18, color: 'red' },

  header: {
    height: 60,
    backgroundColor: '#8A2BE2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  backButton: {
    padding: 5,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
});

export default PyqViewer;
