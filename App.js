/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ConsultationTypePopup from './src/ConsultationTypePopup';
import BlessurePage1 from './src/screens/blessure/BlessurePage1';
import BlessurePage2 from './src/screens/blessure/BlessurePage2';
import BlessurePage3 from './src/screens/blessure/BlessurePage3';
import BlessurePage4 from './src/screens/blessure/BlessurePage4';
// import MaladiePage1 from './src/screens/maladie/MaladiePage1';
// import MaladiePage2 from './src/screens/maladie/MaladiePage2';
// import MaladiePage3 from './src/screens/maladie/MaladiePage3';
// import MaladiePage4 from './src/screens/maladie/MaladiePage4';
import CheckUpPage1 from './src/screens/checkUp/CheckUpPage1';
import CheckUpPage2 from './src/screens/checkUp/CheckUpPage2';
import CheckUpPage3 from './src/screens/checkUp/CheckUpPage3';
import BlessureSteps from './src/screens/blessure/BlessureSteps';
import MaladieSteps from './src/screens/maladie/MaladieSteps';
import CheckUpSteps from './src/screens/checkUp/CheckUpSteps';
import MaladieList from './src/screens/maladie/MaladieList';
import MaladieListScreen from './src/screens/maladie/MaladieListScreen';
import './i18n'; // Import the i18n configuration
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import BlessurePage5 from './src/screens/blessure/BlessurePage5';
import HeaderRight from './HeaderRight';

const Stack = createStackNavigator();

const App = () => {
  const {t, i18n} = useTranslation();
  const switchLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        options={{
          headerShown: true,
          headerTitle: 'Home',
          headerStyle: {backgroundColor: '#1545c9'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
          headerTitleAlign: 'center',
        }}
        initialRouteName="ConsultationTypePopup"> */}
      {/* <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Home',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="ConsultationTypePopup"
          component={ConsultationTypePopup}
        /> */}

      <Stack.Navigator initialRouteName="ConsultationTypePopup">
        <Stack.Screen
          name="ConsultationTypePopup"
          component={ConsultationTypePopup}
          options={{
            headerTitle: '',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
            headerRight: () => <HeaderRight />,
          }}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="MaladieListScreen"
          component={MaladieListScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Blessure 1/5',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="BlessurePage1"
          component={BlessurePage1}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Blessure 2/5',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="BlessurePage2"
          component={BlessurePage2}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Blessure 3/5',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="BlessurePage3"
          component={BlessurePage3}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Blessure 4/5',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="BlessurePage4"
          component={BlessurePage4}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Blessure 5/5',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="BlessurePage5"
          component={BlessurePage5}
        />
        <Stack.Screen
          options={{
            headerTitle: t('MALADY'),
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="MaladieSteps"
          component={MaladieSteps}
        />
        <Stack.Screen
          options={{
            headerTitle: t('CheckUpSteps'),
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="CheckUpSteps "
          component={CheckUpSteps}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerRight: () => <HeaderRight />,
            headerTitle: t('INJURY'),
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="BlessureSteps"
          component={BlessureSteps}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: t('CHECKUP'),
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="CheckUpSteps"
          component={CheckUpSteps}
        />
        {/* <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Infos 1/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="MaladiePage1"
          component={MaladiePage1}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Prescription 2/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="MaladiePage2"
          component={MaladiePage2}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Bilan Complémentaire et Avis Spécialisée 3/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="MaladiePage3"
          component={MaladiePage3}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Informations additionnelles 4/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="MaladiePage4"
          component={MaladiePage4}
        /> */}
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'CheckUp 1/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="CheckUpPage1"
          component={CheckUpPage1}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'CheckUp 2/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="CheckUpPage2"
          component={CheckUpPage2}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'CheckUp 3/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="CheckUpPage3"
          component={CheckUpPage3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


