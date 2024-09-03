import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import prescriptionData from '../../../API MALADIE/prescription.json';
import medicamentsData from '../../../API MALADIE/medicaments.json';

const MaladiePage2 = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultations, setSelectedConsultations] = useState([]);
  const [medicaments, setMedicaments] = useState([]);
  const [selectedMedicaments, setSelectedMedicaments] = useState([]);
  const [soinsPodologiques, setSoinsPodologiques] = useState([]);
  const [selectedSoinsPodologiques, setSelectedSoinsPodologiques] = useState([]);
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

  const handleSoinsPodologiquesChange = selectedItems => {
    setSelectedSoinsPodologiques(selectedItems);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Date de la maladie</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
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

        <Text style={styles.label}>Consultations médicales</Text>
        <MultiSelect
          hideTags
          items={consultations}
          uniqueKey="id"
          onSelectedItemsChange={handleConsultationsChange}
          selectedItems={selectedConsultations}
          selectText="Select Consultations"
          searchInputPlaceholderText="Search Consultations..."
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#7979f7"
          selectedItemIconColor="#7979f7"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#7979f7' }}
          submitButtonColor="#7979f7"
          submitButtonText="Choisir"
          styleMainWrapper={styles.inputContainer}
        />

        <Text style={styles.label}>Médicaments</Text>
        <MultiSelect
          hideTags
          items={medicaments}
          uniqueKey="id"
          onSelectedItemsChange={handleMedicamentsChange}
          selectedItems={selectedMedicaments}
          selectText="Select Médicaments"
          searchInputPlaceholderText="Search Médicaments..."
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#7979f7"
          selectedItemIconColor="#7979f7"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#7979f7' }}
          submitButtonColor="#7979f7"
          submitButtonText="Choisir"
          styleMainWrapper={styles.inputContainer}
        />

        <Text style={styles.label}>Soins Podologiques</Text>
        <MultiSelect
          hideTags
          items={soinsPodologiques}
          uniqueKey="id"
          onSelectedItemsChange={handleSoinsPodologiquesChange}
          selectedItems={selectedSoinsPodologiques}
          selectText="Select Soins Podologiques"
          searchInputPlaceholderText="Search Soins Podologiques..."
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#7979f7"
          selectedItemIconColor="#7979f7"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#7979f7' }}
          submitButtonColor="#7979f7"
          submitButtonText="Choisir"
          styleMainWrapper={styles.inputContainer}
        />

        <Text style={styles.label}>Commentaires</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={2}
          onChangeText={text => setCommentaire(text)}
          value={commentaire}
          placeholder="Ecrire ..."
        />
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
    color: 'black',
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
    shadowOffset: { width: 0, height: 2 },
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
    shadowOffset: { width: 0, height: 2 },
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
});

export default MaladiePage2;
