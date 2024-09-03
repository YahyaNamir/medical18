import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ConsultationTypePopup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sélectionnez le Type de Consultation</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MaladieSteps')}
      >
        <Icon name="medical-services" size={20} color="#fff" />
        <Text style={styles.buttonText}>1 - Maladie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BlessurePage1')}
      >
        <Icon name="healing" size={20} color="#fff" />
        <Text style={styles.buttonText}>2 - Blessure</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CheckUpPage1')}
      >
        <Icon name="check-circle" size={20} color="#fff" />
        <Text style={styles.buttonText}>3 - Check Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  header: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  button: {
    backgroundColor: '#1545c9',
    
    padding: 10,
    borderRadius: 18,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ConsultationTypePopup;
