/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import {useTranslation} from 'react-i18next';
import {TextInput} from 'react-native-gesture-handler';

const CheckUpPage1 = ({formData, updateFormData}) => {
  const {t} = useTranslation();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.date_arrive;
    setShowDatePicker(false);
    updateFormData({date: currentDate});
  };
  const handleDateChangeD = (event, selectedDate) => {
    const currentDate = selectedDate || formData.date_dispute;
    setShowDatePicker(false);
    updateFormData({date: currentDate});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>{t('DATE_OF_ARRIVE')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>
            {formData.date_arrive.toDateString()}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formData.date_arrive}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>{t('NUMBER_OF_MATCH')}*</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter number of matches"
            value={formData.nombre_match}
            onChangeText={value => {
              const numericValue = value.replace(/[^0-9]/g, '');
              updateFormData({nombre_match: numericValue});
            }}
          />
        </View>

        <Text style={styles.label}>{t('LAST_MATCH_DISPUTE')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>
            {formData.date_dispute.toDateString()}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formData.date_dispute}
            mode="date"
            display="default"
            onChange={handleDateChangeD}
          />
        )}

        <Text style={styles.label}>{t('PLAYING_TIME')}*</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter number of matches"
            value={formData.temp_jeu}
            onChangeText={value => {
              const numericValue = value.replace(/[^0-9]/g, '');
              updateFormData({temp_jeu: numericValue});
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    borderRadius: 10,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#0051ff',
    color: 'black',
  },
  sliderContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 60,
    justifyContent: 'center',
  },
  sliderValue: {
    marginLeft: 12,
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
});

export default CheckUpPage1;
