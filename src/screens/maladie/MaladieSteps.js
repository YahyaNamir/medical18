/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, Text} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import MaladiePage1 from './MaladiePage1';
import MaladiePage2 from './MaladiePage2';
import MaladiePage3 from './MaladiePage3';
import MaladiePage4 from './MaladiePage4';
import BlessurePage1 from '../blessure/BlessurePage1';
import BlessurePage2 from '../blessure/BlessurePage2';
import BlessurePage3 from '../blessure/BlessurePage3';
import BlessurePage4 from '../blessure/BlessurePage4';
import BlessurePage5 from '../blessure/BlessurePage5';

export default function MaladieSteps({navigation, route}) {
  const {type_consultation} = route.params;

  const [formData, setFormData] = useState({
    pageInfo: {
      date: new Date(),
      type: '',
      location: '',
      gravity: 1,
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
    leTraitement: {
      traitement_intervenant: '',
      traitement_nom: '',
      traitement: '',
      traitement_note: '',
    },
  });

  useEffect(() => {
    let headerTitle = 'Maladie';
    if (type_consultation === 'blessure') {
      headerTitle = 'Blessure';
    } else if (type_consultation === 'checkup') {
      headerTitle = 'Check Up';
    }

    navigation.setOptions({
      headerTitle: headerTitle,
    });
  }, [type_consultation, navigation]);

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

      form.append(
        'bilans',
        formData.pageBilan.selectedBilans.join(',') || null,
      );
      form.append('refs', formData.pageBilan.selectedRefs.join(',') || null);
      form.append(
        'reference_comment',
        formData.pageBilan.reference_comment || null,
      );
      form.append('bilan_comment', formData.pageBilan.bilan_comment || null);

      form.append('rapport', formData.pageAdditio.rapport || null);
      form.append(
        'selectedDocument',
        formData.pageAdditio.selectedDocument || null,
      );

      form.append(
        'reathletisation_individuelle',
        formData.pageContexte.reathletisation_individuelle.toUTCString() ||
          null,
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
      form.append(
        'traitement_nom',
        formData.leTraitement.traitement_nom || null,
      );
      form.append('traitement', formData.leTraitement.traitement || null);
      form.append(
        'traitement_note',
        formData.leTraitement.traitement_note || null,
      );

      form.append('type_consultation', type_consultation || null);
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

      // fetch('http://192.168.1.26:3000/api/save-data', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      //   body: form,
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log('Success:', data);
      //     Alert.alert('Submitted successfully!');
      //     setTimeout(() => {
      //       navigation.navigate('ConsultationTypePopup');
      //     }, 1000);
      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //     Alert.alert('Failed!');
      //   });

      fetch('http://192.168.1.26:3000/api/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: form,
      })
        .then(response => response.text())
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
      Alert.alert('Please fill all the required fields!');
    }
  };
  //? old #########################
  //   return (
  // <View style={styles.container}>
  //   <View style={styles.topLine} />
  //   <ProgressSteps
  //     activeStepIconBorderColor="#007BFF"
  //     completedProgressBarColor="#034387"
  //     completedStepIconColor="#034387">
  //     <ProgressStep
  //       labelStyle={{color: '#007bff', fontFamily: 'Poppins-Bold'}}
  //       label="Infos"
  //       nextBtnStyle={styles.button}
  //       nextBtnTextStyle={styles.buttonText}>
  //       <View style={styles.stepContainer}>
  //         <MaladiePage1
  //           formData={formData.pageInfo}
  //           updateFormData={data => updateFormData('pageInfo', data)}
  //         />
  //       </View>
  //     </ProgressStep>
  //     <ProgressStep
  //       label="Prescription"
  //       previousBtnStyle={styles.button}
  //       previousBtnTextStyle={styles.buttonText}
  //       nextBtnStyle={styles.button}
  //       nextBtnTextStyle={styles.buttonText}>
  //       <View style={styles.stepContainer}>
  //         <MaladiePage2
  //           formData={formData.pagePresc}
  //           updateFormData={data => updateFormData('pagePresc', data)}
  //         />
  //       </View>
  //     </ProgressStep>
  //     <ProgressStep
  //       label="Bilan Complémentaire et Avis Spécialisée"
  //       previousBtnStyle={styles.button}
  //       previousBtnTextStyle={styles.buttonText}
  //       nextBtnStyle={styles.button}
  //       nextBtnTextStyle={styles.buttonText}>
  //       <View style={styles.stepContainer}>
  //         <MaladiePage3
  //           formData={formData.pageBilan}
  //           updateFormData={data => updateFormData('pageBilan', data)}
  //         />
  //       </View>
  //     </ProgressStep>
  //     <ProgressStep
  //       label="Informations additionnelles"
  //       previousBtnStyle={styles.button}
  //       previousBtnTextStyle={styles.buttonText}
  //       finishBtnStyle={styles.button}
  //       finishBtnTextStyle={styles.buttonText}
  //       onSubmit={handleFinish}>
  //       <View style={styles.stepContainer}>
  //         <MaladiePage4
  //           formData={formData.pageAdditio}
  //           updateFormData={data => updateFormData('pageAdditio', data)}
  //           navigation={navigation}
  //         />
  //       </View>
  //     </ProgressStep>
  //   </ProgressSteps>
  // </View>
  //   );
  // }
  //? ###############################

  return (
    <>
      return (
      <>
        {type_consultation === 'maladie' ? (
          <View style={styles.container}>
            <View style={styles.topLine} />
            <ProgressSteps
              activeStepIconBorderColor="#007BFF"
              completedProgressBarColor="#034387"
              completedStepIconColor="#034387">
              {/* Maladie 1 */}
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

              {/* Show Blessure 3, 4, 5 for Maladie */}
              <ProgressStep
                label="Prescription"
                previousBtnStyle={styles.button}
                previousBtnTextStyle={styles.buttonText}
                nextBtnStyle={styles.button}
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
                onSubmit={handleFinish}>
                <View style={styles.stepContainer}>
                  <BlessurePage5
                    formData={formData.pageAdditio}
                    updateFormData={data => updateFormData('pageAdditio', data)}
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
              {/* Blessure 1 */}
              <ProgressStep
                labelStyle={{color: '#007bff', fontFamily: 'Poppins-Bold'}}
                label="Infos"
                nextBtnStyle={styles.button}
                nextBtnTextStyle={styles.buttonText}>
                <View style={styles.stepContainer}>
                  <BlessurePage1
                    formData={formData.pageInfo}
                    updateFormData={data => updateFormData('pageInfo', data)}
                  />
                </View>
              </ProgressStep>

              {/* Blessure 2 */}
              <ProgressStep
                label="Contexte de la blessure"
                previousBtnStyle={styles.button}
                previousBtnTextStyle={styles.buttonText}
                nextBtnStyle={styles.button}
                nextBtnTextStyle={styles.buttonText}>
                <View style={styles.stepContainer}>
                  <BlessurePage2
                    formData={formData.pageContexte}
                    updateFormData={data =>
                      updateFormData('pageContexte', data)
                    }
                  />
                </View>
              </ProgressStep>

              {/* Blessure 3 */}
              <ProgressStep
                label="Prescription"
                previousBtnStyle={styles.button}
                previousBtnTextStyle={styles.buttonText}
                nextBtnStyle={styles.button}
                nextBtnTextStyle={styles.buttonText}>
                <View style={styles.stepContainer}>
                  <BlessurePage3
                    formData={formData.pagePresc}
                    updateFormData={data => updateFormData('pagePresc', data)}
                  />
                </View>
              </ProgressStep>

              {/* Blessure 4 */}
              <ProgressStep
                label="Bilan Complémentaire et Avis Spécialisée"
                previousBtnStyle={styles.button}
                previousBtnTextStyle={styles.buttonText}
                nextBtnStyle={styles.button}
                nextBtnTextStyle={styles.buttonText}>
                <View style={styles.stepContainer}>
                  <BlessurePage4
                    formData={formData.pageBilan}
                    updateFormData={data => updateFormData('pageBilan', data)}
                  />
                </View>
              </ProgressStep>

              {/* Blessure 5 */}
              <ProgressStep
                label="Informations additionnelles"
                previousBtnStyle={styles.button}
                previousBtnTextStyle={styles.buttonText}
                finishBtnStyle={styles.button}
                finishBtnTextStyle={styles.buttonText}
                onSubmit={handleFinish}>
                <View style={styles.stepContainer}>
                  <BlessurePage5
                    formData={formData.pageAdditio}
                    updateFormData={data => updateFormData('pageAdditio', data)}
                  />
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        ) : (
          <Text>
            Soon
            ...
            </Text>
        )}
      </>
      );
    
    </>
  );
}

// return (
//   <>
//     {type_consultation === 'maladie' ? (
//       <View style={styles.container}>
//         <View style={styles.topLine} />
//         <ProgressSteps
//           activeStepIconBorderColor="#007BFF"
//           completedProgressBarColor="#034387"
//           completedStepIconColor="#034387">
//           <ProgressStep
//             labelStyle={{color: '#007bff', fontFamily: 'Poppins-Bold'}}
//             label="Infos"
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <MaladiePage1
//                 formData={formData.pageInfo}
//                 updateFormData={data => updateFormData('pageInfo', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Prescription"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <MaladiePage2
//                 formData={formData.pagePresc}
//                 updateFormData={data => updateFormData('pagePresc', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Bilan Complémentaire et Avis Spécialisée"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <MaladiePage3
//                 formData={formData.pageBilan}
//                 updateFormData={data => updateFormData('pageBilan', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Informations additionnelles"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             finishBtnStyle={styles.button}
//             finishBtnTextStyle={styles.buttonText}
//             onSubmit={handleFinish}>
//             <View style={styles.stepContainer}>
//               <MaladiePage4
//                 formData={formData.pageAdditio}
//                 updateFormData={data => updateFormData('pageAdditio', data)}
//                 navigation={navigation}
//               />
//             </View>
//           </ProgressStep>
//         </ProgressSteps>
//       </View>
//     ) : type_consultation === 'blessure' ? (
//       <View style={styles.container}>
//         <View style={styles.topLine} />
//         <ProgressSteps
//           activeStepIconBorderColor="#0079fa"
//           completedProgressBarColor="#034387"
//           completedStepIconColor="#034387">
//           <ProgressStep
//             labelStyle={{color: '#007bff', fontFamily: 'Poppins-Bold'}}
//             label="Infos"
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <BlessurePage1
//                 formData={formData.pageInfo}
//                 updateFormData={data => updateFormData('pageInfo', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Contexte de la blessure"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <BlessurePage2
//                 formData={formData.pageContexte}
//                 updateFormData={data => updateFormData('pageContexte', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Prescription"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <BlessurePage3
//                 formData={formData.pagePresc}
//                 updateFormData={data => updateFormData('pagePresc', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Bilan Complémentaire et Avis Spécialisée"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             nextBtnStyle={styles.button}
//             nextBtnTextStyle={styles.buttonText}>
//             <View style={styles.stepContainer}>
//               <BlessurePage4
//                 formData={formData.pageBilan}
//                 updateFormData={data => updateFormData('pageBilan', data)}
//               />
//             </View>
//           </ProgressStep>
//           <ProgressStep
//             label="Informations additionnelles"
//             previousBtnStyle={styles.button}
//             previousBtnTextStyle={styles.buttonText}
//             finishBtnStyle={styles.button}
//             finishBtnTextStyle={styles.buttonText}
//             onSubmit={handleFinish}>
//             <View style={styles.stepContainer}>
//               <BlessurePage5
//                 formData={formData.pageAdditio}
//                 updateFormData={data => updateFormData('pageAdditio', data)}
//               />
//             </View>
//           </ProgressStep>
//         </ProgressSteps>
//       </View>
//     ) : (
//       <Text>Soon...</Text>
//     )}
//   </>
// );

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
