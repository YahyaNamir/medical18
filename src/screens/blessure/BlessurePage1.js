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
import RangeSlider from 'react-native-range-slider';
import locations from '../../../API MALADIE/locations.json';
import diagnostics from '../../../API MALADIE/diagnostics.json';

const BlessurePage1 = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDiagnostic, setSelectedDiagnostic] = useState('');
  const [dureeAbsence, setDureeAbsence] = useState('');
  const [heuresAbsence, setHeuresAbsence] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Date de la blessure</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>{date.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Location</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={itemValue => setSelectedLocation(itemValue)}
            style={styles.picker}>
            {locations.map(location => (
              <Picker.Item
                key={location.id}
                label={location.label}
                value={location.id}
              />
            ))}
          </Picker>
        </View>

        {/* <Text style={styles.label}>Gravité</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <RangeSlider
            minValue={0}
            maxValue={100}
            tintColor={'#da0f22'}
            handleBorderWidth={1}
            handleBorderColor="#454d55"
            selectedMinimum={20}
            selectedMaximum={40}
            style={{flex: 1, height: 70, padding: 10, backgroundColor: '#ddd'}}
            onChange={data => {
              console.log(data);
            }}
          />
        </View> */}

        <Text style={styles.label}>Diagnostic blessure</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={selectedDiagnostic}
            onValueChange={itemValue => setSelectedDiagnostic(itemValue)}
            style={styles.picker}>
            {diagnostics.map(diagnostic => (
              <Picker.Item
                key={diagnostic.id}
                label={diagnostic.label}
                value={diagnostic.id}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Durée d'absence estimée</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={dureeAbsence}
            onValueChange={itemValue => setDureeAbsence(itemValue)}
            style={styles.picker}>
            {[...Array(30).keys()].map(i => (
              <Picker.Item
                style={styles.input}
                key={i + 1}
                label={`${i + 1}`}
                value={i + 1}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Type d'absence estimées</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={heuresAbsence}
            onValueChange={itemValue => setHeuresAbsence(itemValue)}
            style={styles.picker}>
            <Picker.Item style={styles.input} label="Jour" value="jour" />
            <Picker.Item
              style={styles.input}
              label="Semaines"
              value="semaines" />
            <Picker.Item style={styles.input} label="Mois" value="mois" />
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
