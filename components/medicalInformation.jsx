import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FormField from './formField';

const MedicalInformation = () => {
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [pastHistory, setPastHistory] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Medical Information</Text>
      <View style={styles.fieldsContainer}>
        <FormField
          label="Primary Care Physician"
          placeholder="Select your physician"
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a21bc7aee1834c43e600e90861de874633a87d3991bbbdc6c4ed2d64f1ea7145?placeholderIfAbsent=true&apiKey=32c4ffc8e48b40698dd5b38904d4fcc2"
          value="Dr. Adam Smith"
          avatarUri="https://cdn.builder.io/api/v1/image/assets/TEMP/28c41ef490c33ff5082da59e110230f7f4803e0a2f9942e1408c0963387469e2?placeholderIfAbsent=true&apiKey=32c4ffc8e48b40698dd5b38904d4fcc2"
        />
        <View style={styles.row}>
          <FormField
            label="Insurance Provider"
            placeholder="ex: BlueCross"
            value={insuranceProvider}
            onChange={setInsuranceProvider}
          />
          <FormField
            label="Insurance Policy Number"
            placeholder="ex: ABC1234567"
            value={insurancePolicyNumber}
            onChange={setInsurancePolicyNumber}
          />
        </View>
        <View style={styles.row}>
          <FormField
            label="Allergies (if any)"
            placeholder="ex: Peanuts, Penicillin, Pollen"
            value={allergies}
            multiline
            onChange={setAllergies}
          />
          <FormField
            label="Current Medications"
            placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
            value={medications}
            multiline
            onChange={setMedications}
          />
        </View>
        <View style={styles.row}>
          <FormField
            label="Family Medical History (if relevant)"
            placeholder="ex: Mother had breast cancer"
            value={familyHistory}
            multiline
            onChange={setFamilyHistory}
          />
          <FormField
            label="Past Medical History"
            placeholder="ex: Asthma diagnosis in childhood"
            value={pastHistory}
            multiline
            onChange={setPastHistory}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  sectionTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 36,
  },
  fieldsContainer: {
    gap: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 24,
    flexWrap: 'wrap',  // Added flexWrap for responsive design
  },
});

export default MedicalInformation;
