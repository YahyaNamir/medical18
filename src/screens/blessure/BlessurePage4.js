import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import prescriptionData from '../../../API MALADIE/prescription.json';
import {useTranslation} from 'react-i18next';

const BlessurePage4 = ({formData, updateFormData}) => {
  const {t} = useTranslation();

  const {bilan_comment, reference_comment, selectedRefs, selectedBilans} =
    formData;

  const consultationsData = prescriptionData.find(
    item => item.label === 'CONSULTATIONS MEDICALES',
  );
  const soinsPodologiquesData = prescriptionData.find(
    item => item.label === 'SOINS PODOLOGIQUES',
  );

  const consultations = consultationsData
    ? consultationsData.children.map(child => ({
        id: child.child_id,
        name: child.child,
      }))
    : [];

  const soinsPodologiques = soinsPodologiquesData
    ? soinsPodologiquesData.children.map(child => ({
        id: child.child_id,
        name: child.child,
      }))
    : [];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>{t('ADDITIONAL_ASSESSMENT')}*</Text>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            hideTags
            items={soinsPodologiques}
            uniqueKey="id"
            onSelectedItemsChange={items =>
              updateFormData({selectedBilans: items})
            }
            selectedItems={selectedBilans}
            selectText="Select..."
            searchInputPlaceholderText="Search Items..."
            submitButtonText="Choisir"
            autoCapitalize="none"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#000"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#000'}}
            submitButtonColor="#7979f7"
            submitButtonTextStyle={{color: '#fff'}}
            styleDropdownMenuSubsection={styles.multiSelect}
          />
        </View>
        <Text style={styles.label}>{t('SPECIALIST_ADVICE')}*</Text>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            hideTags
            items={consultations}
            uniqueKey="id"
            onSelectedItemsChange={items =>
              updateFormData({selectedRefs: items})
            }
            selectedItems={selectedRefs}
            selectText="Select..."
            searchInputPlaceholderText="Search Items..."
            submitButtonText="Choisir"
            autoCapitalize="none"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#000"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#000'}}
            submitButtonColor="#7979f7"
            submitButtonTextStyle={{color: '#fff'}}
            styleDropdownMenuSubsection={styles.multiSelect}
          />
        </View>
        <Text style={styles.label}>{t('ASSESSMENT_INDICATOR')}*</Text>
        <TextInput
          value={bilan_comment}
          onChangeText={text => updateFormData({bilan_comment: text})}
          placeholder={t('WRITE')}
          multiline
          numberOfLines={2}
          style={styles.textInput}
        />
        <Text style={styles.label}>{t('SPECIALIST_ADVICE_COMMENTS')}*</Text>
        <TextInput
          value={reference_comment}
          onChangeText={text => updateFormData({reference_comment: text})}
          placeholder={t('WRITE')}
          multiline
          numberOfLines={2}
          style={styles.textInput}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  multiSelectContainer: {
    marginVertical: 10,
  },
  multiSelect: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  textInput: {
    maxHeight: 100,
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
    marginVertical: 10,
  },
});

export default BlessurePage4;
