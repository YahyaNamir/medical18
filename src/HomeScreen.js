import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ showPopup, onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          showPopup();
          onNavigate(); 
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Show Popup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default HomeScreen;
