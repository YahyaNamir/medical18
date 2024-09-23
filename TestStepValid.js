import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
  
  export default function TestStepValid() {
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      city: '',
    });
  
    const handleChange = (name, value) => {
      setFormData({...formData, [name]: value});
    };
  
    const validateFieldsStep1 = () => {
      if (!formData.name || !formData.address) {
        Alert.alert('Validation Error', 'Please fill in all fields in Step 1.');
        return false;
      }
      return true;
    };
  
    const validateFieldsStep2 = () => {
      if (!formData.city) {
        Alert.alert('Validation Error', 'Please fill in the city in Step 2.');
        return false;
      }
      return true;
    };
  
    return (
      <View style={{flex: 1}}>
        <ProgressSteps>
          <ProgressStep 
            label="Step 1"
            nextBtnDisabled={!formData.name || !formData.address}
            onNext={() => {
              if (!validateFieldsStep1()) {
                return false; // Prevents moving to the next step
              }
              return true; // Allows moving to the next step
            }}>
            <View style={styles.stepContainer}>
              <Text>Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={value => handleChange('name', value)}
              />
              <Text>Address:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your address"
                value={formData.address}
                onChangeText={value => handleChange('address', value)}
              />
            </View>
          </ProgressStep>
  
          <ProgressStep 
            label="Step 2"
            nextBtnDisabled={!formData.city}
            onNext={() => {
              if (!validateFieldsStep2()) {
                return false; // Prevents moving to the next step
              }
              return true; // Allows moving to the next step
            }}>
            <View style={styles.stepContainer}>
              <Text>City:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your city"
                value={formData.city}
                onChangeText={value => handleChange('city', value)}
              />
            </View>
          </ProgressStep>
  
          <ProgressStep label="Review">
            <View style={styles.stepContainer}>
              <Text>Name: {formData.name}</Text>
              <Text>Address: {formData.address}</Text>
              <Text>City: {formData.city}</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    stepContainer: {
      alignItems: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      width: '80%',
      marginVertical: 10,
      paddingHorizontal: 10,
    },
  });
  