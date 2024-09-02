import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stepper from '../blessure/Stepper';

const CheckUpPage4 = ({ navigation }) => {
  const handleStepChange = (step) => {
    if (step === 2) {
      navigation.navigate('CheckUpPage3');
    }
  };

  const handleFinish = () => {
    alert('Form submitted !');
    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Up Page 4</Text>
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

export default CheckUpPage4;
