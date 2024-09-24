import {View, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import CheckUpPage1 from './CheckUpPage1';
import CheckUpPage2 from './CheckUpPage2';
import CheckUpPage3 from './CheckUpPage3';

export default function CheckUpSteps({navigation}) {
  const [currentPage, setCurrentPage] = useState(0);

  const [formData, setFormData] = useState({
    pageInfo: {
      date_arrive: new Date(),
      nombre_match: '',
      date_dispute: new Date(),
      temp_jeu: '',
    },
    pageTable: {
      id: '',
      check_up_id: '',
      date: new Date(),
      pack_ids: [],
      diagnostic: [],
      date_retour_prevue: 0,
      durre_injury: 0,
      pathalogie_label_id: '',
      date_individuelle:new Date(),
      date_reprise:new Date(),
      date_competition:new Date(),
      observation: '',
      label: '',
    },
  });
  const handleFinish = () => {
    Alert.alert('Submitted successfully!');
    navigation.navigate('ConsultationTypePopup');
  };
  const updateFormData = (page, data) => {
    setFormData(prevData => ({
      ...prevData,
      [page]: {
        ...prevData[page],
        ...data,
      },
    }));
  };

  const validateInfo = formData => {
    return (
      formData.pageInfo.date_arrive !== '' &&
      formData.pageInfo.date_dispute !== '' &&
      formData.pageInfo.temp_jeu !== '' &&
      formData.pageInfo.nombre_match !== ''
    );
  };

  const validateCheck = (currentPage, formData) => {
    switch (currentPage) {
      case 0:
        return validateInfo(formData);
      default:
        return false;
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
          nextBtnTextStyle={styles.buttonText}
          // nextBtnDisabled={!validateCheck(currentPage, formData)}
          // onPrevious={() => {
          //   if (currentPage > 0) {
          //     setCurrentPage(currentPage - 1);
          //   }
          // }}
        >
          <View style={styles.stepContainer}>
            <CheckUpPage1
              formData={formData.pageInfo}
              updateFormData={data => updateFormData('pageInfo', data)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Antécedents"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          nextBtnStyle={styles.button}
          nextBtnTextStyle={styles.buttonText}>
          <View>
            <CheckUpPage2
              formData={formData.pageTable}
              updateFormData={data => updateFormData('pageInfo', data)}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Conclusion"
          previousBtnStyle={styles.button}
          previousBtnTextStyle={styles.buttonText}
          finishBtnStyle={styles.button}
          finishBtnTextStyle={styles.buttonText}
          onSubmit={handleFinish}>
          <View style={styles.stepContainer}>
            <CheckUpPage3 />
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
