import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ConsultationTypePopup = ({navigation}) => {
  const {t} = useTranslation();

  const handleNavigation = type => {
    navigation.navigate('BlessureSteps', {type_consultation: type});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{t('CONSULTATION_TYPE')}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('maladie')}>
        <Icon name="medical-services" size={20} color="#fff" />
        <Text style={styles.buttonText}>{t('MALADY')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('blessure')}>
        <Icon name="healing" size={20} color="#fff" />
        <Text style={styles.buttonText}>{t('INJURY')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation('checkup')}>
        <Icon name="check-circle" size={20} color="#fff" />
        <Text style={styles.buttonText}>{t('CHECKUP')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  header: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  button: {
    backgroundColor: '#1545c9',
    padding: 10,
    borderRadius: 18,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ConsultationTypePopup;
