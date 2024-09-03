import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const MaladiePage4 = ({navigation}) => {
  const [commentaireSpecialises, setCommentaireSpecialises] = useState('');

  const handleFinish = () => {
    alert('Form submitted!');
    navigation.navigate('ConsultationTypePopup');
  };

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick();
      console.log(doc);
    } catch (err) {
      if (DocumentPicker.isCancel('User cancelled the upload', e))
        console.log(e);
      else console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rapport Médical :</Text>
        <TextInput
          value={commentaireSpecialises}
          onChangeText={setCommentaireSpecialises}
          placeholder="Ecrire..."
          multiline
          numberOfLines={5}
          style={styles.textInput}
        />
      </View>

      <Text style={styles.label}>Choisir une document : </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Select Document" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
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
  },
});

export default MaladiePage4;
