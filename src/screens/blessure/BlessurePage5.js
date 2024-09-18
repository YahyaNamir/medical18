import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const BlessurePage5 = ({formData, updateFormData}) => {
  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res);

      updateFormData({selectedDocument: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Is cancell');
      } else {
        console.error('DocumentPicker Error: ', err);
        Alert.alert('Erreur');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rapport Médical :</Text>
        <TextInput
          value={formData.rapport}
          onChangeText={text => updateFormData({rapport: text})}
          placeholder="Rapport..."
          multiline
          numberOfLines={5}
          style={styles.textInput}
        />
      </View>

      <Button title="Choisir un fichier" onPress={pickDocument} />
      {formData.selectedDocument && (
        <Text style={styles.fileInfo}>
          Fichier sélectionné: {formData.selectedDocument.name}
        </Text>
      )}
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
  fileInfo: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default BlessurePage5;
