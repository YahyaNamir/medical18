import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import MaladiePage1 from './MaladiePage1';
import MaladiePage2 from './MaladiePage2';
import MaladiePage3 from './MaladiePage3';
import MaladiePage4 from './MaladiePage4';

export default function MaladieSteps({navigation}) {
  const handleFinish = () => {
    Alert.alert('Form submitted!');
    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLine} />
      <ProgressSteps
        activeStepIconBorderColor="#007BFF"
        completedProgressBarColor="#034387"
        completedStepIconColor="#034387">
        <ProgressStep
          labelStyle={{color: '#007bff', fontFamily: 'Poppins-Bold'}}
          label="Infos"
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <MaladiePage1 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Prescription"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <MaladiePage2 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Bilan Complémentaire et Avis Spécialisée"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          // nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <MaladiePage3 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Informations additionnelles"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          finishBtnStyle={styles.button}
          finishBtnTextStyle={styles.buttonText}
          onSubmit={handleFinish}>
          <View style={styles.stepContainer}>
            <MaladiePage4 />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  topLine: {
    height: 1,
    backgroundColor: '#007BFF',
  },
  stepContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Bold',
  },
});
