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
      commentaire: '',
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
      commentaireSpecialises: '',
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
    Alert.alert(
      'Form Data',
      JSON.stringify(
        {
          page1: {
            date: formData.page1.date.toDateString(),
            diagnostic: formData.page1.diagnostic,
            dureeAbsence: formData.page1.dureeAbsence,
            typeAbsence: formData.page1.typeAbsence,
          },
          page2: {
            date: formData.page2.date.toDateString(),
            selectedConsultations: formData.page2.selectedConsultations,
            selectedMedicaments: formData.page2.selectedMedicaments,
            selectedSoinsPodologiques: formData.page2.selectedSoinsPodologiques,
            commentaire: formData.page2.commentaire,
          },
          page3: {
            commentaire: formData.page3.commentaire,
            commentaireSpecialises: formData.page3.commentaireSpecialises,
            selectedConsultations: formData.page3.selectedConsultations,
            selectedSoinsPodologiques: formData.page3.selectedSoinsPodologiques,
          },
          page4: {
            commentaireSpecialises:
              formData.page4.commentaireSpecialises || 'Not provided',
            selectedDocument: formData.page4.selectedDocument
              ? 'Document attached'
              : 'No document attached',
          },
        },
        null,
        2,
      ),
    );
    console.log(
      'Form Data',
      JSON.stringify(
        {
          page1: {
            date: formData.page1.date.toDateString(),
            diagnostic: formData.page1.diagnostic,
            dureeAbsence: formData.page1.dureeAbsence,
            typeAbsence: formData.page1.typeAbsence,
          },
          page2: {
            date: formData.page2.date.toDateString(),
            selectedConsultations: formData.page2.selectedConsultations,
            selectedMedicaments: formData.page2.selectedMedicaments,
            commentaire: formData.page2.commentaire,
          },
          page3: {
            commentaire: formData.page3.commentaire,
            commentaireSpecialises: formData.page3.commentaireSpecialises,
            selectedConsultations: formData.page3.selectedConsultations,
            selectedSoinsPodologiques: formData.page3.selectedSoinsPodologiques,
          },
          page4: {
            commentaireSpecialises:
              formData.page4.commentaireSpecialises ,
            selectedDocument: formData.page4.selectedDocument
              ? 'Document attached'
              : 'No document attached',
          },
        },
        null,
        2,
      ),
    );

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
