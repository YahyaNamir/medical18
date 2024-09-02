import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stepper from './Stepper';

const BlessurePage2 = ({ navigation }) => {
  const handleStepChange = (step) => {
    navigation.navigate(`Page${step + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 2</Text>
      <Stepper steps={[1, 2, 3]} currentStep={1} onStepChange={handleStepChange} />
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

export default BlessurePage2;
