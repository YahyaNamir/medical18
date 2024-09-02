import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stepper from './Stepper';

const BlessurePage3 = ({ navigation }) => {
  const handleStepChange = (step) => {
    navigation.navigate(`BlessurePage${step + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blessure Page 3</Text>
      <Stepper steps={[1, 2, 3, 4]} currentStep={2} onStepChange={handleStepChange} />
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

export default BlessurePage3;
