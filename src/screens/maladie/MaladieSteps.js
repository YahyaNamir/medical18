/* eslint-disable quotes */
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import MaladiePage1 from './MaladiePage1';
import MaladiePage2 from './MaladiePage2';
import MaladiePage3 from './MaladiePage3';
import MaladiePage4 from './MaladiePage4';

export default function MaladieSteps({navigation}) {
  const [formData, setFormData] = useState({
    page1: {
      date: new Date(),
      diagnostic: '',
      dureeAbsence: '',
      typeAbsence: '',
    },
    page2: {
      date: new Date(),
      consultations: [],
      selectedConsultations: [],
      medicaments: [],
      selectedMedicaments: [],
      soinsPodologiques: [],
      selectedSoinsPodologiques: [],
      commentaireOrdonance: '',
    },
    page3: {
      commentaire: '',
      commentaireSpecialises: '',
      consultations: [],
      selectedConsultations: [],
      soinsPodologiques: [],
      selectedSoinsPodologiques: [],
    },
    page4: {
      rapport: '',
      selectedDocument: null,
    },
  });

  const updateFormData = (page, data) => {
    setFormData(prevData => ({
      ...prevData,
      [page]: {
        ...prevData[page],
        ...data,
      },
    }));
  };

  const handleFinish = () => {
    if (
      // formData.page1.date !== '' &&
      // formData.page1.diagnostic !== '' &&
      // formData.page1.dureeAbsence !== '' &&
      // formData.page1.typeAbsence !== '' &&
      // formData.page2.commentaireOrdonance !== '' &&
      // formData.page2.date !== '' &&
      // formData.page2.selectedConsultations.length > 0 &&
      // formData.page2.selectedMedicaments.length > 0 &&
      // formData.page3.commentaire !== '' &&
      // formData.page3.commentaireSpecialises !== '' &&
      // formData.page3.selectedConsultations.length > 0 &&
      // formData.page3.selectedSoinsPodologiques.length > 0 &&
      // formData.page4.rapport !== ''
      1
    ) {
      const form = new FormData();

      form.append('page1_date', formData.page1.date.toUTCString());
      form.append('page1_diagnostic', formData.page1.diagnostic);
      form.append('page1_dureeAbsence', formData.page1.dureeAbsence);
      form.append('page1_typeAbsence', formData.page1.typeAbsence);

      form.append('page2_date', formData.page2.date.toUTCString());
      form.append(
        'page2_selectedConsultations',
        formData.page2.selectedConsultations.join(','),
      );
      form.append(
        'page2_selectedMedicaments',
        formData.page2.selectedMedicaments.join(','),
      );
      form.append('page2_commentaire', formData.page2.commentaireOrdonance);

      form.append('page3_commentaire', formData.page3.commentaire);
      form.append(
        'page3_commentaireSpecialises',
        formData.page3.commentaireSpecialises,
      );
      form.append(
        'page3_selectedConsultations',
        formData.page3.selectedConsultations.join(','),
      );
      form.append(
        'page3_selectedSoinsPodologiques',
        formData.page3.selectedSoinsPodologiques.join(','),
      );

      form.append(
        'page4_commentaireSpecialises',
        formData.page4.commentaireSpecialises,
      );

      if (formData.page4.selectedDocument) {
        form.append('page4_selectedDocument', {
          uri: formData.page4.selectedDocument.uri,
          type: 'application/pdf',
          name: 'document.pdf',
        });
      }

      fetch('http://192.168.1.26:3000/api/save-data', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: form,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          Alert.alert('Submitted successfully!');
          navigation.navigate('ConsultationTypePopup');
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Failed!');
        });
    } else {
      Alert.alert('Enter tous les champs!');
    }
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
            <MaladiePage1
              formData={formData.page1}
              updateFormData={data => updateFormData('page1', data)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Prescription"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <MaladiePage2
              formData={formData.page2}
              updateFormData={data => updateFormData('page2', data)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Bilan Complémentaire et Avis Spécialisée"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View style={styles.stepContainer}>
            <MaladiePage3
              formData={formData.page3}
              updateFormData={data => updateFormData('page3', data)}
            />
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
            <MaladiePage4
              formData={formData.page4}
              updateFormData={data => updateFormData('page4', data)}
              navigation={navigation}
            />
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
