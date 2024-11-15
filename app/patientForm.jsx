import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import PersonalInformation from '../components/personalInformation';
import MedicalInformation from '../components/medicalInformation';
import ConsentAndPrivacy from '../components/consentAndPrivacy';

const { width } = Dimensions.get('window');
const isLaptop = width > 1024;

const PatientForm = () => {
  const [canProceed, setCanProceed] = useState(false);
  const [personalInfoComplete, setPersonalInfoComplete] = useState(false);
  const [medicalInfoComplete, setMedicalInfoComplete] = useState(false);
  const [consentComplete, setConsentComplete] = useState(false);

  const handleConsentChange = (allConsentsChecked) => {
    setConsentComplete(allConsentsChecked);
    checkFormCompletion(personalInfoComplete, medicalInfoComplete, allConsentsChecked);
  };

  const handleFormFieldChange = (section, isComplete) => {
    if (section === 'personal') {
      setPersonalInfoComplete(isComplete);
      checkFormCompletion(isComplete, medicalInfoComplete, consentComplete);
    } else if (section === 'medical') {
      setMedicalInfoComplete(isComplete);
      checkFormCompletion(personalInfoComplete, isComplete, consentComplete);
    }
  };

  const checkFormCompletion = (personalComplete, medicalComplete, consentComplete) => {
    setCanProceed(personalComplete && medicalComplete && consentComplete);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={isLaptop ? styles.laptopScrollContainer : styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Welcome 👋</Text>
          <Text style={styles.subheaderText}>Let us know more about yourself</Text>
        </View>
        <View style={isLaptop ? styles.contentContainerLaptop : styles.contentContainer}>
          <View style={styles.formContainer}>
            <PersonalInformation onFormFieldChange={(isComplete) => handleFormFieldChange('personal', isComplete)} />
            <MedicalInformation onFormFieldChange={(isComplete) => handleFormFieldChange('medical', isComplete)} />
            <ConsentAndPrivacy onConsentChange={handleConsentChange} />
            <TouchableOpacity
              style={StyleSheet.compose(
                styles.submitButton,
                canProceed ? styles.activeButton : styles.disabledButton
              )}
              disabled={!canProceed}
              accessibilityLabel="Submit form and continue"
            >
              <Text style={styles.submitButtonText}>Submit and continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131619',
    padding: isLaptop ? 40 : 20,
  },
  laptopScrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 40,
    paddingTop: 30,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 25,
  },
  headerContainer: {
    marginBottom: isLaptop ? 40 : 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: isLaptop ? 48 : 36,
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  subheaderText: {
    color: '#ABB8C4',
    fontSize: isLaptop ? 20 : 16,
    fontWeight: '500',
    letterSpacing: 0.15,
    marginTop: 10,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainerLaptop: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  formContainer: {
    width: '100%',
    maxWidth: isLaptop ? 600 : 400,
    paddingHorizontal: isLaptop ? 20 : 10,
  },
  submitButton: {
    alignSelf: 'stretch',
    borderRadius: 8,
    marginTop: 20,
    minHeight: 48,
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4D62E5',  // Blue when activated
    opacity: 1,                  // Full opacity when enabled
  },
  disabledButton: {
    backgroundColor: '#999',      // Gray when inactive
    opacity: 0.5,                 // Reduced opacity when disabled
  },
  submitButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    letterSpacing: 0.15,
    textAlign: 'center',
  },})


export default PatientForm;