import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

const MaladiePage4 = ({formData, updateFormData, navigation}) => {
  const [commentaireSpecialises, setCommentaireSpecialises] = useState(
    formData.commentaireSpecialises || '',
  );

  useEffect(() => {
    updateFormData({commentaireSpecialises});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentaireSpecialises]);

  const handleFinish = () => {
    updateFormData({commentaireSpecialises});

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

    console.log('Form Data:', {
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
        commentaireSpecialises: formData.page4.commentaireSpecialises,
        selectedDocument: formData.page4.selectedDocument,
      },
    });

    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rapport Médical :</Text>
        <TextInput
          value={commentaireSpecialises}
          onChangeText={text => setCommentaireSpecialises(text)}
          placeholder="Rapport..."
          multiline
          numberOfLines={5}
          style={styles.textInput}
        />
      </View>

      <Button title="Finish" onPress={handleFinish} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
  textInput: {
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
  },
});

export default MaladiePage4;
