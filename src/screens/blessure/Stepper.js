import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stepper = ({ steps, currentStep, onStepChange, onFinish }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepperLine}>
        {steps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.step,
              index === currentStep ? styles.activeStep : null,
            ]}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        {currentStep > 0 && (
          <TouchableOpacity onPress={() => onStepChange(currentStep - 1)} style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        <View style={styles.rightButtonContainer}>
          {currentStep < steps.length - 1 && (
            <TouchableOpacity onPress={() => onStepChange(currentStep + 1)} style={styles.button}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
          {currentStep === steps.length - 1 && (
            <TouchableOpacity onPress={onFinish} style={styles.button}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  stepperLine: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  step: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: '#007BFF',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  rightButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
});

export default Stepper;
