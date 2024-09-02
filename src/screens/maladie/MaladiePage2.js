/* eslint-disable react-native/no-inline-styles */
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
import medicamentsData from '../../../API MALADIE/medicaments.json';
import DateTimePicker from '@react-native-community/datetimepicker';

const MaladiePage2 = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultations, setSelectedConsultations] = useState([]);
  const [medicaments, setMedicaments] = useState([]);
  const [selectedMedicaments, setSelectedMedicaments] = useState([]);
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

    setMedicaments(
      medicamentsData.map(medicament => ({
        id: medicament.id,
        name: medicament.fullname,
      })),
    );
  }, []);

  const handleStepChange = step => {
    navigation.navigate(`MaladiePage${step + 1}`);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleConsultationsChange = selectedItems => {
    setSelectedConsultations(selectedItems);
  };

  const handleMedicamentsChange = selectedItems => {
    setSelectedMedicaments(selectedItems);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Date de la maladie</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
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
            style={styles.multiSelect}
            hideTags
            items={consultations}
            uniqueKey="id"
            onSelectedItemsChange={handleConsultationsChange}
            selectedItems={selectedConsultations}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            submitButtonText="Submit"
            autoCapitalize="none"
            displayKey="name"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#000"
            itemTextColor="#000"
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

        <Text style={styles.label}>Medicaments</Text>
        <View style={styles.multiSelectContainer}>
          <MultiSelect
            hideTags
            items={medicaments}
            uniqueKey="id"
            onSelectedItemsChange={handleMedicamentsChange}
            selectedItems={selectedMedicaments}
            selectText="Pick Medicaments"
            searchInputPlaceholderText="Search Medicaments..."
            submitButtonText="Submit"
            displayKey="name"
            styleDropdownMenuSubsection={styles.multiSelectInput}
            searchInputStyle={{color: '#000'}}
            submitButtonColor="#7979f7"
          />
        </View>

        <Text style={styles.label}>Commentaire Ordonnance</Text>
        <TextInput
          value={commentaire}
          onChangeText={setCommentaire}
          placeholder="Ecrire..."
          multiline
          numberOfLines={1}
          style={styles.textInput}
        />
      </ScrollView>
      <View style={styles.stepperContainer}>
        <Stepper
          steps={[1, 2, 3, 4]}
          currentStep={1}
          onStepChange={handleStepChange}
          style={styles.stepper}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
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
  dateText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  multiSelectContainer: {
    marginVertical: 10,
  },
  multiSelect : {
    padding: 10,
    height: 10,
  },
  multiSelectInput: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
