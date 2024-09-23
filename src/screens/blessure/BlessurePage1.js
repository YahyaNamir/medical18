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

const BlessurePage1 = ({formData, updateFormData}) => {
  const {t} = useTranslation();

  const route = useRoute();
  const {type_consultation} = route.params;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFront, setShowFront] = useState(true);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.date;
    setShowDatePicker(false);
    updateFormData({date: currentDate});
  };

  const maladieDiagnostics = diagnosticsData
    .filter(item => item.type_consultation === 'maladie')
    .flatMap(item =>
      item.children.map(child => ({
        label: child.child,
        value: child.child_id,
      })),
    );

  const typeconsu = type_consultation === 'blessure' ? 'Blessure' : 'Maladie';

  const handleChange = text => {
    const value = Number(text);

    if (!isNaN(value) && value >= 1 && value <= 5) {
      updateFormData({gravity: value});
    } else if (text === '') {
      updateFormData({gravity: null});
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>{t('DATE_OF_MALADY')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>{formData.date.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formData.date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {type_consultation === 'blessure' && (
          <>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setShowFront(!showFront)}>
                <Icon name="cached" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            {showFront ? <BodyFront /> : <BodyBack />}

            <Text style={styles.label}>{t('LOCATION')}*</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={formData.location}
                onValueChange={itemValue =>
                  updateFormData({location: itemValue})
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

            <Text style={styles.label}>{t('GRAVITY')}*</Text>
            <View style={styles.sliderContainer}>
              <Slider
                style={{width: '100%', height: 40, marginTop: 10}}
                minimumValue={0}
                maximumValue={5}
                step={1}
                value={formData.gravity || 0}
                onValueChange={value => updateFormData({gravity: value})}
                minimumTrackTintColor="#0051ff"
                maximumTrackTintColor="#5a5858"
                thumbTintColor="#0051ff"
              />
              <Text style={styles.sliderValue}>{formData.gravity  || 0}</Text>
            </View>
          </>
        )}

        <Text style={styles.label}>{type_consultation === 'blessure' ? t('DIAGNOSTIC_B') : t('DIAGNOSTIC_M')}*</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.type}
            onValueChange={itemValue => updateFormData({type: itemValue})}
            style={styles.picker}>
            {maladieDiagnostics.map(item => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>{t('ESTIMATED_ABSENCE_DURATION')}*</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.date_retour_prevue}
            onValueChange={itemValue =>
              updateFormData({date_retour_prevue: itemValue})
            }
            style={styles.picker}>
            {[...Array(30).keys()].map(i => (
              <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>{t('ESTIMATED_ABSENCE_TYPE')}*</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.durre_injury}
            onValueChange={itemValue =>
              updateFormData({durre_injury: itemValue})
            }
            style={styles.picker}>
            <Picker.Item label="Jour" value="1" />
            <Picker.Item label="Semaines" value="7" />
            <Picker.Item label="Mois" value="30" />
          </Picker>
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

export default BlessurePage1;

//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"
//! "#########################################################"

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {useRoute} from '@react-navigation/native';
// import BodyFront from './BodyFront';
// import BodyBack from './BodyBack';
// import diagnosticsData from '../../../API MALADIE/diagnostic.json';
// import Slider from '@react-native-community/slider';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {useTranslation} from 'react-i18next';
// import {Formik} from 'formik';
// import * as Yup from 'yup';

// const blessureSchema = Yup.object().shape({
//   date: Yup.date().required('Date is required'),
//   location: Yup.string().required('Location is required'),
//   gravity: Yup.number()
//     .min(1, 'Gravity must be between 1 and 5')
//     .max(5, 'Gravity must be between 1 and 5')
//     .required('Gravity is required'),
//   type: Yup.string().required('Diagnostic type is required'),
//   date_retour_prevue: Yup.number().required('Estimated absence is required'),
//   durre_injury: Yup.string().required('Duration type is required'),
// });

// const BlessurePage1 = ({formData, updateFormData}) => {
//   const {t} = useTranslation();

//   const route = useRoute();
//   const {type_consultation} = route.params;
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showFront, setShowFront] = useState(true);

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || formData.date;
//     setShowDatePicker(false);
//     updateFormData({date: currentDate});
//   };

//   const maladieDiagnostics = diagnosticsData
//     .filter(item => item.type_consultation === 'maladie')
//     .flatMap(item =>
//       item.children.map(child => ({
//         label: child.child,
//         value: child.child_id,
//       })),
//     );

//   const initialFormData = {
//     date: formData.date || new Date(),
//     location: formData.location || '',
//     gravity: formData.gravity || '',
//     type: formData.type || '',
//     date_retour_prevue: formData.date_retour_prevue || '',
//     durre_injury: formData.durre_injury || '',
//   };

//   return (
//     <Formik
//       initialValues={initialFormData}
//       validationSchema={blessureSchema}
//       onSubmit={values => {
//         updateFormData(values);
//         console.log('Form data submitted:', values);
//       }}>
//       {({values, errors, handleChange, handleSubmit, setFieldValue}) => (
//         <View style={styles.container}>
//           <ScrollView contentContainerStyle={styles.scrollContainer}>
//             <Text style={styles.label}>{t('DATE_OF_MALADY')}</Text>
//             <TouchableOpacity
//               style={styles.datePickerButton}
//               onPress={() => setShowDatePicker(true)}>
//               <Text style={styles.input}>{formData.date.toDateString()}</Text>
//             </TouchableOpacity>

//             {showDatePicker && (
//               <DateTimePicker
//                 testID="dateTimePicker"
//                 value={formData.date}
//                 mode="date"
//                 display="default"
//                 onChange={handleDateChange}
//               />
//             )}
//             {!formData.date && errors.date && (
//               <Text style={styles.error}>{errors.date}</Text>
//             )}

//             {type_consultation === 'blessure' && (
//               <>
//                 <View style={styles.buttonContainer}>
//                   <TouchableOpacity
//                     style={styles.toggleButton}
//                     onPress={() => setShowFront(!showFront)}>
//                     <Icon name="cached" size={20} color="#fff" />
//                   </TouchableOpacity>
//                 </View>

//                 {showFront ? <BodyFront /> : <BodyBack />}

//                 <Text style={styles.label}>{t('LOCATION')}</Text>
//                 <View style={styles.inputContainer}>
//                   <Picker
//                     selectedValue={formData.location}
//                     onValueChange={itemValue =>
//                       updateFormData({location: itemValue})
//                     }
//                     style={styles.picker}>
//                     <Picker.Item label="Select..." value="" />
//                     {maladieDiagnostics.map(item => (
//                       <Picker.Item
//                         key={item.value}
//                         label={item.label}
//                         value={item.value}
//                       />
//                     ))}
//                   </Picker>
//                 </View>
//                 {!formData.location && errors.location && (
//                   <Text style={styles.error}>{errors.location}</Text>
//                 )}
//                 <Text style={styles.label}>{t('GRAVITY')}</Text>
//                 <View style={styles.sliderContainer}>
//                   <Slider
//                     style={{width: '100%', height: 40, marginTop: 10}}
//                     minimumValue={0}
//                     maximumValue={5}
//                     step={1}
//                     value={formData.gravity}
//                     onValueChange={value => updateFormData({gravity: value})}
//                     minimumTrackTintColor="#0051ff"
//                     maximumTrackTintColor="#5a5858"
//                     thumbTintColor="#0051ff"
//                   />
//                   <Text style={styles.sliderValue}>{formData.gravity}</Text>
//                 </View>

//                 {!formData.gravity && errors.gravity && (
//                   <Text style={styles.error}>{errors.gravity}</Text>
//                 )}
//               </>
//             )}
//             <Text style={styles.label}>
//               {type_consultation === 'blessure'
//                 ? t('DIAGNOSTIC_B')
//                 : t('DIAGNOSTIC_M')}
//             </Text>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={formData.type}
//                 onValueChange={itemValue => updateFormData({type: itemValue})}
//                 style={styles.picker}>
//                 {maladieDiagnostics.map(item => (
//                   <Picker.Item
//                     key={item.value}
//                     label={item.label}
//                     value={item.value}
//                   />
//                 ))}
//               </Picker>
//             </View>
//             {!formData.type && errors.type && (
//               <Text style={styles.error}>{errors.type}</Text>
//             )}
//             <Text style={styles.label}>{t('ESTIMATED_ABSENCE_DURATION')}</Text>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={formData.date_retour_prevue}
//                 onValueChange={itemValue =>
//                   updateFormData({date_retour_prevue: itemValue})
//                 }
//                 style={styles.picker}>
//                 {[...Array(30).keys()].map(i => (
//                   <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
//                 ))}
//               </Picker>
//             </View>
//             {!formData.date_retour_prevue && errors.date_retour_prevue && (
//               <Text style={styles.error}>{errors.date_retour_prevue}</Text>
//             )}

//             <Text style={styles.label}>{t('ESTIMATED_ABSENCE_TYPE')}</Text>
//             <View style={styles.inputContainer}>
//               <Picker
//                 selectedValue={formData.durre_injury}
//                 onValueChange={itemValue =>
//                   updateFormData({durre_injury: itemValue})
//                 }
//                 style={styles.picker}>
//                 <Picker.Item label="Jour" value="1" />
//                 <Picker.Item label="Semaines" value="7" />
//                 <Picker.Item label="Mois" value="30" />
//               </Picker>
//             </View>

//             {!formData.durre_injury && errors.durre_injury && (
//               <Text style={styles.error}>{errors.durre_injury}</Text>
//             )}

//             <TouchableOpacity
//               style={styles.submitButton}
//               onPress={handleSubmit}>
//               <Text style={styles.submitButtonText}>{t('SUBMIT')}</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       )}
//     </Formik>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     // flex: 1,
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   label: {
//     color: 'black',
//     fontSize: 16,
//     marginVertical: 10,
//     fontFamily: 'Poppins-Bold',
//   },
//   input: {
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'Poppins-Regular',
//   },
//   datePickerButton: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     marginVertical: 10,
//     height: 40,
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   inputContainer: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     marginVertical: 10,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     fontFamily: 'Poppins-Regular',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     marginVertical: 10,
//   },
//   toggleButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     backgroundColor: '#0051ff',
//     color: 'black',
//   },
//   sliderContainer: {
//     marginVertical: 10,
//     paddingHorizontal: 10,
//     height: 60,
//     justifyContent: 'center',
//   },
//   sliderValue: {
//     marginLeft: 12,
//     marginTop: 10,
//     fontSize: 16,
//     color: 'black',
//     fontFamily: 'Poppins-Bold',
//   },
//   error: {
//     color: 'red',
//     fontSize: 14,
//     marginVertical: 5,
//     fontFamily: 'Poppins-Regular',
//   },
//   submitButton: {
//     backgroundColor: '#0051ff',
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontFamily: 'Poppins-Bold',
//   },
// });

// export default BlessurePage1;
