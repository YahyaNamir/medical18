import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ConsultationTypePopup from './src/ConsultationTypePopup';
import BlessurePage1 from './src/screens/blessure/BlessurePage1';
import BlessurePage2 from './src/screens/blessure/BlessurePage2';
import BlessurePage3 from './src/screens/blessure/BlessurePage3';
import BlessurePage4 from './src/screens/blessure/BlessurePage4';
import MaladiePage1 from './src/screens/maladie/MaladiePage1';
import MaladiePage2 from './src/screens/maladie/MaladiePage2';
import MaladiePage3 from './src/screens/maladie/MaladiePage3';
import MaladiePage4 from './src/screens/maladie/MaladiePage4';
import CheckUpPage1 from './src/screens/checkUp/CheckUpPage1';
import CheckUpPage2 from './src/screens/checkUp/CheckUpPage2';
import CheckUpPage3 from './src/screens/checkUp/CheckUpPage3';
import CheckUpPage4 from './src/screens/checkUp/CheckUpPage4';
import BlessureSteps from './src/screens/blessure/BlessureSteps';
import MaladieSteps from './src/screens/maladie/MaladieSteps';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          headerShown: true,
          headerTitle: 'Home',
          headerStyle: {backgroundColor: '#1545c9'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
          headerTitleAlign: 'center',
        }}
        initialRouteName="ConsultationTypePopup">
        <Stack.Screen
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
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Blessure 1/4',
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
            headerTitle: 'Blessure 2/4',
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
            headerTitle: 'Blessure 3/4',
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
            headerTitle: 'Blessure 4/4',
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
            headerTitle: 'Maladie',
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
            headerShown: true,
            headerTitle: 'Blessure',
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
        />
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
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'CheckUp 4/4',
            headerStyle: {backgroundColor: '#1545c9'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-Bold'},
            headerTitleAlign: 'center',
          }}
          name="CheckUpPage4"
          component={CheckUpPage4}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
