import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const MaladiePage4 = ({navigation}) => {
  const [commentaireSpecialises, setCommentaireSpecialises] = useState('');
  const [selectedDocument, setSelectedDocument] = useState(null);

  const selectDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], 
      });
      setSelectedDocument(res[0]); // Store selected document info
      Alert.alert('Document Selected', res[0].name);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the document picker');
      } else {
        throw err;
      }
    }
  };

  const handleFinish = () => {
    alert('Form submitted!');
    navigation.navigate('ConsultationTypePopup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rapport Médical :</Text>
        <TextInput
          value={commentaireSpecialises}
          onChangeText={setCommentaireSpecialises}
          placeholder="Rapport..."
          multiline
          numberOfLines={5}
          style={styles.textInput}
        />
      </View>

      <Text style={styles.label}>Choisir un document :</Text>
      <View style={{marginHorizontal: 40}}>
        <Button title="Select Document" onPress={selectDocument} />
      </View>

      {selectedDocument && (
        <Text style={styles.selectedDocument}>
          Document: {selectedDocument.name}
        </Text>
      )}
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
  selectedDocument: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
    fontFamily: 'Poppins-Regular',
  },
});

export default MaladiePage4;
