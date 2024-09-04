import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import pickerData from '../../../API MALADIE/bilan.json';
const BlessurePage2 = ({navigation}) => {
  const [enMatchOfficiel, setEnMatchOfficiel] = useState('');
  const [circonstances, setCirconstances] = useState('');
  const [condition, setCondition] = useState('');
  const [terrain, setTerrain] = useState('');
  const [reathetisationDate, setReathetisationDate] = useState(new Date());
  const [repriseGroupeDate, setRepriseGroupeDate] = useState(new Date());
  const [repriseCompetitionDate, setRepriseCompetitionDate] = useState(
    new Date(),
  );
  const [showReathetisationPicker, setShowReathetisationPicker] =
    useState(false);
  const [showRepriseGroupePicker, setShowRepriseGroupePicker] = useState(false);
  const [showRepriseCompetitionPicker, setShowRepriseCompetitionPicker] =
    useState(false);

  const handleDateChange = (event, selectedDate, setDate, setShowPicker) => {
    const currentDate = selectedDate || reathetisationDate;
    setShowPicker(false);
    setDate(currentDate);
  };

  const filterDataByType = type => {
    return pickerData.filter(item => item.type === type);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Circonstances</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={circonstances}
            onValueChange={itemValue => setCirconstances(itemValue)}
            style={styles.picker}>
            {filterDataByType('circonstances').map(option => (
              <Picker.Item
                key={option.id}
                label={option.label}
                value={option.id}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Condition</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={condition}
            onValueChange={itemValue => setCondition(itemValue)}
            style={styles.picker}>
            {filterDataByType('condition').map(option => (
              <Picker.Item
                key={option.id}
                label={option.label}
                value={option.id}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Terrain</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={terrain}
            onValueChange={itemValue => setTerrain(itemValue)}
            style={styles.picker}>
            {filterDataByType('terrain').map(option => (
              <Picker.Item
                key={option.id}
                label={option.label}
                value={option.id}
              />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Réathlétisation individuelle</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowReathetisationPicker(true)}>
          <Text style={styles.input}>{reathetisationDate.toDateString()}</Text>
        </TouchableOpacity>
        {showReathetisationPicker && (
          <DateTimePicker
            value={reathetisationDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) =>
              handleDateChange(
                event,
                selectedDate,
                setReathetisationDate,
                setShowReathetisationPicker,
              )
            }
          />
        )}

        <Text style={styles.label}>Reprise groupe</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowRepriseGroupePicker(true)}>
          <Text style={styles.input}>{repriseGroupeDate.toDateString()}</Text>
        </TouchableOpacity>
        {showRepriseGroupePicker && (
          <DateTimePicker
            value={repriseGroupeDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) =>
              handleDateChange(
                event,
                selectedDate,
                setRepriseGroupeDate,
                setShowRepriseGroupePicker,
              )
            }
          />
        )}

        <Text style={styles.label}>Reprise compétition</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowRepriseCompetitionPicker(true)}>
          <Text style={styles.input}>
            {repriseCompetitionDate.toDateString()}
          </Text>
        </TouchableOpacity>
        {showRepriseCompetitionPicker && (
          <DateTimePicker
            value={repriseCompetitionDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) =>
              handleDateChange(
                event,
                selectedDate,
                setRepriseCompetitionDate,
                setShowRepriseCompetitionPicker,
              )
            }
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
  },
});

export default BlessurePage2;
