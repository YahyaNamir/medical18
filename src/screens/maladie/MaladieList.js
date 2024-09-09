import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const MaladieList = ({ maladies }) => {
  console.log('Maladies received:', maladies);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.diagnostic}</Text>
      <Text style={styles.cell}>{item.rapport}</Text>
      <Text style={styles.cell}>{item.dureeAbsence}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Rapport Médical</Text>
        <Text style={styles.headerText}>Indisponibilité</Text>
      </View>
      <FlatList
        data={maladies}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyText}>No data available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    padding: 20,
    color: '#aaa',
  },
});

export default MaladieList;
