// WordFinder.tsx
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, ScrollView, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function WordFinderScreen() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!word.trim()) return;
    setLoading(true);
    setError('');
    setMeaning(null);

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.trim()}`);
      const data = await response.json();

      if (data.title === 'No Definitions Found') {
        setError('Word not found. Try a different word.');
      } else {
        setMeaning(data[0]);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>📖 Word Finder</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Enter a word"
        value={word}
        onChangeText={setWord}
      />

      <Pressable style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Find Meaning</Text>
      </Pressable>

      {loading && <ActivityIndicator size="large" color="#6A0DAD" style={{ marginTop: 20 }} />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <ScrollView style={styles.result}>
        {meaning && (
          <>
            <Text style={styles.wordTitle}>{meaning.word}</Text>
            {meaning.meanings?.map((m: any, index: number) => (
              <View key={index} style={styles.meaningBlock}>
                <Text style={styles.partOfSpeech}>{m.partOfSpeech}</Text>
                {m.definitions.map((def: any, idx: number) => (
                  <Text key={idx} style={styles.definition}>• {def.definition}</Text>
                ))}
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6A0DAD',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  result: {
    marginTop: 10,
  },
  wordTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },
  partOfSpeech: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#555',
  },
  definition: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
    color: '#333',
  },
  meaningBlock: {
    marginBottom: 15,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 15,
  },
});
