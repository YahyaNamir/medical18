import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const BlessurePage5 = ({formData, updateFormData}) => {
  const {t} = useTranslation();

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('Selected file:', res);
      updateFormData({file: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Selection canceled');
      } else {
        console.error('DocumentPicker Error: ', err);
        Alert.alert('Error selecting file');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{t('MEDICAL_REPORT')}:*</Text>
        <TextInput
          value={formData.rapport}
          onChangeText={text => updateFormData({rapport: text})}
          placeholder={t('WRITE')}
          multiline
          numberOfLines={5}
          style={styles.textInput}
        />
      </View>

      <Button
        title={formData.file?.name ? formData.file.name : t('CHOOSE_FILE')}
        onPress={pickDocument}
      />
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
    maxHeight: 200,
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

export default BlessurePage5;
