import React, {useState, useEffect} from 'react';
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
import Stepper from '../blessure/Stepper';
import DateTimePicker from '@react-native-community/datetimepicker';

const MaladiePage2 = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultations, setSelectedConsultations] = useState([]);
  const [soinsPodologiques, setSoinsPodologiques] = useState([]);
  const [selectedSoinsPodologiques, setSelectedSoinsPodologiques] = useState(
    [],
  );
  const [commentaire, setCommentaire] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const consultationsData = prescriptionData.find(
      item => item.label === 'CONSULTATIONS MEDICALES',
    );
    const soinsPodologiquesData = prescriptionData.find(
      item => item.label === 'SOINS PODOLOGIQUES',
    );

    if (consultationsData) {
      setConsultations(
        consultationsData.children.map(child => ({
          id: child.child_id,
          name: child.child,
        })),
      );
    }

    if (soinsPodologiquesData) {
      setSoinsPodologiques(
        soinsPodologiquesData.children.map(child => ({
          id: child.child_id,
          name: child.child,
        })),
      );
    }
  }, []);

  const handleStepChange = step => {
    navigation.navigate(`MaladiePage${step + 1}`);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Date de la maladie</Text>
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

        <Text style={styles.label}>Soins et Évaluation</Text>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            hideTags
            items={consultations}
            uniqueKey="id"
            onSelectedItemsChange={setSelectedConsultations}
            selectedItems={selectedConsultations}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            submitButtonText="Submit"
            autoCapitalize="none"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#000"
            selectedItemTextColor="#000"
            selectedItemIconColor="#000"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#000'}}
            submitButtonColor="#7979f7"
            submitButtonTextStyle={{color: '#000'}}
            styleDropdownMenuSubsection={{
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
            }}
          />
        </View>

        <Text style={styles.label}>Soins Podologiques</Text>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            hideTags
            items={soinsPodologiques}
            uniqueKey="id"
            onSelectedItemsChange={setSelectedSoinsPodologiques}
            selectedItems={selectedSoinsPodologiques}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            submitButtonText="Submit"
            autoCapitalize="none"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#000"
            selectedItemTextColor="#000"
            selectedItemIconColor="#000"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#000'}}
            // submitButtonColor="#CCC"
            submitButtonColor="#7979f7" // Custom background color
            submitButtonTextStyle={{color: '#fff'}} // Text color to contrast with background
            // submitButtonTextStyle={{ color: '#000', backgroundColor: '#7979f7' }}
            styleDropdownMenuSubsection={{
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
            }}
          />
        </View>

        <Text style={styles.label}>Commentaire Ordonnance</Text>
        <TextInput
          value={commentaire}
          onChangeText={setCommentaire}
          placeholder="Ecrire..."
          multiline
          numberOfLines={2}
          style={styles.textInput}
        />
        <View style={styles.stepperContainer}>
        <Stepper
          steps={[1, 2, 3, 4]}
          currentStep={1}
          onStepChange={handleStepChange}
          style={styles.stepper}
        />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    fontFamily: 'Poppins-Regular',
  },
  picker: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
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
    fontSize: 17,
    color: '#000000',
  },
  stepperContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default MaladiePage2;
