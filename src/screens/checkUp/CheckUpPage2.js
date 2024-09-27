import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Animated,
  Easing,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import Collapsible from 'react-native-collapsible';

import DateTimePicker from '@react-native-community/datetimepicker';
import MultiSelect from 'react-native-multiple-select';
import {useTranslation} from 'react-i18next';
import prescriptionData from '../../../API MALADIE/prescription.json';
import {Picker} from '@react-native-picker/picker';

const CheckUpPage2 = ({formData, updateFormData}) => {
  const {t} = useTranslation();
  const pathologyCounter = useRef(0);

  const [pathologies, setPathologies] = useState(formData.pathologies || []);
  const [collapsed, setCollapsed] = useState(pathologies.map(() => true));
  const toggleExpand = index => {
    setCollapsed(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const pathologiesOptions = [
    {id: '1', name: 'Allergie nourriture/insectes'},
    {id: '2', name: "Pathologie ou Blessure sur l'appareil locomoteur"},
    {id: '3', name: 'Allergie médicaments'},
    {id: '4', name: 'Infections'},
    {id: '5', name: 'Pathologie cardiaque'},
    {id: '6', name: 'Pathologie gastro-intestinale'},
    {id: '7', name: 'Pathologie respiratoire'},
    {id: '8', name: 'Pathologie neurologique'},
    {id: '9', name: 'Autres pathologies ...'},
  ];

  const consultationsData = prescriptionData.find(
    item => item.label === 'CONSULTATIONS MEDICALES',
  );
  const consultations = consultationsData
    ? consultationsData.children.map(child => ({
        id: child.child_id,
        name: child.child,
      }))
    : [];

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDateField, setCurrentDateField] = useState('');
  const [currentPathalogyIndex, setCurrentPathalogyIndex] = useState(null);

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set' && selectedDate) {
      setShowDatePicker(false);
      if (currentPathalogyIndex !== null) {
        const updatedPathologies = [...pathologies];
        updatedPathologies[currentPathalogyIndex][currentDateField] =
          selectedDate;

        // updateFormData('pageTable', {pathologies: updatedPathologies});
        updateFormData('pageTable', {pathologies: updatedPathologies});

        setPathologies(updatedPathologies);
      }
    } else {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    setPathologies(formData.pathologies || []);
  }, [formData.pathologies]);

  const addPathalogy = () => {
    const newPathalogy = {
      id: pathologyCounter.current++,
      check_up_id: '',
      date: new Date(),
      pack_ids: [],
      diagnostic: [],
      date_retour_prevue: '',
      durre_injury: '',
      pathalogie_label_id: '',
      date_individuelle: new Date(),
      date_reprise: new Date(),
      date_competition: new Date(),
      observation: '',
      label: '',
    };
    setPathologies(prevPathologies => {
      const updatedPathologies = [...prevPathologies, newPathalogy];
      updateFormData({pathologies: updatedPathologies});
      return updatedPathologies;
    });
  };

  const updateFormDataAndSetState = (field, value) => {
    updateFormData('pageTable', {pathologies: [...pathologies]});
    return value;
  };

  const updatePathalogyField = (index, field, value) => {
    setPathologies(prevPathologies => {
      const updatedPathologies = [...prevPathologies];
      updatedPathologies[index][field] = value;
      updateFormDataAndSetState('pathologies', updatedPathologies);
      return updatedPathologies;
    });
  };

  const soinsPodologiquesData = prescriptionData.find(
    item => item.label === 'SOINS PODOLOGIQUES',
  );
  const soinsPodologiques = soinsPodologiquesData
    ? soinsPodologiquesData.children.map(child => ({
        id: child.child_id,
        name: child.child,
      }))
    : [];
  const removePathology = index => {
    const updatedPathologies = pathologies.filter((_, i) => i !== index);
    setPathologies(updatedPathologies);
    updateFormData('pageTable', {pathologies: updatedPathologies});
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.addButton} onPress={addPathalogy}>
        <Text style={styles.addButtonText}>{t('Add Pathalogy')}</Text>
      </TouchableOpacity>

      {pathologies.map((pathalogy, index) => (
        <View key={index} style={styles.pathalogyContainer}>
          <View style={styles.containerBu}>
            <Text style={styles.index}>{index + 1}</Text>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removePathology(index)}>
              <Text style={styles.removeButtonText}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => toggleExpand(index)}>
              <Text style={styles.toggleButton}>
                {collapsed[index]
                  ? t('Afficher les détails')
                  : t('Masquer les détails')}
              </Text>
            </TouchableOpacity>
          </View>
 <Collapsible collapsed={collapsed[index]}>
            <Table>
              <Row
                data={[
                  <Text style={styles.label}>{t('Select Pathology')}*</Text>,
                  <Picker
                    selectedValue={pathalogy.label}
                    onValueChange={itemValue => {
                      const selectedOption = pathologiesOptions.find(
                        option => option.id === itemValue,
                      );
                      updatePathalogyField(
                        index,
                        'pathalogie_label_id',
                        itemValue,
                      );
                      updatePathalogyField(
                        index,
                        'label',
                        selectedOption ? selectedOption.name : '',
                      );
                    }}
                    style={styles.picker}>
                    {pathologiesOptions.map(option => (
                      <Picker.Item
                        key={option.id}
                        label={option.name}
                        value={option.id}
                      />
                    ))}
                  </Picker>,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('Pathologie')}*</Text>,
                  <MultiSelect
                    hideTags
                    items={consultations}
                    uniqueKey="id"
                    onSelectedItemsChange={items =>
                      updatePathalogyField(index, 'pack_ids', items)
                    }
                    selectedItems={pathalogy.pack_ids}
                    selectText={t('Select...')}
                    searchInputPlaceholderText={t('Rechercher soins...')}
                    tagRemoveIconColor="#CCC"
                    selectedItemTextColor="#7979f7"
                    selectedItemIconColor="#7979f7"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={styles.searchInput}
                    submitButtonColor="#7979f7"
                    submitButtonText={t('Choisir')}
                    styleMainWrapper={styles.inputContainer}
                  />,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('Date')}*</Text>,
                  <TouchableOpacity
                    style={styles.datePickerButton}
                    onPress={() => {
                      setShowDatePicker(true);
                      setCurrentDateField('date');
                      setCurrentPathalogyIndex(index);
                    }}>
                    <Text style={styles.input}>
                      {pathalogy.date.toDateString()}
                    </Text>
                  </TouchableOpacity>,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('CAT (en club)')}* </Text>,
                  <MultiSelect
                    hideTags
                    items={soinsPodologiques}
                    uniqueKey="id"
                    onSelectedItemsChange={items =>
                      updatePathalogyField(index, 'diagnostic', items)
                    }
                    selectedItems={pathalogy.diagnostic}
                    selectText={t('Select...')}
                    searchInputPlaceholderText={t('Search Médicaments...')}
                    tagTextColor="#CCC"
                    selectedItemTextColor="#7979f7"
                    selectedItemIconColor="#7979f7"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={styles.searchInput}
                    submitButtonColor="#7979f7"
                    submitButtonText={t('Choisir')}
                    styleMainWrapper={styles.inputContainer}
                  />,
                ]}
              />
              <Row
                data={[<Text style={styles.labelD}>{t('Arret Sportif')}</Text>]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('ABSENCE_DURATION')}*</Text>,
                  <Picker
                    selectedValue={pathalogy.date_retour_prevue}
                    onValueChange={itemValue =>
                      updatePathalogyField(
                        index,
                        'date_retour_prevue',
                        itemValue,
                      )
                    }
                    style={styles.picker}>
                    {[...Array(30).keys()].map(i => (
                      <Picker.Item
                        key={i + 1}
                        label={`${i + 1}`}
                        value={i + 1}
                      />
                    ))}
                  </Picker>,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('ABSENCE_TYPE')}*</Text>,
                  <Picker
                    selectedValue={pathalogy.durre_injury}
                    onValueChange={itemValue =>
                      updatePathalogyField(index, 'durre_injury', itemValue)
                    }
                    style={styles.picker}>
                    <Picker.Item label="Jour" value="1" />
                    <Picker.Item label="Semaines" value="7" />
                    <Picker.Item label="Mois" value="30" />
                  </Picker>,
                ]}
              />
              <Row
                data={[<Text style={styles.labelD}>{t('Date Reprise')} </Text>]}
              />

              <Row
                data={[
                  <Text style={styles.label}>
                    {t('INDIVIDUAL_REATHLETISATION')}{' '}
                  </Text>,
                  <TouchableOpacity
                    style={styles.datePickerButton}
                    onPress={() => {
                      setShowDatePicker(true);
                      setCurrentDateField('date_individuelle');
                      setCurrentPathalogyIndex(index);
                    }}>
                    <Text style={styles.input}>
                      {pathalogy.date_individuelle.toDateString()}
                    </Text>
                  </TouchableOpacity>,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('Reprise Groupe')} </Text>,
                  <TouchableOpacity
                    style={styles.datePickerButton}
                    onPress={() => {
                      setShowDatePicker(true);
                      setCurrentDateField('date_reprise');
                      setCurrentPathalogyIndex(index);
                    }}>
                    <Text style={styles.input}>
                      {pathalogy.date_reprise.toDateString()}
                    </Text>
                  </TouchableOpacity>,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('Compétition')}</Text>,
                  <TouchableOpacity
                    style={styles.datePickerButton}
                    onPress={() => {
                      setShowDatePicker(true);
                      setCurrentDateField('date_competition');
                      setCurrentPathalogyIndex(index);
                    }}>
                    <Text style={styles.input}>
                      {pathalogy.date_competition.toDateString()}
                    </Text>
                  </TouchableOpacity>,
                ]}
              />
              <Row
                data={[
                  <Text style={styles.label}>{t('Observation')}</Text>,
                  <TextInput
                    value={pathalogy.observation}
                    onChangeText={text =>
                      updatePathalogyField(index, 'observation', text)
                    }
                    placeholder={t('WRITE')}
                    multiline
                    style={styles.textInput}
                  />,
                ]}
              />
            </Table>
          </Collapsible>
        </View>
      ))}

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {/* <Button title={t('Finish')} onPress={() => console.log(pathologies)} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: '#0f4dc9',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 15,
  },
  pathalogyContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  removeButton: {
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#f44336',
    borderRadius: 50,
  },
  containerBu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '100%',
  },

  removeButtonText: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginBottom: 5,
    color: '#333',
  },
  index: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    display: 'flex',
  },
  labelD: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 8,
    color: '#000000',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  tableRow: {
    marginBottom: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  datePickerButton: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#555',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    minHeight: 40,
    backgroundColor: '#ffffff',
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  toggleButton: {
    color: '#0f4dc9',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default CheckUpPage2;