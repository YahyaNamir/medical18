/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

import BlessurePage1 from './BlessurePage1';
import BlessurePage2 from './BlessurePage2';
import BlessurePage3 from './BlessurePage3';
import BlessurePage4 from './BlessurePage4';
import BlessurePage5 from './BlessurePage5';
import {useTranslation} from 'react-i18next';
import CheckUpSteps from '../checkUp/CheckUpSteps';

export default function BlessureSteps({navigation, route}) {
  const {t} = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
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
      file: null,
    },
    pageContexte: {
      circonstances: '',
      conditions: '',
      terrain: '',
      reathletisation_individuelle: new Date(),
      reprise_groupe: new Date(),
      reprise_competition: new Date(),
    },
    leTraitement: {
      traitement_intervenant: '',
      traitement_nom: '',
      traitement: '',
      traitement_note: '',
    },
  });

  useEffect(() => {
    let headerTitle = t('MALADY');
    if (type_consultation === 'blessure') {
      headerTitle = t('INJURY');
    } else if (type_consultation === 'checkup') {
      headerTitle = t('CHECKUP');
    }
    navigation.setOptions({
      headerTitle: headerTitle,
    });
  }, [type_consultation, navigation, t]);

  const updateFormData = (page, data) => {
    setFormData(prevData => ({
      ...prevData,
      [page]: {
        ...prevData[page],
        ...data,
      },
    }));
  };

  const validatePageInfo = (type_consultation, formData) => {
    if (type_consultation === 'blessure') {
      return (
        formData.pageInfo.type !== '' &&
        formData.pageInfo.location !== '' &&
        formData.pageInfo.gravity !== '' &&
        formData.pageInfo.date_retour_prevue !== '' &&
        formData.pageInfo.durre_injury !== '' &&
        formData.pageInfo.date !== ''
      );
    } else if (type_consultation === 'maladie') {
      return (
        formData.pageInfo.type !== '' &&
        formData.pageInfo.date_retour_prevue !== '' &&
        formData.pageInfo.durre_injury !== '' &&
        formData.pageInfo.date !== ''
      );
    }
    return false;
  };

  const validatePrescription = formData => {
    return (
      formData.pagePresc.ordon_comment !== '' &&
      formData.pagePresc.selectedPack_ids.length > 0 &&
      formData.pagePresc.selectedMedicament_ids.length > 0 &&
      formData.pagePresc.traitement_date !== ''
    );
  };
  const validateContext = formData => {
    const today = new Date().toISOString().split('T')[0];
    return (
      formData.pageContexte.circonstances !== '' &&
      formData.pageContexte.conditions !== '' &&
      formData.pageContexte.terrain !== '' &&
      formData.pageContexte.reathletisation_individuelle
        .toISOString()
        .split('T')[0] !== today &&
      formData.pageContexte.reprise_groupe.toISOString().split('T')[0] !==
        today &&
      formData.pageContexte.reprise_competition.toISOString().split('T')[0] !==
        today
    );
  };

  const validateBilan = formData => {
    return (
      formData.pageBilan.reference_comment !== '' &&
      formData.pageBilan.bilan_comment !== '' &&
      formData.pageBilan.selectedRefs.length > 0 &&
      formData.pageBilan.selectedBilans.length > 0
    );
  };

  const validateAdditio = formData => {
    return formData.pageAdditio.rapport !== '';
  };

  const validateBlessure = (currentPage, type_consultation, formData) => {
    switch (currentPage) {
      case 0:
        return validatePageInfo(type_consultation, formData);
      case 1:
        return validateContext(formData);
      case 2:
        return validatePrescription(formData);
      case 3:
        return validateBilan(formData);
      case 4:
        return validateAdditio(formData);
      default:
        return false;
    }
  };
  const validateMaladie = (currentPage, type_consultation, formData) => {
    switch (currentPage) {
      case 0:
        return validatePageInfo(type_consultation, formData);
      case 1:
        return validatePrescription(formData);
      case 2:
        return validateBilan(formData);
      case 3:
        return validateAdditio(formData);
      default:
        return false;
    }
  };

  const handleFinish = () => {
    const form = new FormData();
    form.append('date', formData.pageInfo.date.toUTCString() || null);
    form.append('type', formData.pageInfo.type || null);
    form.append(
      'date_retour_prevue',
      formData.pageInfo.date_retour_prevue || null,
    );
    form.append('durre_injury', formData.pageInfo.durre_injury || null);
    form.append('location', formData.pageInfo.location || null);
    form.append('gravity', formData.pageInfo.gravity || null);

    form.append(
      'traitement_date',
      formData.pagePresc.traitement_date.toUTCString() || null,
    );
    form.append(
      'pack_ids',
      formData.pagePresc.selectedPack_ids.join(',') || null,
    );
    form.append(
      'medicament_ids',
      formData.pagePresc.selectedMedicament_ids.join(',') || null,
    );
    form.append('ordon_comment', formData.pagePresc.ordon_comment || null);

    form.append('bilans', formData.pageBilan.selectedBilans.join(',') || null);
    form.append('refs', formData.pageBilan.selectedRefs.join(',') || null);
    form.append(
      'reference_comment',
      formData.pageBilan.reference_comment || null,
    );
    form.append('bilan_comment', formData.pageBilan.bilan_comment || null);

    form.append('rapport', formData.pageAdditio.rapport || null);
    if (formData.pageAdditio.file) {
      form.append('file', {
        uri: formData.pageAdditio.file.uri,
        name: formData.pageAdditio.file.name,
        type: formData.pageAdditio.file.type || 'application/octet-stream',
      });
    } else {
      form.append('file', null);
    }

    form.append(
      'reathletisation_individuelle',
      formData.pageContexte.reathletisation_individuelle.toUTCString() || null,
    );
    form.append(
      'reprise_groupe',
      formData.pageContexte.reprise_groupe.toUTCString() || null,
    );
    form.append(
      'reprise_competition',
      formData.pageContexte.reprise_competition.toUTCString() || null,
    );
    form.append('terrain', formData.pageContexte.terrain || null);
    form.append('conditions', formData.pageContexte.conditions || null);
    form.append('circonstances', formData.pageContexte.circonstances || null);

    form.append(
      'traitement_intervenant',
      formData.leTraitement.traitement_intervenant || null,
    );
    form.append('traitement_nom', formData.leTraitement.traitement_nom || null);
    form.append('traitement', formData.leTraitement.traitement || null);
    form.append(
      'traitement_note',
      formData.leTraitement.traitement_note || null,
    );

    form.append('type_consultation', type_consultation || null);
    //! ____________________

    if (formData.file) {
      form.append('file', {
        uri: formData.file.uri,
        type: formData.file.type || 'application/pdf',
        name: formData.file.name || 'document.pdf',
      });
    }

    console.log(formData.pageAdditio.file);
    Alert.alert('Submitted successfully!');
    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <>
      {type_consultation === 'maladie' ? (
        <View style={styles.container}>
          <View style={styles.topLine} />

          <ProgressSteps
            activeStepIconBorderColor="#0079fa"
            completedProgressBarColor="#034387"
            completedStepIconColor="#034387">
            <ProgressStep
              label="Infos"
              nextBtnStyle={styles.button}
              // nextBtnDisabled={
              // !validateMaladie(currentPage, type_consultation, formData)
              // }
              // onPrevious={() => {
              //   if (currentPage > 0) {
              //     setCurrentPage(currentPage - 1);
              //   }
              // }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage1
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
              // nextBtnDisabled={
              // !validateMaladie(currentPage, type_consultation, formData)
              // }
              // onPrevious={() => {
              //   if (currentPage > 0) {
              //     setCurrentPage(currentPage - 1);
              //   }
              // }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage3
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
              nextBtnDisabled={
              !validateMaladie(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage4
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
              nextBtnDisabled={
              !validateMaladie(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              onSubmit={handleFinish}>
              <View style={styles.stepContainer}>
                <BlessurePage5
                  formData={formData.pageAdditio}
                  updateFormData={data => updateFormData('pageAdditio', data)}
                  navigation={navigation}
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      ) : type_consultation === 'blessure' ? (
        <View style={styles.container}>
          <View style={styles.topLine} />

          <ProgressSteps
            activeStepIconBorderColor="#0079fa"
            completedProgressBarColor="#034387"
            completedStepIconColor="#034387">
            <ProgressStep
              label="Infos"
              nextBtnStyle={styles.button}
              nextBtnDisabled={
                !validateBlessure(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage1
                  formData={formData.pageInfo}
                  updateFormData={data => updateFormData('pageInfo', data)}
                />
              </View>
            </ProgressStep>

            <ProgressStep
              label="Contexte de la blessure"
              previousBtnStyle={styles.button}
              previousBtnTextStyle={styles.buttonText}
              nextBtnStyle={styles.button}
              nextBtnDisabled={
                !validateBlessure(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage2
                  formData={formData.pageContexte}
                  updateFormData={data => updateFormData('pageContexte', data)}
                />
              </View>
            </ProgressStep>

            <ProgressStep
              label="Prescription"
              previousBtnStyle={styles.button}
              previousBtnTextStyle={styles.buttonText}
              nextBtnStyle={styles.button}
              nextBtnDisabled={
                !validateBlessure(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage3
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
              nextBtnDisabled={
                !validateBlessure(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              nextBtnTextStyle={styles.buttonText}>
              <View style={styles.stepContainer}>
                <BlessurePage4
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
              nextBtnDisabled={
                !validateBlessure(currentPage, type_consultation, formData)
              }
              onPrevious={() => {
                if (currentPage > 0) {
                  setCurrentPage(currentPage - 1);
                }
              }}
              onNext={() => setCurrentPage(currentPage + 1)}
              onSubmit={handleFinish}>
              <View style={styles.stepContainer}>
                <BlessurePage5
                  formData={formData.pageAdditio}
                  updateFormData={data => updateFormData('pageAdditio', data)}
                  navigation={navigation}
                />
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      ) : (
        navigation.navigate('ConsultationTypePopup')
      )}
    </>
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
  progressStepsContainer: {
    marginVertical: 10,
    width: '60%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
