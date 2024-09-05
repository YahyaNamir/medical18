// /* eslint-disable no-alert */
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Button,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import diagnosticsData from '../../../API MALADIE/diagnostic.json';

// const MaladiePage1 = ({navigation}) => {
//   const [date, setDate] = useState(new Date());
//   const [diagnostic, setDiagnostic] = useState('');
//   const [dureeAbsence, setDureeAbsence] = useState('');
//   const [typeAbsence, setTypeAbsence] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const maladieDiagnostics = diagnosticsData
//     .filter(item => item.type_consultation === 'maladie')
//     .flatMap(item =>
//       item.children.map(child => ({
//         label: child.child,
//         value: child.child_id,
//       })),
//     );

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   const saveData = () => {
//     alert(
//       date + ' ; ' + diagnostic + ' ; ' + dureeAbsence + ' ; ' + typeAbsence,
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.label}>Date de la maladie</Text>
//         <TouchableOpacity
//           style={styles.datePickerButton}
//           onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.input}>{date.toDateString()}</Text>
//         </TouchableOpacity>

//         {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}

//         <Text style={styles.label}>Location : </Text>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={diagnostic}
//             onValueChange={itemValue => setDiagnostic(itemValue)}
//             style={styles.input}>
//             <Picker.Item label="Select Diagnostic" value="" />
//             {maladieDiagnostics.map(item => (
//               <Picker.Item
//                 key={item.value}
//                 label={item.label}
//                 style={styles.input}
//                 value={item.value}
//               />
//             ))}
//           </Picker>
//         </View>

//         <Text style={styles.label}>Durée d'absence estimée</Text>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={dureeAbsence}
//             onValueChange={itemValue => setDureeAbsence(itemValue)}
//             style={styles.picker}>
//             {[...Array(30).keys()].map(i => (
//               <Picker.Item
//                 style={styles.input}
//                 key={i + 1}
//                 label={`${i + 1}`}
//                 value={i + 1}
//               />
//             ))}
//           </Picker>
//         </View>

//         <Text style={styles.label}>Type d'absence estimées</Text>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={typeAbsence}
//             onValueChange={itemValue => setTypeAbsence(itemValue)}
//             style={styles.picker}>
//             <Picker.Item style={styles.input} label="Jour" value="jour" />
//             <Picker.Item
//               style={styles.input}
//               label="Semaines"
//               value="semaines"
//             />
//             <Picker.Item style={styles.input} label="Mois" value="mois" />
//           </Picker>
//         </View>
//       </ScrollView>
//       <Button title="Data" onPress={saveData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   label: {
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
// });

// export default MaladiePage1;

//!________________________________________________________________________
//!________________________________________________________________________
//!________________________________________________________________________
//!________________________________________________________________________
//!________________________________________________________________________
//!________________________________________________________________________

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Button,
//   Alert,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import diagnosticsData from '../../../API MALADIE/diagnostic.json';

// const MaladiePage1 = ({navigation}) => {
//   const [date, setDate] = useState(new Date());
//   const [diagnostic, setDiagnostic] = useState('');
//   const [dureeAbsence, setDureeAbsence] = useState('');
//   const [typeAbsence, setTypeAbsence] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const maladieDiagnostics = diagnosticsData
//   .filter(item => item.type_consultation === 'maladie')
//   .flatMap(item =>
//     item.children.map(child => ({
//       label: child.child,
//       value: child.child_id,
//     })),
//   );

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(false);
//     setDate(currentDate);
//   };

//   const saveData = async () => {
//     const data = {
//       date: date.toISOString(),
//       diagnostic: diagnostic,
//       dureeAbsence: dureeAbsence,
//       typeAbsence: typeAbsence,
//     };

//     try {
//       const response = await fetch('http://192.168.1.26:3000/api/save-data', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       const jsonResponse = await response.json();
//       console.log('Server response:', jsonResponse);
//     } catch (error) {
//       console.error('Error sending data:', error);
//       alert('Error sending data');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.label}>Date de la maladie</Text>
//         <TouchableOpacity
//           style={styles.datePickerButton}
//           onPress={() => setShowDatePicker(true)}>
//           <Text style={styles.input}>{date.toDateString()}</Text>
//         </TouchableOpacity>

//         {showDatePicker && (
//           <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//             />
//           )}

//         <Text style={styles.label}>Diagnostic</Text>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={diagnostic}
//             onValueChange={itemValue => setDiagnostic(itemValue)}
//             style={styles.input}>
//             <Picker.Item label="Select Diagnostic" value="" />
//             {maladieDiagnostics.map(item => (
//               <Picker.Item
//               key={item.value}
//               label={item.label}
//                 value={item.value}
//                 />
//               ))}
//           </Picker>
//         </View>

//         <Text style={styles.label}>Durée d'absence estimée</Text>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={dureeAbsence}
//             onValueChange={itemValue => setDureeAbsence(itemValue)}
//             style={styles.picker}>
//             {[...Array(30).keys()].map(i => (
//               <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
//             ))}
//           </Picker>
//         </View>

//         <Text style={styles.label}>Type d'absence estimée</Text>
//         <View style={styles.inputContainer}>
//           <Picker
//             selectedValue={typeAbsence}
//             onValueChange={itemValue => setTypeAbsence(itemValue)}
//             style={styles.picker}>
//             <Picker.Item label="Jour" value="jour" />
//             <Picker.Item label="Semaines" value="semaines" />
//             <Picker.Item label="Mois" value="mois" />
//           </Picker>
//         </View>
//       </ScrollView>

//       <Button title="Send Data" onPress={saveData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     backgroundColor: '#fff',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   label: {
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
// });

// export default MaladiePage1;



//!########################################################
//!########################################################
//!########################################################
//!########################################################


import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import diagnosticsData from '../../../API MALADIE/diagnostic.json';

const MaladiePage1 = ({formData, updateFormData}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const maladieDiagnostics = diagnosticsData
    .filter(item => item.type_consultation === 'maladie')
    .flatMap(item =>
      item.children.map(child => ({
        label: child.child,
        value: child.child_id,
      })),
    );

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || formData.date;
    setShowDatePicker(false);
    updateFormData({date: currentDate});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Date de la maladie</Text>
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

        <Text style={styles.label}>Diagnostic</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.diagnostic}
            onValueChange={itemValue => updateFormData({diagnostic: itemValue})}
            style={styles.picker}>
            <Picker.Item label="Select Diagnostic" value="" />
            {maladieDiagnostics.map(item => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Durée d'absence estimée</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.dureeAbsence}
            onValueChange={itemValue => updateFormData({dureeAbsence: itemValue})}
            style={styles.picker}>
            {[...Array(30).keys()].map(i => (
              <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Type d'absence estimée</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={formData.typeAbsence}
            onValueChange={itemValue => updateFormData({typeAbsence: itemValue})}
            style={styles.picker}>
            <Picker.Item label="Jour" value="jour" />
            <Picker.Item label="Semaines" value="semaines" />
            <Picker.Item label="Mois" value="mois" />
          </Picker>
        </View>
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
});

export default MaladiePage1;
