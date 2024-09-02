import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stepper from './Stepper';

const BlessurePage4 = ({ navigation }) => {
  const handleStepChange = (step) => {
    if (step === 2) {
      navigation.navigate('BlessurePage3');
    }
  };

  const handleFinish = () => {
    alert('Form submitted !');
    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blessure Page 4</Text>
      <Stepper
        steps={[1, 2, 3, 4]}
        currentStep={3}
        onStepChange={handleStepChange}
        onFinish={handleFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default BlessurePage4;
