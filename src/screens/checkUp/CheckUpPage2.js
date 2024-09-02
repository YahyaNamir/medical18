import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stepper from '../blessure/Stepper';

const CheckUpPage2 = ({ navigation }) => {
  const handleStepChange = (step) => {
    navigation.navigate(`CheckUpPage${step + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Up Page 2</Text>
      <Stepper
        steps={[1, 2, 3, 4]}
        currentStep={1}
        onStepChange={handleStepChange}
        onFinish={() => navigation.navigate('CheckUpPage4')}
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

export default CheckUpPage2;
