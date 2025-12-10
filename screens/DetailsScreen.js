import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📄</Text>
      <Text style={styles.title}>Écran de détails</Text>
      {route.params && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>ID reçu : {route.params.id}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f4f8',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoBox: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});