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

const BlessurePage1 = ({formData, updateFormData}) => {
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.toggleButton, showFront && styles.activeButton]}
                onPress={() => setShowFront(true)}>
                <Text style={styles.buttonText}>Front</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.toggleButton, !showFront && styles.activeButton]}
                onPress={() => setShowFront(false)}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            </View>

            {showFront ? <BodyFront /> : <BodyBack />}

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
            <View style={styles.sliderContainer}>
              <Slider
                style={{width: '100%', height: 40, marginTop: 10}}
                minimumValue={0}
                maximumValue={5}
                step={1}
                value={formData.gravity || 1}
                onValueChange={value => updateFormData({gravity: value})}
                // minimumTrackTintColor="#0051ff"
                maximumTrackTintColor="#5a5858"
                thumbTintColor="#0051ff"
              />
              <Text style={styles.sliderValue}>{formData.gravity}</Text>
            </View>
          </>
        )}

        <Text style={styles.label}>Diagnostic {typeconsu}</Text>
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
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#0051ff9d',
  },
  activeButton: {
    backgroundColor: '#0051ff',
    color: 'black',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
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
