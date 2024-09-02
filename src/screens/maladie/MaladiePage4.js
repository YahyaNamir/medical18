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

const MaladiePage4 = ({ navigation }) => {
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultations, setSelectedConsultations] = useState([]);
  const [soinsPodologiques, setSoinsPodologiques] = useState([]);
  const [selectedSoinsPodologiques, setSelectedSoinsPodologiques] = useState(
    [],
  );
  const [commentaire, setCommentaire] = useState('');

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
  const handleStepChange = (step) => {
    if (step === 2) {
      navigation.navigate('MaladiePage3');
    }
  };

  const handleFinish = () => {
    alert('Form submitted !');
    navigation.navigate('ConsultationTypePopup'); 
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.label}>Rapport Medical</Text>
        <TextInput
          value={commentaire}
          onChangeText={setCommentaire}
          placeholder="Ecrire..."
          multiline
          numberOfLines={2}
          style={styles.textInput}
        />
        
        <Stepper
          steps={[1, 2, 3, 4]}
          currentStep={3}
          onStepChange={handleStepChange}
          style={styles.stepper}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    fontFamily: 'Poppins-Regular',
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
    fontFamily: 'Poppins-Regular',
  },
  picker: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
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
  stepper: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default MaladiePage4;
