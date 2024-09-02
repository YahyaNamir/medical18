import React from 'react';
import { View, StyleSheet } from 'react-native';
import Stepper from './Stepper';

const BlessureStepper = () => {
  const steps = [
    { id: 1, label: 'Step 1' },
    { id: 2, label: 'Step 2' },
    { id: 3, label: 'Step 3' },
  ];

  return (
    <View style={styles.container}>
      <Stepper steps={steps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BlessureStepper;
