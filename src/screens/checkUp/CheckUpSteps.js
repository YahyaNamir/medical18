import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import CheckUpPage3 from './CheckUpPage3';
import CheckUpPage2 from './CheckUpPage2';
import CheckUpPage1 from './CheckUpPage1';

export default function CheckUpSteps({navigation}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [checkID, setCheckID] = useState(0);
  const generateUniqueID = () => Date.now().toString();

  const [formData, setFormData] = useState({
    pageInfo: {
      date_arrive: new Date(),
      nombre_match: '',
      date_dispute: new Date(),
      temp_jeu: '',
    },
    pageTable: {
      pathologies: [
        {
          id: 1,
          check_up_id: checkID,
          date: new Date(),
          pack_ids: [],
          diagnostic: [],
          date_retour_prevue: '',
          durre_injury: '',
          pathalogie_label_id: '',
          date_individuelle: new Date(),
          date_reprise: new Date(),
          date_competition: new Date(),
          observation: '',
          label: '',
        },
      ],
    },
    pageCons: {
      file: null,
      comment: '',
      conclusion: '',
    },
  });

  const removePathology = index => {
    setFormData(prevData => ({
      ...prevData,
      pageTable: {
        ...prevData.pageTable,
        pathologies: prevData.pageTable.pathologies.filter(
          (_, i) => i !== index,
        ),
      },
    }));
  };

  const handleFinish = () => {
    const formattedFormData = createFormData();
    Alert.alert('Submitted successfully!');

    const outputData = {
      date_arrive: formData.pageInfo.date_arrive.toISOString().split('T')[0],
      // date_dispute: formData.pageInfo.date_dispute.toISOString().split('T')[0],
      temp_jeu: formData.pageInfo.temp_jeu,
      conclusion: formData.pageCons.conclusion,
      comment: formData.pageCons.comment,
      nombre_match: formData.pageInfo.nombre_match,
      file: formData.pageCons.file,
      pathologies: formData.pageTable.pathologies,
    };

    console.log(JSON.stringify(outputData, null, 2));

    navigation.navigate('ConsultationTypePopup');
    setCheckID(checkID + 1);
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
        return true;
    }
  };

  const createFormData = () => {
    const formDataObj = new FormData();

    formDataObj.append(
      'date_arrive',
      formData.pageInfo.date_arrive.toISOString(),
    );
    formDataObj.append('nombre_match', formData.pageInfo.nombre_match);
    formDataObj.append(
      'date_dispute',
      formData.pageInfo.date_dispute.toISOString(),
    );
    formDataObj.append('temp_jeu', formData.pageInfo.temp_jeu);

    formData.pageTable.pathologies.forEach(pathalogy => {
      formDataObj.append('pathologies[]', JSON.stringify(pathalogy));
    });

    if (formData.pageCons.file) {
      formDataObj.append('file', {
        uri: formData.pageCons.file.uri,
        name: formData.pageCons.file.name,
        type: formData.pageCons.file.type,
      });
    }
    formDataObj.append('comment', formData.pageCons.comment);
    formDataObj.append('conclusion', formData.pageCons.conclusion);

    return formDataObj;
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
              updateFormData={data => updateFormData('pageTable', data)}
              removePathology={removePathology}
              checkID={checkID}
              setCheckID={setCheckID}
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
            <CheckUpPage3
              formData={formData.pageCons}
              updateFormData={data => updateFormData('pageCons', data)}
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
