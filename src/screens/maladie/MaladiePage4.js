import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import DocumentPicker, {types} from 'react-native-document-picker';

const MaladiePage4 = ({formData, updateFormData, navigation}) => {
  const [rapport, setrapport] = useState(formData.rapport || '');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    updateFormData({rapport, selectedFile});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rapport, selectedFile]);

  const handleFileSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [types.allFiles],
      });
      setSelectedFile(res);
      Alert.alert('Fichier sélectionné', `Nom du fichier : ${res[0].name}`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Sélection annulée');
      } else {
        Alert.alert(
          'Erreur',
          'Une erreur est survenue lors de la sélection du fichier',
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rapport Médical :</Text>
        <TextInput
          value={rapport}
          onChangeText={text => setrapport(text)}
          placeholder="Rapport..."
          multiline
          numberOfLines={5}
          style={styles.textInput}
        />
      </View>

      <Button title="Choisir un fichier" onPress={() => {}} />
      {selectedFile && (
        <Text style={styles.fileInfo}>
          Fichier sélectionné: {selectedFile.name}
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
  fileInfo: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default MaladiePage4;
