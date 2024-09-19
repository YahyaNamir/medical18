import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import pickerData from '../../../API MALADIE/bilan.json';
import diagnosticsData from '../../../API MALADIE/diagnostic.json';
import {useTranslation} from 'react-i18next';

const BlessurePage2 = ({formData, updateFormData}) => {
  const {t} = useTranslation();

  const [showDatePicker, setShowDatePicker] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(null);
    if (showDatePicker === 'reathletisation_individuelle') {
      updateFormData({reathletisation_individuelle: currentDate});
    } else if (showDatePicker === 'reprise_groupe') {
      updateFormData({reprise_groupe: currentDate});
    } else if (showDatePicker === 'reprise_competition') {
      updateFormData({reprise_competition: currentDate});
    }
  };

  const maladieDiagnostics = diagnosticsData
    .filter(item => item.type_consultation === 'maladie')
    .flatMap(item =>
      item.children.map(child => ({
        label: child.child,
        value: child.child_id,
      })),
    );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>{t('CIRCUMSTANCES')}</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.circonstances}
            onValueChange={itemValue =>
              updateFormData({circonstances: itemValue})
            }
            style={styles.picker}>
            <Picker.Item label="Select..." value="" />
            {maladieDiagnostics.map(item => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>{t('CONDITION')}</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.conditions}
            onValueChange={itemValue => updateFormData({conditions: itemValue})}
            style={styles.picker}>
            <Picker.Item label="Select..." value="" />
            {maladieDiagnostics.map(item => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>{t('TERRAIN')}</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.terrain}
            onValueChange={itemValue => updateFormData({terrain: itemValue})}
            style={styles.picker}>
            <Picker.Item label="Select..." value="" />
            {maladieDiagnostics.map(item => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.labelEtape}>{t('RECOVERY_STAGE')}</Text>

        <Text style={styles.label}>{t('INDIVIDUAL_REATHLETISATION')}</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker('reathletisation_individuelle')}>
          <Text style={styles.input}>
            {formData.reathletisation_individuelle
              ? formData.reathletisation_individuelle.toDateString()
              : 'Select Date'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>{t('GROUP_RESTART')}</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker('reprise_groupe')}>
          <Text style={styles.input}>
            {formData.reprise_groupe
              ? formData.reprise_groupe.toDateString()
              : 'Select Date'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>{t('COMPETITION_RESTART')}</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker('reprise_competition')}>
          <Text style={styles.input}>
            {formData.reprise_competition
              ? formData.reprise_competition.toDateString()
              : 'Select Date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              showDatePicker === 'reathletisation_individuelle'
                ? formData.reathletisation_individuelle
                : showDatePicker === 'reprise_groupe'
                ? formData.reprise_groupe
                : formData.reprise_competition
            }
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
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
  labelEtape: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    fontFamily: 'Poppins-Bold',
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginVertical: 10,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  datePickerButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default BlessurePage2;
