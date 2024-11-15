import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import FormField from './formField';
import RadioButton from './radioButton';
import DateTimePicker from '@react-native-community/datetimepicker';

const PersonalInformation = ({ onFormFieldChange }) => {
  const genderOptions = ['Male', 'Female', 'Other'];
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    dateOfBirth: new Date(),
    gender: '',
    address: '',
    occupation: '',
    emergencyContactName: '',
    emergencyContactPhone: ''
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
    onFormFieldChange(updatedFormData);
  };

  const handlePhoneNumberChange = (value) => {
    // Basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(value)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
    } else {
      handleInputChange('phoneNumber', value);
    }
  };

  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      handleInputChange('dateOfBirth', selectedDate);
    }
  };

  useEffect(() => {
    onFormFieldChange(formData);
  }, [formData]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      <View style={styles.fieldsContainer}>
        <FormField
          label="Full Name"
          placeholder="ex: Adam"
          value={formData.fullName}
          onChange={(value) => handleInputChange('fullName', value)}
        />
        <View style={styles.row}>
          <FormField
            label="Email Address"
            placeholder="ex: johndoe@gmail.com"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9385fc5fd87de81706abc240aed51177792b6320be3c3863f768c94e23e7c1a4?placeholderIfAbsent=true&apiKey=32c4ffc8e48b40698dd5b38904d4fcc2"
            value={formData.emailAddress}
            onChange={(value) => handleInputChange('emailAddress', value)}
          />
          <FormField
            label="Phone Number"
            placeholder="ex: +91 0342 0453 34"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c57791540698ca63b8bd86c3b45218df1f065689269ee298e6e6477aabc08df8?placeholderIfAbsent=true&apiKey=32c4ffc8e48b40698dd5b38904d4fcc2"
            value={formData.phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </View>
        <View style={styles.row}>
          <FormField
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/79e932644b858001acdc8abd44bfa40f452cb65b93fd38e6c471a6f90f112a1b?placeholderIfAbsent=true&apiKey=32c4ffc8e48b40698dd5b38904d4fcc2"
            value={formData.dateOfBirth ? formData.dateOfBirth.toLocaleDateString() : ''}
            onFocus={showDatePickerHandler}
          />
          {showDatePicker && (
            <DateTimePicker
              value={formData.dateOfBirth}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
        <View style={styles.genderRow}>
          <View style={styles.genderContainer}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.radioGroup}>
              {genderOptions.map((option, index) => (
                <RadioButton
                  key={index}
                  label={option}
                  selected={formData.gender === option}
                  onSelect={() => handleInputChange('gender', option)}
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <FormField
            label="Address"
            placeholder="Please enter your Address"
            value={formData.address}
            onChange={(value) => handleInputChange('address', value)}
          />
          <FormField
            label="Occupation"
            placeholder="ex: Software Engineer"
            value={formData.occupation}
            onChange={(value) => handleInputChange('occupation', value)}
          />
        </View>
        <View style={styles.row}>
          <FormField
            label="Emergency Contact Name"
            placeholder="Guardian's name"
            value={formData.emergencyContactName}
            onChange={(value) => handleInputChange('emergencyContactName', value)}
          />
          <FormField
            label="Emergency Contact Number"
            placeholder="ex: +91 0342 0453 34"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c57791540698ca63b8bd86c3b45218df1f065689269ee298e6e6477aabc08df8?placeholderIfAbsent=true&apiKey=32c4ffc8e48b40698dd5b38904d4fcc2"
            value={formData.emergencyContactPhone}
            onChange={(value) => handleInputChange('emergencyContactPhone', value)}
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
  },
  genderRow: {
    marginVertical: 20,
  },
  genderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: '#ABB8C4',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default PersonalInformation;
