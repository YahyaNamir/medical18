import React, {useState} from 'react';
import {View, TextInput, Button, ScrollView, StyleSheet} from 'react-native';
import CheckBox from 'react-native-check-box';
import {Table, Row} from 'react-native-table-component';

const CheckUpPage2 = () => {
  const [checkboxes, setCheckboxes] = useState({
    test1: false,
    test2: false,
    test3: false,
  });

  const [formData, setFormData] = useState({
    observation: '',
    pathologie: '',
    date: '',
    cat: '',
    arretSportif: '',
    reathletisation: '',
    // repriseGroupe: '',
    competition: '',
  });

  const handleCheckboxChange = test => {
    setCheckboxes(prev => ({...prev, [test]: !prev[test]}));
  };

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
  };

  const tableHeadFirstRow = [
    'Observation',
    'Pathologie',
    'Date',
    'CAT (en club)',
  ];
  const tableHeadSecondRow = [
    'Arrêt sportif',
    'Réathlétisation individuelle',
    'Reprise groupe',
    'Compétition',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          isChecked={checkboxes.test1}
          onClick={() => handleCheckboxChange('test1')}
          rightText={'Test 1'}
          rightTextStyle={styles.checkboxText}
        />
        <CheckBox
          isChecked={checkboxes.test2}
          onClick={() => handleCheckboxChange('test2')}
          rightText={'Test 2'}
          rightTextStyle={styles.checkboxText}
        />
        <CheckBox
          isChecked={checkboxes.test3}
          onClick={() => handleCheckboxChange('test3')}
          rightText={'Test 3'}
          rightTextStyle={styles.checkboxText}
        />
      </View>

      <Table borderStyle={{borderWidth: 1, borderColor: '#C0C0C0'}}>
        <Row
          data={tableHeadFirstRow}
          flexArr={[1, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.headerText}
        />

        <Row
          data={[
            <TextInput
              style={styles.input}
              value={formData.observation}
              onChangeText={text => handleInputChange('observation', text)}
            />,
            <TextInput
              style={styles.input}
              value={formData.pathologie}
              onChangeText={text => handleInputChange('pathologie', text)}
            />,
            <TextInput
              style={styles.input}
              value={formData.date}
              onChangeText={text => handleInputChange('date', text)}
            />,
            <TextInput
              style={styles.input}
              value={formData.cat}
              onChangeText={text => handleInputChange('cat', text)}
            />,
          ]}
          flexArr={[1, 1, 1, 1]}
          style={styles.row}
        />
        <Row
          data={tableHeadSecondRow}
          flexArr={[1, 1, 1, 1]}
          style={styles.head}
          textStyle={styles.headerText}
        />
        <Row
          data={[
            <TextInput
              style={styles.input}
              value={formData.arretSportif}
              onChangeText={text => handleInputChange('arretSportif', text)}
            />,
            <TextInput
              style={styles.input}
              value={formData.reathletisation}
              onChangeText={text => handleInputChange('reathletisation', text)}
            />,
            <TextInput
              style={styles.input}
              value={formData.repriseGroupe}
              onChangeText={text => handleInputChange('repriseGroupe', text)}
            />,
            <TextInput
              style={styles.input}
              value={formData.competition}
              onChangeText={text => handleInputChange('competition', text)}
            />,
          ]}
          flexArr={[1, 1, 1, 1]}
          style={styles.row}
        />
      </Table>

      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkboxText: {
    fontSize: 16,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    height: 50,
  },
  input: {
    borderColor: '#C0C0C0',
    borderWidth: 1,
    height: 40,
    padding: 8,
    textAlign: 'center',
  },
});

export default CheckUpPage2;
