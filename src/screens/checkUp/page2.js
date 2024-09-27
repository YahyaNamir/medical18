import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MultiSelect from 'react-native-multiple-select';
import {TextInput} from 'react-native-gesture-handler'; // Consider replacing with React Native's built-in TextInput.
import {useTranslation} from 'react-i18next';
import diagnosticsData from '../../../API MALADIE/diagnostic.json';
import prescriptionData from '../../../API MALADIE/prescription.json';
import medicamentsData from '../../../API MALADIE/medicaments.json';
import {Picker} from '@react-native-picker/picker'; // Make sure to import Picker

const CheckUpPage2 = ({formData, updateFormData}) => {
  const {t} = useTranslation();

  const {
    selectedPack_ids = [],
    selectedMedicament_ids = [],
    reathletisation_individuelle = new Date(),
    reprise_groupe = new Date(),
    reprise_competition = new Date(),
    observation = '',
    date_retour_prevue = 4,
    durre_injury = 7,
  } = formData;

  const [showDatePicker, setShowDatePicker] = useState(null);
  const [dateToUpdate, setDateToUpdate] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(null);
    const currentDate = selectedDate || dateToUpdate;

    if (dateToUpdate) {
      updateFormData({[dateToUpdate]: currentDate});
      setDateToUpdate(null);
    }
  };

  const maladieDiagnostics = diagnosticsData
    .filter(item => item.type_consultation === 'maladie')
    .flatMap(item =>
      item.children.map(child => ({
        label: child.child,
        value: child.child_id,
      })),
    );

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
  const medicaments = medicamentsData.map(medicament => ({
    id: medicament.id,
    name: medicament.fullname,
  }));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>{t('CARE_AND_EVALUATION')}*</Text>
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
          selectedItemTextColor="#7979f7"
          selectedItemIconColor="#7979f7"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#7979f7'}}
          submitButtonColor="#7979f7"
          submitButtonText="Choisir"
          styleMainWrapper={styles.inputContainer}
        />

        <Text style={styles.label}>{t('DATE')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => {
            setShowDatePicker(true);
            setDateToUpdate('date');
          }}>
          <Text style={styles.input}>
            {formData.date?.toDateString() || 'Select Date'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formData.date || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>{t('PRESCRIPTION')}*</Text>
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

        <Text style={styles.label}>{t('ARRET SPORTIF')}*</Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={date_retour_prevue}
            onValueChange={itemValue =>
              updateFormData({date_retour_prevue: itemValue})
            }
            style={styles.picker}>
            {[...Array(30).keys()].map(i => (
              <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Picker
            selectedValue={durre_injury}
            onValueChange={itemValue =>
              updateFormData({durre_injury: itemValue})
            }
            style={styles.picker}>
            <Picker.Item label="Jour" value="1" />
            <Picker.Item label="Semaines" value="7" />
            <Picker.Item label="Mois" value="30" />
          </Picker>
        </View>

        <Text style={styles.label}>{t('INDIVIDUAL_REATHLETISATION')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => {
            setShowDatePicker(true);
            setDateToUpdate('reathletisation_individuelle');
          }}>
          <Text style={styles.input}>
            {reathletisation_individuelle.toDateString()}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>{t('GROUP_RESTART')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => {
            setShowDatePicker(true);
            setDateToUpdate('reprise_groupe');
          }}>
          <Text style={styles.input}>{reprise_groupe.toDateString()}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>{t('COMPETITION_RESTART')}*</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => {
            setShowDatePicker(true);
            setDateToUpdate('reprise_competition');
          }}>
          <Text style={styles.input}>{reprise_competition.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={
              dateToUpdate === 'reathletisation_individuelle'
                ? reathletisation_individuelle
                : dateToUpdate === 'reprise_groupe'
                ? reprise_groupe
                : reprise_competition
            }
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>{t('observation')}*</Text>
        <TextInput
          value={observation}
          onChangeText={text => updateFormData({observation: text})}
          placeholder={t('WRITE')}
          multiline
          style={styles.textInput}
        />
      </ScrollView>
    </View>
  );
};

// Style definitions
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
  textInput: {
    maxHeight: 100,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000',
    marginVertical: 10,
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
    elevation: 2,
  },
  inputContainer: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
    marginVertical: 10,
    padding: 3,
  },
  picker: {
    height: 40,
    width: '100%',
  },
});

export default CheckUpPage2;
