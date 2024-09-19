import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import prescriptionData from '../../../API MALADIE/prescription.json';
import medicamentsData from '../../../API MALADIE/medicaments.json';

const MaladiePage2 = ({formData, updateFormData}) => {
  const {
    traitement_date = new Date(),
    selectedPack_ids,
    selectedMedicament_ids,
    ordon_comment,
  } = formData;

  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const consultationsData = prescriptionData.find(
    item => item.label === 'CONSULTATIONS MEDICALES',
  );
  const soinsPodologiquesData = prescriptionData.find(
    item => item.label === 'SOINS PODOLOGIQUES',
  );

  const consultations = consultationsData
    ? consultationsData.children.map(child => ({
        id: child.child_id,
        name: child.child,
      }))
    : [];
  const soinsPodologiques = soinsPodologiquesData
    ? soinsPodologiquesData.children.map(child => ({
        id: child.child_id,
        name: child.child,
      }))
    : [];
  const medicaments = medicamentsData.map(medicament => ({
    id: medicament.id,
    name: medicament.fullname,
  }));

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || traitement_date;
    setShowDatePicker(false);
    updateFormData({traitement_date: currentDate});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}>
          <Text style={styles.input}>
            {formData.traitement_date.toDateString()}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={traitement_date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Soins et Evaluation</Text>
        {
          <MultiSelect
            hideTags
            items={consultations}
            uniqueKey="id"
            onSelectedItemsChange={items =>
              updateFormData({selectedPack_ids: items})
            }
            selectedItems={selectedPack_ids}
            selectText="Select..."
            searchInputPlaceholderText="Rechercher soins..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#7979f7"
            selectedItemIconColor="#7979f7"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#7979f7'}}
            submitButtonColor="#7979f7"
            submitButtonText="Choisir"
            styleMainWrapper={styles.inputContainer}
          />
        }

        <Text style={styles.label}>Ordonnance</Text>
        <MultiSelect
          hideTags
          items={medicaments}
          uniqueKey="id"
          onSelectedItemsChange={items =>
            updateFormData({selectedMedicament_ids: items})
          }
          selectedItems={selectedMedicament_ids}
          selectText="Select..."
          searchInputPlaceholderText="Search Médicaments..."
          // tagRemoveIconColor="#CCC"
          // tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#7979f7"
          selectedItemIconColor="#7979f7"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#7979f7'}}
          submitButtonColor="#7979f7"
          submitButtonText="Choisir"
          styleMainWrapper={styles.inputContainer}
        />

        <Text style={styles.label}>Commentaires</Text>
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={2}
          onChangeText={text => updateFormData({ordon_comment: text})}
          value={ordon_comment}
          placeholder="Commentaire ordonance ..."
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
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
  },
});

export default MaladiePage2;
