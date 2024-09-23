import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useRoute} from '@react-navigation/native';
import BodyFront from './BodyFront';
import BodyBack from './BodyBack';
import diagnosticsData from '../../../API MALADIE/diagnostic.json';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import * as Yup from 'yup';

const blessureSchema = Yup.object().shape({
  date: Yup.date().required('Date is required'),
  location: Yup.string().required('Location is required'),
  gravity: Yup.number()
    .min(1, 'Gravity must be between 1 and 5')
    .max(5, 'Gravity must be between 1 and 5')
    .required('Gravity is required'),
  type: Yup.string().required('Diagnostic type is required'),
  date_retour_prevue: Yup.number().required('Estimated absence is required'),
  durre_injury: Yup.string().required('Duration type is required'),
});

const BlessurePage1 = ({formData, updateFormData}) => {
  const {t} = useTranslation();
  const route = useRoute();
  const {type_consultation} = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFront, setShowFront] = useState(true);

  const maladieDiagnostics = diagnosticsData
    .filter(item => item.type_consultation === 'maladie')
    .flatMap(item =>
      item.children.map(child => ({
        label: child.child,
        value: child.child_id,
      })),
    );

  const handleDateChange = (setFieldValue, selectedDate) => {
    setShowDatePicker(false);
    setFieldValue('date', selectedDate);
  };

  const initialFormData = {
    date: formData.date || new Date(),
    location: formData.location || '',
    gravity: formData.gravity || 1,
    type: formData.type || '',
    date_retour_prevue: formData.date_retour_prevue || '',
    durre_injury: formData.durre_injury || '',
  };

  return (
    <Formik
      initialValues={initialFormData}
      validationSchema={blessureSchema}
      onSubmit={values => {
        updateFormData(values);
        console.log('Form data submitted:', values);
      }}>
      {({values, errors, handleChange, handleSubmit, setFieldValue}) => (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.label}>{t('DATE_OF_MALADY')}</Text>
            <TouchableOpacity
              style={styles.datePickerButton}
              onPress={() => setShowDatePicker(true)}>
              <Text style={styles.input}>
                {values.date ? values.date.toDateString() : ''}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={values.date || new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) =>
                  handleDateChange(setFieldValue, selectedDate)
                }
              />
            )}
            {errors.date && <Text style={styles.error}>{errors.date}</Text>}

            <Text style={styles.label}>{t('LOCATION')}</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={values.location}
                onValueChange={itemValue =>
                  setFieldValue('location', itemValue)
                }>
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
            {errors.location && (
              <Text style={styles.error}>{errors.location}</Text>
            )}

            <Text style={styles.label}>{t('GRAVITY')}</Text>
            <View style={styles.sliderContainer}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={values.gravity}
                onValueChange={value => setFieldValue('gravity', value)}
                minimumTrackTintColor="#0051ff"
                maximumTrackTintColor="#5a5858"
                thumbTintColor="#0051ff"
              />
              <Text style={styles.sliderValue}>{values.gravity}</Text>
            </View>
            {errors.gravity && (
              <Text style={styles.error}>{errors.gravity}</Text>
            )}

            <Text style={styles.label}>
              {type_consultation === 'blessure'
                ? t('DIAGNOSTIC_B')
                : t('DIAGNOSTIC_M')}
            </Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={values.type}
                onValueChange={itemValue => setFieldValue('type', itemValue)}>
                {maladieDiagnostics.map(item => (
                  <Picker.Item
                    key={item.value}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
            {errors.type && <Text style={styles.error}>{errors.type}</Text>}

            <Text style={styles.label}>{t('ESTIMATED_ABSENCE_DURATION')}</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={values.date_retour_prevue}
                onValueChange={itemValue =>
                  setFieldValue('date_retour_prevue', itemValue)
                }>
                {[...Array(30).keys()].map(i => (
                  <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
                ))}
              </Picker>
            </View>
            {errors.date_retour_prevue && (
              <Text style={styles.error}>{errors.date_retour_prevue}</Text>
            )}

            <Text style={styles.label}>{t('ESTIMATED_ABSENCE_TYPE')}</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={values.durre_injury}
                onValueChange={itemValue =>
                  setFieldValue('durre_injury', itemValue)
                }>
                <Picker.Item label="Jour" value="1" />
                <Picker.Item label="Semaines" value="7" />
                <Picker.Item label="Mois" value="30" />
              </Picker>
            </View>
            {errors.durre_injury && (
              <Text style={styles.error}>{errors.durre_injury}</Text>
            )}

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>{t('SUBMIT')}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
  inputContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
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
  error: {
    color: 'red',
    fontSize: 14,
    marginVertical: 5,
    fontFamily: 'Poppins-Regular',
  },
  submitButton: {
    backgroundColor: '#0051ff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
});

export default BlessurePage1;
