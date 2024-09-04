import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import BlessurePage1 from './BlessurePage1';
import BlessurePage3 from './BlessurePage3';
import BlessurePage4 from './BlessurePage4';
import BlessurePage5 from './BlessurePage5';
import BlessurePage2 from './BlessurePage2';

export default function BlessureSteps({navigation}) {
  const handleFinish = () => {
    Alert.alert('Form submitted!');
    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topLine} />
      <ProgressSteps
        activeStepIconBorderColor="#0079fa"
        completedProgressBarColor="#034387"
        completedStepIconColor="#034387">
        <ProgressStep
          labelStyle={{color: '#007bff', fontFamily: 'Poppins-Bold'}}
          label="Infos"
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <BlessurePage1 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Contexte de la blessure"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <BlessurePage2 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Prescription"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <BlessurePage3 />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Bilan Complémentaire et Avis Spécialisée"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <BlessurePage4 />
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
            <BlessurePage5 />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topLine: {
    height: 1,
    backgroundColor: '#0037ff',
  },
  stepContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
