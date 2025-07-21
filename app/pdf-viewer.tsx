import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const PDFViewer = () => {
  const { url, pdfUri } = useLocalSearchParams();
  const finalUrl = Platform.OS === 'web'
    ? (url || pdfUri)
    : `https://docs.google.com/gview?embedded=true&url=${url || pdfUri}`;

  if (!finalUrl || typeof finalUrl !== 'string') {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>PDF not found</Text>
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: finalUrl }}
      style={{ flex: 1 }}
      startInLoadingState={true}
      renderLoading={() => <ActivityIndicator size="large" color="blue" />}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { fontSize: 18, color: 'red' },
});

export default PDFViewer;
