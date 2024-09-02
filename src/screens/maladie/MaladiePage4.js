import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Stepper from '../blessure/Stepper'; 

const MaladiePage4 = ({ navigation }) => {
  const handleStepChange = (step) => {
    if (step === 2) {
      navigation.navigate('MaladiePage3');
    }
  };

  const handleFinish = () => {
    alert('Form submitted !');
    navigation.navigate('ConsultationTypePopup'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maladie Page 4</Text>
    <View style={styles.stepperContainer}>
      <Stepper
        steps={[1, 2, 3, 4]}
        currentStep={3}
        onStepChange={handleStepChange}
        onFinish={handleFinish}
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  stepperContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default MaladiePage4;
