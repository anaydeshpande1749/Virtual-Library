import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const pdfLinks = {
  1: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  2: "https://www.orimi.com/pdf-test.pdf",
  3: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
};

const PdfViewer = () => {
  const { id } = useLocalSearchParams();
  const pdfUrl = pdfLinks[Number(id) as keyof typeof pdfLinks]; // ✅ Fixed conversion

  if (!pdfUrl) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>PDF not found</Text>
      </View>
    );
  }

  return (
    <WebView 
      source={{ uri: pdfUrl }}
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

export default PdfViewer;
