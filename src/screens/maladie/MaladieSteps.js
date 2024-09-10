/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import MaladiePage1 from './MaladiePage1';
import MaladiePage2 from './MaladiePage2';
import MaladiePage3 from './MaladiePage3';
import MaladiePage4 from './MaladiePage4';

export default function MaladieSteps({navigation, route}) {
  const {type_consultation} = route.params;

  const [formData, setFormData] = useState({
    pageInfo: {
      date: new Date(),
      type: '',
      location: '',
      gravity: '',
      date_retour_prevue: '',
      durre_injury: '',
    },
    pagePresc: {
      traitement_date: new Date(),
      medicament_ids: [],
      selectedMedicament_ids: [],
      pack_ids: [],
      selectedPack_ids: [],
      ordon_comment: '',
    },
    pageBilan: {
      bilans: [],
      selectedBilans: [],
      refs: [],
      selectedRefs: [],
      bilan_comment: '',
      reference_comment: '',
    },
    pageAdditio: {
      rapport: '',
      selectedDocument: null,
    },
    pageContexte: {
      circonstances: '',
      conditions: '',
      terrain: '',
      reathletisation_individuelle: new Date(),
      reprise_groupe: new Date(),
      reprise_competition: new Date(),
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
    if (1) {
      const form = new FormData();

      form.append('date', formData.pageInfo.date.toUTCString());
      form.append('type', formData.pageInfo.type);
      form.append('date_retour_prevue', formData.pageInfo.date_retour_prevue);
      form.append('durre_injury', formData.pageInfo.durre_injury);
      form.append('location', formData.pageInfo.location);
      form.append('gravity', formData.pageInfo.gravity);

      //! ____________________
      form.append(
        'traitement_date',
        formData.pagePresc.traitement_date.toUTCString(),
      );
      form.append('pack_ids', formData.pagePresc.selectedPack_ids.join(','));
      form.append(
        'medicament_ids',
        formData.pagePresc.selectedMedicament_ids.join(','),
      );
      form.append('ordon_comment', formData.pagePresc.ordon_comment);

      //! ____________________
      form.append('bilans', formData.pageBilan.selectedBilans.join(','));
      // form.append('refs', formData.pageBilan.selectedRefs.join(','));
      form.append('reference_comment', formData.pageBilan.reference_comment);
      form.append('bilan_comment', formData.pageBilan.bilan_comment);
      //! ____________________

      form.append('rapport', formData.pageAdditio.rapport);
      form.append(
        'selectedDocument',
        formData.pageAdditio.selectedDocument || null,
      );
      //! ____________________
      form.append(
        'reathletisation_individuelle',
        formData.pageContexte.reathletisation_individuelle.toUTCString(),
      );
      form.append(
        'reprise_groupe',
        formData.pageContexte.reprise_groupe.toUTCString(),
      );
      form.append(
        'reprise_competition',
        formData.pageContexte.reprise_competition.toUTCString(),
      );
      form.append('terrain', formData.pageContexte.terrain);
      form.append('conditions', formData.pageContexte.conditions);
      form.append('circonstances', formData.pageContexte.circonstances);

      //! ____________________
      form.append('type_consultation', type_consultation);
      //! ____________________

      // form.append('returnDate', '');
      // form.append('circonstances', null);
      // form.append('conditions', null);
      // form.append('traitement_intervenant', null);
      // form.append('reathletisation_individuelle', null);
      // form.append('gravity', '');
      // form.append('traitement', null);
      // form.append('traitement_nom', null);
      // form.append('reprise_competition', null);
      // form.append('terrain', null);
      // form.append('traitement_note', null);
      // form.append('reprise_groupe', null);
      // form.append('location', '');

      if (formData.pageAdditio.selectedDocument) {
        form.append('pageAdditio_selectedDocument', {
          uri: formData.pageAdditio.selectedDocument.uri,
          type: 'application/pdf',
          name: 'document.pdf',
        });
      }

      fetch('http://192.168.1.26:3000/api/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: form,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          Alert.alert('Submitted successfully!');
          setTimeout(() => {
            navigation.navigate('ConsultationTypePopup');
          }, 1000);
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Failed!');
        });
    } else {
      Alert.alert('Please fill all the required fields!');
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
              formData={formData.pageInfo}
              updateFormData={data => updateFormData('pageInfo', data)}
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
              formData={formData.pagePresc}
              updateFormData={data => updateFormData('pagePresc', data)}
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
              formData={formData.pageBilan}
              updateFormData={data => updateFormData('pageBilan', data)}
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
              formData={formData.pageAdditio}
              updateFormData={data => updateFormData('pageAdditio', data)}
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
