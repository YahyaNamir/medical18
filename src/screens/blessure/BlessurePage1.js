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
import locations from '../../../API MALADIE/locations.json';
import diagnostics from '../../../API MALADIE/diagnostics.json';
import diagnosticsData from '../../../API MALADIE/diagnostic.json';
import {TextInput} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

const BlessurePage1 = ({formData, updateFormData, navigation}) => {
  const route = useRoute();
  const {type_consultation} = route.params;

  const [showDatePicker, setShowDatePicker] = useState(false);

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
  const typecons = type_consultation === 'blessure' ? 'Blessure' : 'Maladie';

  const handleChange = text => {
    // Convert text to number
    const value = Number(text);

    // Validate the value to be within the range 1 to 5, or null if empty
    if (!isNaN(value) && value >= 1 && value <= 5) {
      updateFormData({gravity: value});
    } else if (text === '') {
      updateFormData({gravity: null});
    }
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

        {type_consultation === 'blessure' && (
          <>
            <Text style={styles.label}>Location</Text>
            <View style={styles.inputContainer}>
              <Picker
                selectedValue={formData.location}
                onValueChange={itemValue =>
                  updateFormData({location: itemValue})
                }
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
            <Text style={styles.label}>Gravité</Text>
            <TextInput
              style={styles.inputContainer}
              keyboardType="numeric"
              value={
                formData.gravity !== null ? formData.gravity.toString() : ''
              }
              onChangeText={text => handleChange(text)}
            />
          </>
        )}

        <Text style={styles.label}>Diagnostic {typecons}</Text>
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

        <Text style={styles.label}>Durée d'absence estimée</Text>
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

        <Text style={styles.label}>Type d'absence estimée</Text>
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

export default BlessurePage1;
