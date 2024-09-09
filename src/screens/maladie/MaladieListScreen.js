import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import MaladieList from './MaladieList';

const MaladieListScreen = () => {
  const [maladies, setMaladies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://192.168.1.26:3000/api/save-data')
      .then(response => response.text())
      .then(text => {
        console.log('Raw response text:', text);
        try {
          const data = JSON.parse(text);
          if (Array.isArray(data)) {
            setMaladies(data);
          } else {
            setError('Unexpected data format');
          }
        } catch (jsonError) {
          setError('Error parsing JSON: ' + jsonError.message);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MaladieList maladies={maladies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default MaladieListScreen;
