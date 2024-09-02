import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import prescriptionData from '../../../API MALADIE/prescription.json';
import Stepper from '../blessure/Stepper';

const MaladiePage3 = ({navigation}) => {
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultations, setSelectedConsultations] = useState([]);
  const [soinsPodologiques, setSoinsPodologiques] = useState([]);
  const [selectedSoinsPodologiques, setSelectedSoinsPodologiques] = useState(
    [],
  );
  const [commentaire, setCommentaire] = useState('');
  const [commentaireSpecialises, setCommentaireSpecialises] = useState('');

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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.label}>Bilan complémentaire</Text>
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
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color: '#000'}}
              submitButtonColor="#7979f7"
              submitButtonTextStyle={{color: '#fff'}}
              styleDropdownMenuSubsection={styles.multiSelect}
            />
          </View>

          <Text style={styles.label}>Avis Specialisé</Text>
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
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{color: '#000'}}
              submitButtonColor="#7979f7"
              submitButtonTextStyle={{color: '#fff'}}
              styleDropdownMenuSubsection={styles.multiSelect}
            />
          </View>

          <Text style={styles.label}>Indicatif bilan</Text>
          <TextInput
            value={commentaire}
            onChangeText={setCommentaire}
            placeholder="Ecrire..."
            multiline
            numberOfLines={1}
            style={styles.textInput}
          />
          <Text style={styles.label}>Commentaire d'avis Spécialisés</Text>
          <TextInput
            value={commentaireSpecialises}
            onChangeText={setCommentaireSpecialises}
            placeholder="Ecrire..."
            multiline
            numberOfLines={1}
            style={styles.textInput}
          />
        </View>
      </ScrollView>

      <View style={styles.stepperContainer}>
        <Stepper
          steps={[1, 2, 3, 4]}
          currentStep={2}
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
  content: {
    flexGrow: 1,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  multiSelectContainer: {
    marginVertical: 10,
  },
  multiSelect: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
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
  stepperContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default MaladiePage3;
