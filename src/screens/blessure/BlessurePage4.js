import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MultiSelect from 'react-native-multiple-select';

const bilans = [
  {id: '1', name: 'Numération Formule Sanguine (Nfs)'},
  {id: '2', name: 'Profil Lipidique'},
  {id: '3', name: 'Glycémie À Jeun'},
  {id: '4', name: 'Fonction Rénale (Créatinine, Urée)'},
  {id: '5', name: 'Fonction Hépatique (Transaminases, Bilirubine)'},
  {id: '6', name: 'Electrolytes (Sodium, Potassium)'},
  {id: '7', name: 'Tests De Coagulation (Tp, Tca)'},
  {id: '8', name: 'Tests Hormonaux'},
  {id: '9', name: 'Sérologies Virales'},
  {id: '10', name: "Analyse D'urine"},
  {id: '11', name: 'Marqueurs Tumoraux'},
  {id: '12', name: 'Angiographie'},
  {id: '13', name: 'Échographie'},
  {id: '14', name: 'Irm (Imagerie Par Résonance Magnétique)'},
  {id: '15', name: 'Irm Cardiaque'},
  {id: '16', name: 'Irm (Âge Osseux)'},
  {id: '17', name: 'Tdm (Tomodensitométrie)'},
  {id: '18', name: 'Scintigraphie Osseuse'},
  {id: '19', name: 'Mammographie'},
  {id: '20', name: 'Fluoroscopie'},
  {id: '21', name: 'Radio Standard'},
];

const avisSpecialises = [
  {id: '1', name: 'Pneumologue'},
  {id: '2', name: 'Oto-rhino-laryngologiste (Orl)'},
  {id: '3', name: 'Orthopédiste'},
  {id: '4', name: 'Ophtalmologiste'},
  {id: '5', name: 'Dermatologue'},
  {id: '6', name: 'Gastro-entérologue'},
  {id: '7', name: 'Gynécologue'},
  {id: '8', name: 'Psychiatre'},
  {id: '9', name: 'Rhumatologue'},
  {id: '10', name: 'Urologue'},
];

export default function BlessurePage4() {
  const [selectedBilans, setSelectedBilans] = useState([]);
  const [selectedAvis, setSelectedAvis] = useState([]);
  const [commentaire, setCommentaire] = useState('');
  const [commentaireBilan, setCommentaireBilan] = useState('');

  const handleBilansChange = items => setSelectedBilans(items);
  const handleAvisChange = items => setSelectedAvis(items);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bilan complémentaire</Text>
      <MultiSelect
        hideTags
        items={bilans}
        uniqueKey="id"
        onSelectedItemsChange={handleBilansChange}
        selectedItems={selectedBilans}
        selectText="Select Bilans"
        searchInputPlaceholderText="Search Bilans..."
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

      <Text style={styles.label}>Avis Specialisé</Text>
      <MultiSelect
        hideTags
        items={avisSpecialises}
        uniqueKey="id"
        onSelectedItemsChange={handleAvisChange}
        selectedItems={selectedAvis}
        selectText="Select Avis"
        searchInputPlaceholderText="Search Avis..."
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

      <Text style={styles.label}>Idicatif Bilan</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Bilan..."
        value={commentaireBilan}
        onChangeText={setCommentaireBilan}
      />

      <Text style={styles.label}>Commentaire d'avis spécialisés</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Avis ..."
        value={commentaire}
        onChangeText={setCommentaire}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '90%',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  inputContainer: {
    marginVertical: 10,
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
